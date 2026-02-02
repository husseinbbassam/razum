
import React from 'react';
import { Smartphone, Globe, Cloud, Layout, Cpu, ShieldCheck } from 'lucide-react';
import { Service, Project, Client, TranslationSchema, Language } from './types';

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/razum-d.o.o./',
  facebook: 'https://www.facebook.com/razum.it/',
};

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  sl: {
    nav: { services: 'Storitve', projects: 'Projekti', about: 'O nas', contact: 'Kontakt', cta: 'Povpraševanje' },
    hero: {
      badge: 'Digitalna Odličnost',
      title: 'PRETVARJAMO',
      titleHighlight: 'VIZIJE',
      subtitle: 'Razum je vaš partner za razvoj vrhunskih mobilnih in spletnih rešitev. Združujemo inovativno tehnologijo s strateškim razmišljanjem.',
      ctaProjects: 'Naši Projekti',
      ctaAbout: 'Kdo smo?'
    },
    stats: { projects: 'Uspešnih projektov', years: 'Let izkušenj', satisfaction: 'Zadovoljnih naročnikov', team: 'Članov ekipe' },
    services: {
      title: 'CELOVITE IT REŠITVE.',
      subtitle: 'Od prvega koncepta do končne implementacije in vzdrževanja. Naše storitve pokrivajo celoten življenjski cikel vašega produkta.',
      cta: 'Vse storitve'
    },
    aiCapabilities: {
      title: 'MOČ',
      titleHighlight: 'UMETNE INTELIGENCE',
      subtitle: 'Pomagamo vam izkoristiti AI za optimizacijo procesov in ustvarjanje novih vrednosti.',
      features: [
        { title: 'Razvoj po meri', desc: 'Izdelava specifičnih AI modelov prilagojenih vašim podatkom.' },
        { title: 'Generativna AI', desc: 'Integracija LLM modelov za avtomatizacijo vsebin in komunikacije.' },
        { title: 'AI Agentni Sistemi', desc: 'Avtonomni agenti, ki rešujejo kompleksne poslovne naloge.' }
      ]
    },
    ai: {
      title: 'RazumAI Svetovalec',
      subtitle: 'Iščete pravo rešitev za vaš naslednji projekt? Vprašajte našega AI svetovalca za hiter vpogled.',
      placeholder: 'Npr: Potrebujem mobilno aplikacijo...',
      cta: 'Rezerviraj klic'
    },
    projects: {
      title: 'IZBRANI PROJEKTI.',
      subtitle: 'Oglejte si naše najnovejše dosežke, kjer smo meje mogočega premaknili še korak dlje.',
      cta: 'Poglej študijo'
    },
    about: {
      title: 'MODROST V VSAKI VRSTICI KODE.',
      titleHighlight: 'RAZUM',
      values: ['Strokovnost na prvem mestu', 'Agilni razvojni proces', 'Fokus na uporabniško izkušnjo', 'Dolgotrajno partnerstvo'],
      quote: '"Ime Razum ni naključje. Verjamemo, da vsaka tehnološka rešitev potrebuje trdno logično podlago in globoko razumevanje naročnikovih potreb."',
      role: 'Direktor Razuma'
    },
    contact: {
      title: 'STE PRIPRAVLJENI NA',
      titleHighlight: 'NASLEDNJI KORAK?',
      subtitle: 'Kontaktirajte nas še danes in skupaj bomo poiskali najboljšo rešitev za vaše digitalne izzive.',
      email: 'Pišite nam na info@razum.si',
      call: 'Pokličite nas',
      phone: '(01) 542 06 00'
    },
    legal: {
      privacyTitle: 'Pravilnik o zasebnosti',
      privacyContent: 'V podjetju Razum d.o.o. cenimo vašo zasebnost. Vaše osebne podatke zbiramo le, ko nam jih prostovoljno posredujete prek kontaktnih obrazcev ali e-pošte. Podatke uporabljamo izključno za namene komunikacije in zagotavljanja naših storitev. Vaših podatkov ne bomo posredovali tretjim osebam brez vašega izrecnega soglasja.',
      cookiesTitle: 'Uporaba piškotkov',
      cookiesContent: 'Naša spletna stran uporablja piškotke za zagotavljanje boljše uporabniške izkušnje in spremljanje statistike obiska. Piškotki so majhne besedilne datoteke, ki se shranijo v vaš brskalnik. Uporabljamo nujne piškotke (za delovanje strani) in analitične piškotke (Google Analytics). Svoje nastavitve piškotkov lahko kadar koli spremenite v nastavitvah brskalnika.',
      cookieBannerText: 'To spletno mesto uporablja piškotke za izboljšanje uporabniške izkušnje.',
      accept: 'Sprejmi',
      close: 'Zapri'
    }
  },
  en: {
    nav: { services: 'Services', projects: 'Projects', about: 'About', contact: 'Contact', cta: 'Inquiry' },
    hero: {
      badge: 'Digital Excellence',
      title: 'TURNING',
      titleHighlight: 'VISIONS',
      subtitle: 'Razum is your partner for high-end mobile and web development. We combine innovative technology with strategic thinking.',
      ctaProjects: 'Our Projects',
      ctaAbout: 'Who are we?'
    },
    stats: { projects: 'Successful projects', years: 'Years of experience', satisfaction: 'Customer satisfaction', team: 'Team members' },
    services: {
      title: 'COMPREHENSIVE IT SOLUTIONS.',
      subtitle: 'From initial concept to final implementation and maintenance. Our services cover the entire lifecycle of your product.',
      cta: 'All services'
    },
    aiCapabilities: {
      title: 'THE POWER OF',
      titleHighlight: 'AI INTEGRATION',
      subtitle: 'We help you leverage AI to optimize processes and create new business value.',
      features: [
        { title: 'Custom AI Development', desc: 'Building specific AI models tailored to your unique data.' },
        { title: 'Generative AI', desc: 'Integrating LLM models to automate content and communication.' },
        { title: 'AI Agentic Systems', desc: 'Autonomous agents solving complex enterprise tasks.' }
      ]
    },
    ai: {
      title: 'RazumAI Consultant',
      subtitle: 'Looking for the right solution for your next project? Ask our AI consultant for a quick insight.',
      placeholder: 'E.g.: I need a mobile app for...',
      cta: 'Book a call'
    },
    projects: {
      title: 'SELECTED PROJECTS.',
      subtitle: 'Explore our latest achievements where we pushed the boundaries of what is possible.',
      cta: 'View Case Study'
    },
    about: {
      title: 'WISDOM IN EVERY LINE OF CODE.',
      titleHighlight: 'RAZUM',
      values: ['Expertise first', 'Agile development process', 'Focus on User Experience', 'Long-term partnership'],
      quote: '"The name Razum (Reason) is no accident. We believe every technological solution needs a solid logical foundation and a deep understanding of client needs."',
      role: 'Director of Razum'
    },
    contact: {
      title: 'READY FOR THE',
      titleHighlight: 'NEXT STEP?',
      subtitle: 'Contact us today and together we will find the best solution for your digital challenges.',
      email: 'Email us at info@razum.si',
      call: 'Call us',
      phone: '(01) 542 06 00'
    },
    legal: {
      privacyTitle: 'Privacy Policy',
      privacyContent: 'At Razum d.o.o., we value your privacy. We collect your personal data only when you voluntarily provide it via contact forms or email. We use the data exclusively for communication purposes and to provide our services. We will not pass your data on to third parties without your explicit consent.',
      cookiesTitle: 'Cookie Policy',
      cookiesContent: 'Our website uses cookies to ensure a better user experience and to monitor visit statistics. Cookies are small text files that are stored in your browser. We use necessary cookies (for site functionality) and analytical cookies (Google Analytics). You can change your cookie settings at any time in your browser settings.',
      cookieBannerText: 'This website uses cookies to improve the user experience.',
      accept: 'Accept',
      close: 'Close'
    }
  }
};

export const SERVICES: Record<Language, Service[]> = {
  sl: [
    { id: 'mobile', title: 'Mobilne Aplikacije', description: 'Visokozmogljive aplikacije za iOS in Android.', icon: <Smartphone className="w-8 h-8" /> },
    { id: 'web', title: 'Spletne Platforme', description: 'Skalabilni spletni sistemi za podjetja.', icon: <Globe className="w-8 h-8" /> },
    { id: 'custom', title: 'Programska Oprema', description: 'Rešitve po meri za vaše poslovne procese.', icon: <Cpu className="w-8 h-8" /> },
    { id: 'cloud', title: 'Cloud Rešitve', description: 'Modernizacija infrastrukture v oblaku.', icon: <Cloud className="w-8 h-8" /> },
    { id: 'uxui', title: 'UX/UI Dizajn', description: 'Uporabniško usmerjeno oblikovanje.', icon: <Layout className="w-8 h-8" /> },
    { id: 'security', title: 'Varnost & QA', description: 'Testiranje in varnostni pregledi.', icon: <ShieldCheck className="w-8 h-8" /> }
  ],
  en: [
    { id: 'mobile', title: 'Mobile Applications', description: 'High-performance native and cross-platform apps.', icon: <Smartphone className="w-8 h-8" /> },
    { id: 'web', title: 'Web Platforms', description: 'Scalable web systems and enterprise portals.', icon: <Globe className="w-8 h-8" /> },
    { id: 'custom', title: 'Custom Software', description: 'Tailor-made backend systems for your business.', icon: <Cpu className="w-8 h-8" /> },
    { id: 'cloud', title: 'Cloud Solutions', description: 'Modern cloud infrastructure and maintenance.', icon: <Cloud className="w-8 h-8" /> },
    { id: 'uxui', title: 'UX/UI Design', description: 'User-centric design thinking.', icon: <Layout className="w-8 h-8" /> },
    { id: 'security', title: 'Security & QA', description: 'Rigorous testing and security audits.', icon: <ShieldCheck className="w-8 h-8" /> }
  ]
};

export const PROJECTS: Record<Language, Project[]> = {
  sl: [
    { id: 1, title: 'Urbana Mobilnost', category: 'Mobilna Aplikacija', imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop', description: 'Revolucionarna transportna aplikacija za sodobna mesta.' },
    { id: 2, title: 'FinTech Portal', category: 'Spletna Platforma', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', description: 'Varna nadzorna plošča za bančništvo v realnem času.' },
    { id: 3, title: 'Pametna Logistika', category: 'Programska Oprema', imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop', description: 'Optimizacija dobavnih verig z uporabo umetne inteligence.' }
  ],
  en: [
    { id: 1, title: 'Urban Mobility', category: 'Mobile App', imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop', description: 'A revolutionary transportation app for modern cities.' },
    { id: 2, title: 'FinTech Portal', category: 'Web Platform', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', description: 'Secure real-time banking dashboard for enterprises.' },
    { id: 3, title: 'Smart Logistics', category: 'Custom Software', imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop', description: 'Streamlining supply chains through AI-driven insights.' }
  ]
};

export const CLIENTS: Client[] = [
  { name: 'Petrol', logo: '' },
  { name: 'NLB', logo: '' },
  { name: 'Triglav', logo: '' },
  { name: 'Krka', logo: '' },
  { name: 'Gen-I', logo: '' },
  { name: 'Telekom', logo: '' }
];
