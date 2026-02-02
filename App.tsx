
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AIConsultant from './components/AIConsultant';
import { SERVICES, PROJECTS, CLIENTS, TRANSLATIONS, SOCIAL_LINKS } from './constants';
import { ArrowRight, ChevronRight, CheckCircle2, Zap, Bot, Brain, Mail, ArrowUp, X } from 'lucide-react';
import { Language, Theme } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('sl');
  const [theme, setTheme] = useState<Theme>('light');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeLegal, setActiveLegal] = useState<'privacy' | 'cookies' | null>(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  const t = TRANSLATIONS[lang];
  const services = SERVICES[lang];
  const projects = PROJECTS[lang];

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    
    const cookiesAccepted = localStorage.getItem('cookies-accepted');
    if (!cookiesAccepted) {
      setTimeout(() => setShowCookieBanner(true), 1500);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setShowCookieBanner(false);
  };

  const logoUrl = "https://cdn.prod.website-files.com/61a649552f508a67b07de5af/61a7d55559c8383ddd5e964d_image-ec1a4.png";

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500 selection:bg-razum/30">
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />

      {/* Floating Action Button: Scroll to Top */}
      <button
        onClick={() => scrollToTop()}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 z-[60] bg-razum text-black p-4 rounded-full shadow-2xl transition-all duration-500 transform ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        } hover:scale-110 active:scale-95 group`}
      >
        <ArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
      </button>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-[70] p-4 lg:p-8 flex justify-center pointer-events-none">
          <div className="bg-zinc-900 dark:bg-zinc-800 text-white p-6 rounded-[2rem] shadow-2xl border border-zinc-800 flex flex-col md:flex-row items-center gap-6 max-w-4xl w-full pointer-events-auto animate-in slide-in-from-bottom-10 duration-500">
            <p className="text-sm font-medium flex-grow leading-relaxed">
              {t.legal.cookieBannerText}
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <button 
                onClick={() => setActiveLegal('cookies')}
                className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                {t.nav.about}
              </button>
              <button 
                onClick={acceptCookies}
                className="bg-razum text-black px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform"
              >
                {t.legal.accept}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Legal Modal */}
      {activeLegal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setActiveLegal(null)}></div>
          <div className="relative bg-white dark:bg-zinc-900 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-[3rem] p-10 lg:p-16 shadow-2xl">
            <button 
              onClick={() => setActiveLegal(null)}
              className="absolute top-8 right-8 p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:rotate-90 transition-transform"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 uppercase tracking-tighter">
              {activeLegal === 'privacy' ? t.legal.privacyTitle : t.legal.cookiesTitle}
            </h2>
            <div className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-6">
              <p>{activeLegal === 'privacy' ? t.legal.privacyContent : t.legal.cookiesContent}</p>
            </div>
            <div className="mt-12">
              <button 
                onClick={() => setActiveLegal(null)}
                className="bg-black dark:bg-razum text-white dark:text-black px-10 py-4 rounded-full font-black text-lg"
              >
                {t.legal.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-56 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center justify-center gap-2.5 px-5 py-2 bg-razum/10 text-razum rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-razum/20">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-razum opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-razum"></span>
              </span>
              <span className="leading-none">{t.hero.badge}</span>
            </div>
            <h1 className="text-6xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12 uppercase">
              {t.hero.title} <span className="text-razum drop-shadow-sm">{t.hero.titleHighlight}</span>.
            </h1>
            <p className="text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="bg-black dark:bg-razum dark:text-black text-white px-10 py-5 rounded-full font-black text-xl hover:bg-zinc-800 dark:hover:bg-yellow-400 transition-all flex items-center gap-3 shadow-xl shadow-black/10">
                {t.hero.ctaProjects} <ArrowRight className="w-6 h-6" />
              </button>
              <button className="bg-white dark:bg-zinc-900 text-black dark:text-white border-2 border-zinc-100 dark:border-zinc-800 px-10 py-5 rounded-full font-black text-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all">
                {t.hero.ctaAbout}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="py-20 bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: t.stats.projects, val: '250+' },
            { label: t.stats.years, val: '12+' },
            { label: t.stats.satisfaction, val: '100%' },
            { label: t.stats.team, val: '30+' },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-5xl font-black text-razum mb-2">{stat.val}</div>
              <div className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-5xl lg:text-8xl font-black mb-8 leading-none uppercase">{t.services.title}</h2>
              <p className="text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed">{t.services.subtitle}</p>
            </div>
            <a href="#contact" className="group flex items-center gap-3 font-black text-xl text-razum">
              {t.services.cta} <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-razum dark:hover:border-razum hover:shadow-2xl hover:shadow-razum/10 transition-all duration-500">
                <div className="w-20 h-20 bg-zinc-50 dark:bg-zinc-800 text-razum rounded-3xl flex items-center justify-center mb-10 group-hover:bg-razum group-hover:text-black transition-all duration-500 scale-100 group-hover:scale-110 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-black mb-4">{service.title}</h3>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-24 lg:py-40 px-6 bg-zinc-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-razum rounded-full blur-[160px]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mb-24">
            <h2 className="text-5xl lg:text-8xl font-black mb-8 leading-none uppercase">
              {t.aiCapabilities.title} <br/><span className="text-razum">{t.aiCapabilities.titleHighlight}</span>
            </h2>
            <p className="text-2xl text-zinc-400 leading-relaxed">
              {t.aiCapabilities.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.aiCapabilities.features.map((feature, idx) => (
              <div key={idx} className="p-10 bg-zinc-900 border border-zinc-800 rounded-[3rem] group hover:border-razum/50 transition-colors">
                <div className="mb-8 text-razum">
                  {idx === 0 ? <Brain className="w-12 h-12" /> : idx === 1 ? <Zap className="w-12 h-12" /> : <Bot className="w-12 h-12" />}
                </div>
                <h3 className="text-2xl font-black mb-4">{feature.title}</h3>
                <p className="text-lg text-zinc-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Consultant Tool Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AIConsultant lang={lang} t={t} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 lg:py-40 bg-zinc-50 dark:bg-zinc-900/30 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-8xl font-black mb-8 uppercase">{t.projects.title}</h2>
            <p className="text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">{t.projects.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="group flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[3rem] mb-8 bg-zinc-200 dark:bg-zinc-800 shadow-2xl shadow-black/10">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <button className="bg-white text-black px-8 py-4 rounded-full font-black text-lg transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                      {t.projects.cta}
                    </button>
                  </div>
                </div>
                <div className="text-sm font-black text-razum uppercase tracking-[0.2em] mb-3">{project.category}</div>
                <h3 className="text-3xl font-black mb-3">{project.title}</h3>
                <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section - Typographic Logos */}
      <section className="py-32 px-6 bg-white dark:bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-black text-center text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.4em] mb-20">
            {lang === 'sl' ? 'ZAUPAJO NAM NAJBOLJŠI' : 'TRUSTED BY THE BEST'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16 items-center">
            {CLIENTS.map((client) => (
              <div key={client.name} className="group flex flex-col items-center">
                <div className="h-12 w-full flex items-center justify-center overflow-hidden">
                   <span className={`text-3xl font-black uppercase tracking-tighter transition-all duration-500 opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:text-razum cursor-default`}>
                    {client.name}
                  </span>
                </div>
                <div className="mt-2 h-0.5 w-0 group-hover:w-8 bg-razum transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:py-48 bg-zinc-950 text-white rounded-[5rem] mx-4 mb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-5xl lg:text-8xl font-black mb-16 leading-[0.9] tracking-tighter uppercase">
                {t.about.title.split('CODE')[0]}CODE<span className="text-razum">.</span>
              </h2>
              <div className="space-y-8">
                {t.about.values.map((item) => (
                  <div key={item} className="flex items-center gap-6 text-2xl font-bold group">
                    <div className="w-12 h-12 rounded-2xl bg-razum/10 flex items-center justify-center group-hover:bg-razum transition-colors">
                      <CheckCircle2 className="text-razum group-hover:text-black w-8 h-8 flex-shrink-0" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-razum/30 to-transparent rounded-full absolute -top-40 -right-40 w-[30rem] h-[30rem] blur-[120px]"></div>
              <div className="bg-zinc-900 border border-zinc-800 p-12 lg:p-16 rounded-[4rem] relative shadow-2xl">
                <p className="text-3xl lg:text-4xl font-bold italic leading-tight mb-12">
                  {t.about.quote}
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-razum flex items-center justify-center text-black font-black text-2xl shadow-lg shadow-razum/20">RM</div>
                  <div>
                    <div className="font-black text-2xl uppercase tracking-tighter">Razum Management</div>
                    <div className="text-zinc-500 font-bold uppercase tracking-widest text-sm mt-1">{t.about.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 lg:py-48 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl lg:text-9xl font-black mb-12 leading-[0.9] tracking-tighter uppercase">
            {t.contact.title} <br/><span className="text-razum italic underline decoration-8 underline-offset-8 decoration-razum/30">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-2xl lg:text-3xl text-zinc-500 dark:text-zinc-400 mb-16 leading-relaxed max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:info@razum.si" className="bg-razum text-black px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-2xl shadow-razum/40">
              {t.contact.email}
            </a>
            <a href={`tel:${t.contact.phone.replace(/\s+/g, '')}`} className="bg-black dark:bg-zinc-800 text-white px-12 py-6 rounded-full font-black text-2xl hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-all">
              {t.contact.call} {t.contact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-50 dark:bg-zinc-900/50 py-24 px-6 border-t border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-20 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <a 
                  href="#" 
                  onClick={scrollToTop}
                  className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <img src={logoUrl} alt="Razum" className="w-full h-full object-contain" />
                </a>
                <span className="font-black text-3xl tracking-tighter uppercase">Razum</span>
              </div>
              <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
                {lang === 'sl' 
                  ? 'Razum d.o.o. je vodilno podjetje za digitalno transformacijo s sedežem v Sloveniji.' 
                  : 'Razum Ltd. is a leading digital transformation company based in Slovenia.'}
              </p>
              
              <div className="mt-8 flex flex-col gap-6">
                <div>
                  <p className="font-black uppercase tracking-widest text-xs mb-2 text-zinc-400">{lang === 'sl' ? 'Telefon' : 'Phone'}</p>
                  <a href={`tel:${t.contact.phone.replace(/\s+/g, '')}`} className="text-2xl font-black text-zinc-900 dark:text-white hover:text-razum transition-colors">
                    {t.contact.phone}
                  </a>
                </div>
                <div>
                  <p className="font-black uppercase tracking-widest text-xs mb-2 text-zinc-400">{lang === 'sl' ? 'E-pošta' : 'Email'}</p>
                  <a href="mailto:info@razum.si" className="text-2xl font-black text-zinc-900 dark:text-white hover:text-razum transition-colors">
                    info@razum.si
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-black text-xl mb-8 uppercase tracking-widest">{t.nav.services}</h4>
              <ul className="space-y-4 text-lg font-bold text-zinc-500 dark:text-zinc-400">
                {services.slice(0, 4).map(s => (
                  <li key={s.id}><a href="#services" className="hover:text-razum transition-colors">{s.title}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xl mb-8 uppercase tracking-widest">{lang === 'sl' ? 'Povezave' : 'Social'}</h4>
              <ul className="space-y-4 text-lg font-bold text-zinc-500 dark:text-zinc-400">
                <li><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-razum transition-colors flex items-center gap-2">LinkedIn</a></li>
                <li><a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-razum transition-colors flex items-center gap-2">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-zinc-400 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Razum d.o.o. Made in Slovenia.</p>
            <div className="flex gap-10">
              <button 
                onClick={() => setActiveLegal('privacy')} 
                className="hover:text-razum transition-colors"
              >
                {lang === 'sl' ? 'Zasebnost' : 'Privacy'}
              </button>
              <button 
                onClick={() => setActiveLegal('cookies')} 
                className="hover:text-razum transition-colors"
              >
                {lang === 'sl' ? 'Piškotki' : 'Cookies'}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
