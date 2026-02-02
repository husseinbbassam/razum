
import React from 'react';

export type Language = 'sl' | 'en';
export type Theme = 'light' | 'dark';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface TranslationSchema {
  nav: { [key: string]: string };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaProjects: string;
    ctaAbout: string;
  };
  stats: { [key: string]: string };
  services: {
    title: string;
    subtitle: string;
    cta: string;
  };
  aiCapabilities: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    features: { title: string; desc: string }[];
  };
  ai: {
    title: string;
    subtitle: string;
    placeholder: string;
    cta: string;
  };
  projects: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    values: string[];
    quote: string;
    role: string;
    titleHighlight: string;
  };
  contact: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    email: string;
    call: string;
    phone: string;
  };
  legal: {
    privacyTitle: string;
    privacyContent: string;
    cookiesTitle: string;
    cookiesContent: string;
    cookieBannerText: string;
    accept: string;
    close: string;
  };
}
