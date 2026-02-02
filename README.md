
# Razum | Innovative IT Solutions

> A modern, production-ready React 19 web application showcasing Razum's IT services and AI consulting capabilities

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2.4-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-purple.svg)](https://vitejs.dev/)

## 🚀 Overview

Razum is a leading digital transformation company based in Slovenia, specializing in mobile applications, web platforms, and custom software solutions. This website showcases our services, portfolio, and features an AI-powered consultant to help potential clients understand how we can assist with their projects.

## ✨ Features

- 🎨 **Modern UI/UX**: Bold, contemporary design with smooth animations
- 🌓 **Dark/Light Mode**: Full theme support with system preference detection
- 🌍 **Bilingual**: Slovenian and English language support
- 🤖 **AI Consultant**: Integrated Google Gemini AI for project consultation
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Performance Optimized**: Built with Vite for lightning-fast builds
- ♿ **Accessible**: WCAG compliant with semantic HTML
- 🔒 **Secure**: Environment-based API key management

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework with latest features and hooks |
| **TypeScript** | Type-safe code and better developer experience |
| **Vite** | Next-generation frontend tooling |
| **Tailwind CSS** | Utility-first CSS framework (via CDN) |
| **Lucide React** | Beautiful & consistent icon set |
| **Google GenAI** | AI-powered consultation features |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** or **pnpm**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/husseinbbassam/razum.git
cd razum
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit the `.env` file and add your Google Gemini API key:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

> **Getting an API Key**: Visit [Google AI Studio](https://ai.google.dev/) to generate your free API key.

### 4. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### 6. Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/husseinbbassam/razum)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variable: `VITE_GEMINI_API_KEY`
4. Deploy! 🎉

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/husseinbbassam/razum)

1. Push your code to GitHub
2. Connect your repository in [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variable: `VITE_GEMINI_API_KEY`
6. Deploy! 🎉

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your repository name:
   ```typescript
   export default defineConfig({
     base: '/razum/', // Your repository name
     // ... rest of config
   })
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
razum/
├── components/          # React components
│   ├── AIConsultant.tsx # AI consultation interface
│   ├── ErrorBoundary.tsx # Error handling component
│   └── Navbar.tsx       # Navigation component
├── services/            # API and external services
│   └── geminiService.ts # Google Gemini AI integration
├── public/              # Static assets
│   └── _redirects       # SPA routing configuration
├── App.tsx              # Main application component
├── index.tsx            # Application entry point
├── index.html           # HTML template
├── constants.tsx        # Application constants & translations
├── types.ts             # TypeScript type definitions
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── .env.example         # Environment variables template
├── vercel.json          # Vercel deployment config
├── LICENSE              # MIT License
├── CONTRIBUTING.md      # Contribution guidelines
└── README.md            # This file
```

## 🎨 Customization

### Colors

The primary brand color (Razum yellow) is defined in:
- `index.html`: Tailwind config
- CSS custom properties available throughout the app

### Content

- **Services**: Edit `constants.tsx` → `SERVICES`
- **Projects**: Edit `constants.tsx` → `PROJECTS`
- **Translations**: Edit `constants.tsx` → `TRANSLATIONS`

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on:
- Code of conduct
- Development workflow
- Coding standards
- Pull request process

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

- **Website**: [razum.si](https://razum.si)
- **Email**: info@razum.si
- **Issue Tracker**: [GitHub Issues](https://github.com/husseinbbassam/razum/issues)

## 🌟 Acknowledgments

- Built with [React 19](https://reactjs.org/)
- Powered by [Vite](https://vitejs.dev/)
- Icons by [Lucide](https://lucide.dev/)
- AI capabilities by [Google Gemini](https://ai.google.dev/)

---

<div align="center">
  <p>Made with ❤️ in Slovenia by <strong>Razum d.o.o.</strong></p>
  <p>© 2026 Razum d.o.o. All rights reserved.</p>
</div>
