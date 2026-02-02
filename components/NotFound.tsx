
import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-[12rem] font-black leading-none text-razum opacity-20">404</h1>
        </div>
        
        <h2 className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">
          Page Not Found
        </h2>
        
        <p className="text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed max-w-xl mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/"
            className="bg-razum text-black px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl shadow-razum/40 flex items-center justify-center gap-3"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </a>
          
          <button 
            onClick={() => window.history.back()}
            className="bg-white dark:bg-zinc-900 text-black dark:text-white border-2 border-zinc-200 dark:border-zinc-800 px-8 py-4 rounded-full font-black text-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all flex items-center justify-center gap-3"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
