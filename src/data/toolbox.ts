import { ToolItem } from '../types';

export const designTools: ToolItem[] = [
  {
    name: 'Photoshop',
    category: 'design',
    icon: 'Ps',
    description: {
      pt: 'Manipulação de imagens, composição avançada, tratamento de pele e mockups de produto.',
      en: 'Advanced image manipulation, composite art, retouching, and product mockups.'
    }
  },
  {
    name: 'Illustrator',
    category: 'design',
    icon: 'Ai',
    description: {
      pt: 'Criação de identidades visuais, logotipos, iconografia e ilustrações vetoriais escaláveis.',
      en: 'Brand identity design, vector logos, scalable iconography, and typography.'
    }
  },
  {
    name: 'InDesign',
    category: 'design',
    icon: 'Id',
    description: {
      pt: 'Design editorial, diagramação de manuais de marca, relatórios e apresentações corporativas.',
      en: 'Editorial design, brand guideline booklets, whitepapers, and corporate layouts.'
    }
  },
  {
    name: 'Premiere Pro',
    category: 'design',
    icon: 'Pr',
    description: {
      pt: 'Edição audiovisual profissional, corte rítmico, color grading e finalização de vídeos promocionais.',
      en: 'Professional video editing, rhythmic cuts, color grading, and commercial delivery.'
    }
  },
  {
    name: 'After Effects',
    category: 'design',
    icon: 'Ae',
    description: {
      pt: 'Motion graphics, animação de interfaces, vinhetas institucionais e micro-interações animadas.',
      en: 'Motion graphics, UI animations, kinetic typography, and interface teasers.'
    }
  },
  {
    name: 'Canva & CapCut',
    category: 'design',
    icon: 'Cv',
    description: {
      pt: 'Produção ágil de conteúdo para redes sociais, criativos de campanhas e vídeos curtos.',
      en: 'Agile social media creative production, campaign templates, and short-form video.'
    }
  },
  {
    name: 'Figma',
    category: 'design',
    icon: 'Fg',
    description: {
      pt: 'Prototipagem interativa, UI/UX, Design Systems, Auto Layout e tokens de design.',
      en: 'Interactive prototyping, UI/UX design, Design Systems, and design tokens.'
    }
  }
];

export const devTools: ToolItem[] = [
  {
    name: 'React & Vite',
    category: 'development',
    icon: '⚛️',
    description: {
      pt: 'Construção de aplicações SPA e PWA com renderização ultra-rápida e componentização modular.',
      en: 'Modern SPA & PWA building with lightning-fast bundling and modular component trees.'
    }
  },
  {
    name: 'TypeScript',
    category: 'development',
    icon: 'TS',
    description: {
      pt: 'Tipagem estática estrita, segurança de código, autocompletion e contratos de API confiáveis.',
      en: 'Strict static typing, runtime bug prevention, and type-safe API contracts.'
    }
  },
  {
    name: 'Tailwind CSS',
    category: 'development',
    icon: 'TW',
    description: {
      pt: 'Design Systems baseados em utilitários, responsividade fluida e layouts de alta fidelidade.',
      en: 'Utility-first token systems, responsive fluidity, and pixel-precise layout control.'
    }
  },
  {
    name: 'Supabase',
    category: 'development',
    icon: '⚡',
    description: {
      pt: 'Banco de dados PostgreSQL, autenticação segura de usuários e dados em tempo real.',
      en: 'PostgreSQL database backend, secure user auth, and real-time subscription streams.'
    }
  },
  {
    name: 'HTML5 & CSS3',
    category: 'development',
    icon: '🌐',
    description: {
      pt: 'Semântica rica para SEO, acessibilidade WCAG AA, animações CSS nativas e flex/grid.',
      en: 'Semantic markup for SEO, WCAG AA accessibility, native CSS animations, and flex/grid.'
    }
  },
  {
    name: 'Git & GitHub',
    category: 'development',
    icon: '🐙',
    description: {
      pt: 'Controle de versão colaborativo, branching disciplinado, code reviews e CI/CD.',
      en: 'Version control, disciplined feature branching, code reviews, and automated CI/CD.'
    }
  },
  {
    name: 'VS Code',
    category: 'development',
    icon: '💻',
    description: {
      pt: 'Ambiente de desenvolvimento com linters, formatters e depuração em tempo real.',
      en: 'Primary IDE setup with strict linters, formatting, and live debugging workflows.'
    }
  },
  {
    name: 'Motion',
    category: 'development',
    icon: '✨',
    description: {
      pt: 'Animações fluidas baseadas em física, transições de rotas e gestos táteis em React.',
      en: 'Physics-based animations, layout transitions, and interactive gesture feedback.'
    }
  }
];
