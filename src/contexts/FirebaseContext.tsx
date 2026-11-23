import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, type User } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

export type CloudSyncStatus = 'idle' | 'syncing' | 'synced' | 'offline' | 'error';

interface FirebaseContextValue {
  user: User | null;
  authReady: boolean;
  syncStatus: CloudSyncStatus;
  setSyncStatus: (status: CloudSyncStatus) => void;
  lastSyncedAt: string | null;
  setLastSyncedAt: (iso: string | null) => void;
  authError: string | null;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
}

const FirebaseContext = createContext<FirebaseContextValue>({
  user: null,
  authReady: false,
  syncStatus: 'idle',
  setSyncStatus: () => {},
  lastSyncedAt: null,
  setLastSyncedAt: () => {},
  authError: null,
  signInWithGoogle: async () => {},
  signOutUser: async () => {},
});

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [syncStatus, setSyncStatus] = useState<CloudSyncStatus>('idle');
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setAuthReady(true);
      if (!firebaseUser) {
        setSyncStatus('idle');
        setLastSyncedAt(null);
      }
    });
    return () => unsub();
  }, []);

  const signInWithGoogle = async () => {
    setAuthError(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      const code = String(err?.code || '');
      if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
        return;
      }
      setAuthError('Não foi possível entrar com sua conta Google agora. Seu progresso local continua salvo.');
      console.error('Firebase Google Sign-In error:', err);
    }
  };

  const signOutUser = async () => {
    setAuthError(null);
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
        syncStatus,
        setSyncStatus,
        lastSyncedAt,
        setLastSyncedAt,
        authError,
        signInWithGoogle,
        signOutUser,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
