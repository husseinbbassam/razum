
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
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

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex items-center justify-center p-6">
          <div className="max-w-2xl w-full text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-500" />
              </div>
            </div>
            
            <h1 className="text-5xl font-black mb-6 uppercase tracking-tighter">
              Oops! Something went wrong
            </h1>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              We're sorry, but something unexpected happened. Our team has been notified and is working on a fix.
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-8 p-6 bg-zinc-100 dark:bg-zinc-900 rounded-2xl text-left overflow-x-auto">
                <p className="font-mono text-sm text-red-600 dark:text-red-400">
                  {this.state.error.toString()}
                </p>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={this.handleReset}
                className="bg-black dark:bg-razum dark:text-black text-white px-8 py-4 rounded-full font-black text-lg hover:bg-zinc-800 dark:hover:bg-yellow-400 transition-all flex items-center justify-center gap-3"
              >
                <RefreshCw className="w-5 h-5" />
                Go to Homepage
              </button>
              
              <a 
                href="mailto:info@razum.si"
                className="bg-white dark:bg-zinc-900 text-black dark:text-white border-2 border-zinc-200 dark:border-zinc-800 px-8 py-4 rounded-full font-black text-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
