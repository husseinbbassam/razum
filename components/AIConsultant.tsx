
import React, { useState } from 'react';
import { MessageSquare, Send, Sparkles, Loader2 } from 'lucide-react';
import { getProjectConsultation } from '../services/geminiService';
import { Language } from '../types';

interface AIConsultantProps {
  lang: Language;
  t: any;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ lang, t }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    const res = await getProjectConsultation(query);
    setResponse(res);
    setLoading(false);
  };

  return (
    <div className="bg-zinc-950 dark:bg-black rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <Sparkles className="w-32 h-32" />
      </div>
      
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
            {t.ai.title.split('AI')[0]}<span className="text-razum">AI</span> {t.ai.title.split('AI')[1]}
          </h3>
          <p className="text-zinc-400 mb-8 max-w-md">
            {t.ai.subtitle}
          </p>
          
          <form onSubmit={handleSubmit} className="relative">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.ai.placeholder}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:border-razum transition-colors text-white"
            />
            <button 
              type="submit"
              disabled={loading}
              className="absolute right-3 top-3 bg-razum text-black p-2 rounded-xl hover:scale-105 transition-transform disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </form>
        </div>

        <div className={`min-h-[220px] flex items-center justify-center rounded-2xl border transition-all duration-500 ${
          response ? 'bg-zinc-900 border-zinc-800 p-8' : 'border-dashed border-zinc-700 p-8'
        }`}>
          {response ? (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
              <p className="text-lg leading-relaxed">{response.advice}</p>
              {response.suggestedServices?.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {response.suggestedServices.map((s: string) => (
                    <span key={s} className="bg-razum/20 text-razum px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {s}
                    </span>
                  ))}
                </div>
              )}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-sm text-zinc-500">{response.nextStep}</span>
                <a href="#contact" className="text-razum text-sm font-bold hover:underline">{t.ai.cta} &rarr;</a>
              </div>
            </div>
          ) : (
            <div className="text-center text-zinc-600">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p className="max-w-xs">{lang === 'sl' ? 'Postavite vprašanje in prejmite takojšen odgovor.' : 'Ask a question and get an instant answer.'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
