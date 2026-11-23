import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { FirebaseProvider } from './contexts/FirebaseContext';
import './index.css';

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

class AppErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: any): ErrorBoundaryState {
    return {
      hasError: true,
      message: error?.message || 'Erro inesperado ao carregar a interface.',
    };
  }

  private handleResetCache = async () => {
    try {
      if ('serviceWorker' in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map(r => r.unregister()));
      }
      if ('caches' in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map(k => caches.delete(k)));
      }
    } catch {
      // ignore cleanup failures
    }
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF7F2] text-stone-900 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white border border-[#DFD7C8] rounded-2xl p-6 text-center space-y-4 shadow-xs">
            <h1 className="font-display text-2xl font-bold text-[#1B365D]">JurisMentor</h1>
            <p className="font-serif text-sm text-stone-700">
              Ocorreu uma falha ao iniciar o aplicativo neste dispositivo ({this.state.message}).
            </p>
            <button
              type="button"
              onClick={this.handleResetCache}
              className="w-full py-2.5 px-4 rounded-xl bg-[#1B365D] hover:bg-[#142846] text-[#FAF7F2] font-semibold text-sm cursor-pointer"
            >
              Limpar Cache e Recarregar
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <AppErrorBoundary>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </AppErrorBoundary>
);
