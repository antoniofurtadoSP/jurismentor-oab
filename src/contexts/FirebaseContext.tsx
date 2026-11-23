import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  browserLocalPersistence,
  getRedirectResult,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  type User,
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

export type CloudSyncStatus = 'idle' | 'syncing' | 'synced' | 'offline' | 'error';

export interface AuthErrorDetail {
  code: string;
  title: string;
  message: string;
  currentHostname: string;
  isEmbeddedIframe: boolean;
  canTryRedirect: boolean;
}

interface FirebaseContextValue {
  user: User | null;
  authReady: boolean;
  isSigningIn: boolean;
  syncStatus: CloudSyncStatus;
  setSyncStatus: (status: CloudSyncStatus) => void;
  lastSyncedAt: string | null;
  setLastSyncedAt: (iso: string | null) => void;
  authError: string | null;
  authErrorDetail: AuthErrorDetail | null;
  clearAuthError: () => void;
  signInWithGoogle: () => Promise<void>;
  signInWithGoogleRedirect: () => Promise<void>;
  signOutUser: () => Promise<void>;
}

const FirebaseContext = createContext<FirebaseContextValue>({
  user: null,
  authReady: false,
  isSigningIn: false,
  syncStatus: 'idle',
  setSyncStatus: () => {},
  lastSyncedAt: null,
  setLastSyncedAt: () => {},
  authError: null,
  authErrorDetail: null,
  clearAuthError: () => {},
  signInWithGoogle: async () => {},
  signInWithGoogleRedirect: async () => {},
  signOutUser: async () => {},
});

function detectEmbeddedIframe(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

function mapFirebaseAuthError(err: any): AuthErrorDetail {
  const code = String(err?.code || 'auth/unknown');
  const currentHostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const isEmbeddedIframe = detectEmbeddedIframe();
  const canTryRedirect = !isEmbeddedIframe;

  if (code === 'auth/unauthorized-domain') {
    return {
      code,
      title: 'Domínio ainda não autorizado no Firebase',
      message: `O endereço "${currentHostname}" precisa ser adicionado à lista de domínios autorizados no Firebase Console (Authentication → Settings → Authorized domains) para liberar o login com Google.`,
      currentHostname,
      isEmbeddedIframe,
      canTryRedirect: false,
    };
  }

  if (code === 'auth/popup-blocked') {
    return {
      code,
      title: 'Janela de login bloqueada pelo navegador',
      message: isEmbeddedIframe
        ? 'O navegador bloqueou a janela pop-up dentro desta visualização incorporada. Abra o aplicativo em uma nova aba ou libere pop-ups para este site.'
        : 'O navegador bloqueou a janela pop-up do Google. Você pode liberar pop-ups ou entrar usando o login na mesma aba (redirecionamento).',
      currentHostname,
      isEmbeddedIframe,
      canTryRedirect,
    };
  }

  if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
    return {
      code,
      title: 'A janela do Google fechou antes de concluir o login',
      message: isEmbeddedIframe
        ? 'No navegador ou celular, o pop-up pode fechar em branco quando cookies de terceiros estão restritos ou o app está em modo incorporado. Abra o aplicativo em uma nova aba e tente novamente.'
        : 'O pop-up foi fechado ou perdeu conexão com o aplicativo antes da confirmação (comum no celular ou navegadores que bloqueiam cookies de terceiros). Tente entrar via redirecionamento na mesma aba.',
      currentHostname,
      isEmbeddedIframe,
      canTryRedirect,
    };
  }

  if (code === 'auth/operation-not-allowed') {
    return {
      code,
      title: 'Provedor Google desativado no projeto',
      message:
        'O login com Google precisa estar habilitado no Firebase Console em Authentication → Sign-in method → Google.',
      currentHostname,
      isEmbeddedIframe,
      canTryRedirect: false,
    };
  }

  if (code === 'auth/network-request-failed') {
    return {
      code,
      title: 'Falha de conexão com o servidor de autenticação',
      message:
        'Não foi possível conectar ao Google/Firebase no momento. Verifique sua internet ou desative bloqueadores de rastreamento para esta página.',
      currentHostname,
      isEmbeddedIframe,
      canTryRedirect,
    };
  }

  return {
    code,
    title: 'Não foi possível concluir o login com Google',
    message: `O navegador retornou o erro "${code}". Seu progresso continua salvo localmente neste aparelho.`,
    currentHostname,
    isEmbeddedIframe,
    canTryRedirect,
  };
}

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [syncStatus, setSyncStatus] = useState<CloudSyncStatus>('idle');
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);
  const [authErrorDetail, setAuthErrorDetail] = useState<AuthErrorDetail | null>(null);

  useEffect(() => {
    let mounted = true;

    getRedirectResult(auth)
      .then((result) => {
        if (mounted && result?.user) {
          setUser(result.user);
          setAuthErrorDetail(null);
        }
      })
      .catch((err) => {
        if (!mounted) return;
        console.error('Firebase Redirect Sign-In error:', err);
        setAuthErrorDetail(mapFirebaseAuthError(err));
      });

    const unsub = onAuthStateChanged(
      auth,
      (firebaseUser) => {
        if (!mounted) return;
        setUser(firebaseUser);
        setAuthReady(true);
        if (firebaseUser) {
          setAuthErrorDetail(null);
          setIsSigningIn(false);
        } else {
          setSyncStatus('idle');
          setLastSyncedAt(null);
        }
      },
      (err) => {
        if (!mounted) return;
        console.error('Firebase Auth state listener error:', err);
        setAuthReady(true);
      }
    );

    return () => {
      mounted = false;
      unsub();
    };
  }, []);

  const clearAuthError = () => setAuthErrorDetail(null);

  const signInWithGoogle = async () => {
    if (isSigningIn) return;
    setIsSigningIn(true);
    setAuthErrorDetail(null);
    try {
      await setPersistence(auth, browserLocalPersistence);
      const cred = await signInWithPopup(auth, googleProvider);
      if (cred?.user) {
        setUser(cred.user);
      }
    } catch (err: any) {
      console.error('Firebase Google Sign-In error:', err);
      setAuthErrorDetail(mapFirebaseAuthError(err));
    } finally {
      setIsSigningIn(false);
    }
  };

  const signInWithGoogleRedirect = async () => {
    if (isSigningIn) return;
    setIsSigningIn(true);
    setAuthErrorDetail(null);
    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithRedirect(auth, googleProvider);
    } catch (err: any) {
      console.error('Firebase Google Redirect error:', err);
      setAuthErrorDetail(mapFirebaseAuthError(err));
      setIsSigningIn(false);
    }
  };

  const signOutUser = async () => {
    setAuthErrorDetail(null);
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Firebase Sign-Out error:', err);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        user,
        authReady,
        isSigningIn,
        syncStatus,
        setSyncStatus,
        lastSyncedAt,
        setLastSyncedAt,
        authError: authErrorDetail?.message || null,
        authErrorDetail,
        clearAuthError,
        signInWithGoogle,
        signInWithGoogleRedirect,
        signOutUser,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
