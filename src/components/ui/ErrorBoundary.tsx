import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './Button';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-brand-dark p-4">
          <div className="max-w-md w-full bg-brand-surface/5 border border-white/10 p-8 rounded-sm text-center">
            <div className="mx-auto h-16 w-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">⚠️</span>
            </div>
            <h2 className="text-xl font-serif font-bold text-stone-100 mb-2">
              Something went wrong
            </h2>
            <p className="text-stone-400 text-sm mb-6">
              We encountered an unexpected error. Our team has been notified.
            </p>
            <div className="bg-black/20 p-4 rounded text-left mb-6 overflow-auto max-h-32">
              <code className="text-xs font-mono text-red-400">
                {this.state.error?.message}
              </code>
            </div>
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
                className="border-white/10 hover:border-brand-gold/50"
              >
                Reload Page
              </Button>
              <Button
                onClick={() => window.location.href = '/'}
                className="bg-brand-gold text-brand-dark font-bold"
              >
                Go Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
