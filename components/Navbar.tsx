
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe as GlobeIcon } from 'lucide-react';
import { Language, Theme } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, theme, setTheme, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const logoUrl = "https://cdn.prod.website-files.com/61a649552f508a67b07de5af/61a7d55559c8383ddd5e964d_image-ec1a4.png";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={scrollToTop} className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
            <img src={logoUrl} alt="Razum" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-2xl tracking-tighter uppercase dark:text-white">Razum</span>
        </a>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6 mr-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-semibold hover:text-razum transition-colors dark:text-zinc-300 dark:hover:text-razum"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800"></div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 dark:text-zinc-400"
              title="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* Language Toggle */}
            <button 
              onClick={() => setLang(lang === 'sl' ? 'en' : 'sl')}
              className="flex items-center gap-1.5 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-sm font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-300"
            >
              <GlobeIcon className="w-4 h-4" />
              {lang}
            </button>

            <a 
              href="#contact" 
              className="bg-black dark:bg-razum dark:text-black text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-zinc-800 dark:hover:bg-yellow-400 transition-all ml-2"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 text-zinc-500 dark:text-zinc-400"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button className="dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-bold border-b border-zinc-50 dark:border-zinc-800 pb-2 dark:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setLang(lang === 'sl' ? 'en' : 'sl')}
              className="text-sm font-bold uppercase tracking-widest text-razum flex items-center gap-2"
            >
              <GlobeIcon className="w-5 h-5" />
              {lang === 'sl' ? 'English' : 'Slovenščina'}
            </button>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-razum text-black px-6 py-3 rounded-full font-bold"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
