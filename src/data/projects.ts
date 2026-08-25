import { ProjectItem } from '../types';

import neneImg from '../assets/images/nene-real-mockup.png';
import dunaStoreImg from '../assets/images/duna_store_mockup_1787671246927.jpg';
import portalPacienteImg from '../assets/images/portal_paciente_mockup_1787671277960.jpg';
import dunaMoveImg from '../assets/images/duna_move_mockup_1787671291818.jpg';

export const projectsData: ProjectItem[] = [
  {
    id: 'nene-pwa',
    slug: 'nene',
    number: '01',
    title: 'NENÊ',
    year: '2025',
    category: {
      pt: 'Product Design · PWA · Front-End',
      en: 'Product Design · PWA · Front-End'
    },
    description: {
      pt: 'Aplicação web progressiva para organização da rotina de cuidados infantis, reunindo informações e registros importantes em uma experiência simples e acessível.',
      en: 'Progressive web application designed to organize infant care routines, gathering essential information and daily logs in a simple, accessible experience.'
    },
    shortDescription: {
      pt: 'Aplicação web progressiva para organização da rotina de cuidados infantis, reunindo informações e registros importantes em uma experiência simples e acessível.',
      en: 'Progressive web application designed to organize infant care routines, gathering essential information and daily logs in a simple, accessible experience.'
    },
    image: neneImg,
    gallery: [neneImg],
    technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'PWA', 'UI/UX'],
    roles: {
      pt: ['Product Discovery', 'Mobile-First UX', 'PWA Engineering', 'Front-End Development'],
      en: ['Product Discovery', 'Mobile-First UX', 'PWA Engineering', 'Front-End Development']
    },
    liveUrl: 'https://nene.byigorteles.com',
    githubUrl: 'https://github.com/igortelesdesign-svg/nene-childcare-pwa',
    featured: true,
    tags: ['Product Design', 'PWA', 'Front-End', 'Mobile First'],
    challenge: {
      pt: 'Pais em rotinas exaustivas com bebês pequenos precisam registrar dados enquanto seguram a criança no colo. O app precisava ser ultra-rápido, funcionar offline e ter navegação livre de atritos.',
      en: 'Sleep-deprived parents need to record infant events while holding their baby. The app demanded rapid one-thumb interaction, full offline capability, and zero visual clutter.'
    },
    solution: {
      pt: 'Design Mobile-First com ergonomia de alcance com uma mão (Thumb-Zone), Service Workers para suporte offline e feed cronológico simplificado.',
      en: 'Mobile-first design with one-handed reachability (Thumb-Zone), Service Workers for robust offline resilience, and clean chronological activity feeds.'
    },
    result: {
      pt: 'Tempo médio de registro reduzido para 3.2 segundos com 100% de disponibilidade offline e alta retenção.',
      en: 'Average logging time reduced to 3.2 seconds with 100% offline reliability and high daily retention.'
    },
    links: {
      live: 'https://nene.byigorteles.com',
      github: 'https://github.com/igortelesdesign-svg/nene-childcare-pwa',
      caseStudy: true
    },
    caseStudy: {
      overview: {
        pt: 'NENÊ é uma aplicação web progressiva (PWA) projetada com foco em usabilidade com apenas uma mão para mães, pais e cuidadores registrarem mamadas, sono, vacinas e marcos de desenvolvimento.',
        en: 'NENÊ is a Progressive Web App (PWA) engineered for effortless one-handed use, allowing parents and caregivers to log feedings, sleep sessions, vaccines, and developmental milestones.'
      },
      challenge: {
        pt: 'Pais em rotinas exaustivas com bebês pequenos precisam registrar dados enquanto seguram a criança no colo. O app precisava ser ultra-rápido, funcionar offline e ter navegação livre de atritos.',
        en: 'Sleep-deprived parents need to record infant events while holding their baby. The app demanded rapid one-thumb interaction, full offline capability, and zero visual clutter.'
      },
      myRole: {
        pt: 'Product Discovery, Pesquisa com Usuários, UI Design Mobile-First, Wireframing, Arquitetura PWA e Programação Front-End.',
        en: 'Product Discovery, User Research, Mobile-First UI Design, Wireframing, PWA Architecture, and Front-End Development.'
      },
      process: {
        pt: 'Entrevistas com cuidadores → Testes ergonômicos de zona de alcance do polegar → Criação de paleta suave e acolhedora com contraste adequado para uso noturno → Implementação de Service Worker para suporte offline.',
        en: 'Caregiver interviews → Thumb-zone ergonomic reachability testing → Night-friendly color palette creation → Service Worker setup for robust offline functionality.'
      },
      designDecisions: {
        pt: [
          'Layout pensado para operação com o polegar (Thumb-Zone Optimization) com ações principais na base da tela.',
          'Modo noturno balanceado para evitar cansaço visual durante mamadas na madrugada.',
          'Feed visual em linha do tempo com ícones intuitivos para rápida identificação de eventos.'
        ],
        en: [
          'Thumb-zone optimized layout placing all critical controls in the bottom third of the screen.',
          'Warm low-strain dark mode tailored for middle-of-the-night nursery check-ins.',
          'Visual chronological timeline with recognizable iconography for fast event logging.'
        ]
      },
      developmentDecisions: {
        pt: [
          'Service Worker configurado com IndexedDB local para sincronização em segundo plano quando reconectado à internet.',
          'Instalabilidade PWA instantânea com tamanho leve (<300kb gzip).',
          'Animações táteis com Motion proporcionando feedback de toque imediato.'
        ],
        en: [
          'Service Worker with local IndexedDB storage and seamless background sync on network reconnection.',
          'Zero-friction PWA installability with minimal bundle weight (<300kb gzip).',
          'Responsive tactile gesture animations using Motion for immediate haptic-like visual feedback.'
        ]
      },
      result: {
        pt: 'Um produto digital afetuoso e eficiente que transformou a rotina caótica dos primeiros meses de cuidados em uma experiência organizada.',
        en: 'A compassionate, rock-solid product transforming the chaotic early months of infant care into an organized, shared experience.'
      },
      metrics: [
        { label: { pt: 'Tempo médio de registro', en: 'Avg logging time' }, value: '3.2 seg' },
        { label: { pt: 'Uso Offline', en: 'Offline reliability' }, value: '100%' },
        { label: { pt: 'Adoção familiar', en: 'Caregiver adoption' }, value: '96%' }
      ]
    }
  },
  {
    id: 'duna-store',
    slug: 'duna-store',
    number: '02',
    title: 'DUNA STORE',
    year: '2025',
    category: {
      pt: 'Product Design · Sistema Web · Front-End',
      en: 'Product Design · Web System · Front-End'
    },
    description: {
      pt: 'Sistema de gestão de estoque e vendas desenvolvido para transformar necessidades operacionais em uma experiência digital simples, organizada e funcional.',
      en: 'Inventory and sales management system developed to transform operational needs into a simple, organized, and functional digital experience.'
    },
    shortDescription: {
      pt: 'Sistema de gestão de estoque e vendas desenvolvido para transformar necessidades operacionais em uma experiência digital simples, organizada e funcional.',
      en: 'Inventory and sales management system developed to transform operational needs into a simple, organized, and functional digital experience.'
    },
    image: dunaStoreImg,
    gallery: [dunaStoreImg],
    technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'UI/UX'],
    roles: {
      pt: ['Product Design', 'UI/UX Design', 'Design System', 'Front-End Development'],
      en: ['Product Design', 'UI/UX Design', 'Design System', 'Front-End Development']
    },
    liveUrl: 'https://duna-store.byigorteles.com',
    githubUrl: 'https://github.com/igortelesdesign-svg/duna-store-system',
    featured: true,
    tags: ['Product Design', 'Sistema Web', 'Front-End', 'Supabase'],
    challenge: {
      pt: 'Equipes de varejo costumam enfrentar sistemas legados complexos, lentos e com excesso de formulários poluídos. O objetivo foi criar uma aplicação robusta e responsiva que reduzisse o tempo de registro de pedidos em mais de 50%.',
      en: 'Retail teams often struggle with slow legacy software cluttered with unintuitive menus. The objective was to design a clean, responsive web application cutting order processing time by more than 50%.'
    },
    solution: {
      pt: 'Interface baseada em cards modulares com tipografia nítida, atalhos rápidos e banco de dados em tempo real no Supabase com validação estrita em TypeScript.',
      en: 'Modular card-based UI with crisp typography, rapid keyboard workflows, and real-time Supabase backend with strict TypeScript validation.'
    },
    result: {
      pt: 'Uma aplicação web rápida, moderna e intuitiva que eliminou retrabalhos manuais e proporcionou controle operacional instantâneo.',
      en: 'A high-speed, modern web application eliminating manual data entry mistakes and providing real-time operational insights.'
    },
    links: {
      live: 'https://duna-store.byigorteles.com',
      github: 'https://github.com/igortelesdesign-svg/duna-store-system',
      caseStudy: true
    },
    caseStudy: {
      overview: {
        pt: 'O Duna Store nasceu da necessidade de centralizar o controle de catálogo, fluxo de caixa e inventário em uma interface limpa, de alta velocidade e com baixa curva de aprendizado para operadores e gerentes.',
        en: 'Duna Store was created to consolidate product catalog management, cash flow tracking, and inventory control into a fast, elegant interface with a minimal learning curve.'
      },
      challenge: {
        pt: 'Equipes de varejo costumam enfrentar sistemas legados complexos, lentos e com excesso de formulários poluídos. O objetivo foi criar uma aplicação robusta e responsiva que reduzisse o tempo de registro de pedidos em mais de 50%.',
        en: 'Retail teams often struggle with slow legacy software cluttered with unintuitive menus. The objective was to design a clean, responsive web application cutting order processing time by more than 50%.'
      },
      myRole: {
        pt: 'Direção de Arte, Arquitetura de Informação, UI/UX Design, Design System no Figma e Desenvolvimento Front-End completo em React e TypeScript integrado ao Supabase.',
        en: 'Art Direction, Information Architecture, UI/UX Design, Figma Design System, and full Front-End Engineering in React & TypeScript integrated with Supabase.'
      },
      process: {
        pt: 'Mapeamento de jornada de compra → Wireframes de baixa fidelidade → Criação do Design System com tokens de cores e estados de botões → Prototipagem interativa → Codificação de componentes reutilizáveis → Integração de autenticação e banco de dados em tempo real.',
        en: 'User journey mapping → Low-fidelity wireframing → Tokenized Design System creation → Interactive prototyping → Reusable component development → Real-time database and auth integration.'
      },
      designDecisions: {
        pt: [
          'Paleta escura de alto contraste com acentos em azul ciano para foco em dados numéricos e status operacionais.',
          'Hierarquia visual orientada a cards modulares com densidade de dados equilibrada para telas de PDV e desktop.',
          'Micro-interações fluidas de confirmação de venda e atalhos rápidos de teclado para aumento de produtividade.'
        ],
        en: [
          'High-contrast dark palette with cyan highlights emphasizing numerical KPIs and operational states.',
          'Modular card-based data density optimized for both point-of-sale tablets and desktop monitors.',
          'Subtle confirmation micro-interactions and keyboard shortcuts for rapid checkout workflows.'
        ]
      },
      developmentDecisions: {
        pt: [
          'Arquitetura em React com Vite para carregamento instantâneo e bundling otimizado.',
          'TypeScript estrito garantindo consistência em todas as tipagens de produtos, clientes e transações.',
          'Persistência em Supabase com Row Level Security (RLS) e consultas otimizadas.'
        ],
        en: [
          'React architecture with Vite for instantaneous load times and lightweight bundle size.',
          'Strict TypeScript typings across all product, customer, and transaction entities.',
          'Supabase backend persistence with Row Level Security (RLS) and memoized queries.'
        ]
      },
      result: {
        pt: 'Uma aplicação web rápida, moderna e intuitiva que eliminou retrabalhos manuais e proporcionou controle gerencial em tempo real.',
        en: 'A high-speed, modern web application eliminating manual data entry mistakes and providing real-time operational insights.'
      },
      metrics: [
        { label: { pt: 'Redução no tempo de checkout', en: 'Checkout time reduction' }, value: '-55%' },
        { label: { pt: 'Lighthouse Score', en: 'Lighthouse Performance' }, value: '98/100' },
        { label: { pt: 'Satisfação dos operadores', en: 'User satisfaction' }, value: '99%' }
      ]
    }
  },
  {
    id: 'portal-paciente',
    slug: 'portal-paciente',
    number: '03',
    title: 'PORTAL DO PACIENTE',
    year: '2024',
    category: {
      pt: 'UI/UX · Web Development',
      en: 'UI/UX · Web Development'
    },
    description: {
      pt: 'Experiência digital desenvolvida para facilitar o acesso do paciente a informações, orientações e conteúdos de saúde através de uma interface clara e acessível.',
      en: 'Digital healthcare experience developed to facilitate patient access to information, guidelines, and health content through a clear and accessible interface.'
    },
    shortDescription: {
      pt: 'Experiência digital desenvolvida para facilitar o acesso do paciente a informações, orientações e conteúdos de saúde através de uma interface clara e acessível.',
      en: 'Digital healthcare experience developed to facilitate patient access to information, guidelines, and health content through a clear and accessible interface.'
    },
    image: portalPacienteImg,
    gallery: [portalPacienteImg],
    technologies: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    roles: {
      pt: ['UX Research', 'Accessibility Audit', 'Design Inclusivo', 'Front-End Semântico'],
      en: ['UX Research', 'Accessibility Audit', 'Inclusive Design', 'Semantic Front-End']
    },
    liveUrl: 'https://portal-paciente.byigorteles.com',
    githubUrl: 'https://github.com/igortelesdesign-svg/portal-paciente-accessible',
    featured: true,
    tags: ['UI/UX', 'Web Development', 'Acessibilidade', 'HTML/CSS/JS'],
    challenge: {
      pt: 'Muitos portais hospitalares são frios, difíceis de navegar e inacessíveis para quem utiliza leitores de tela ou necessita de contraste reforçado. O desafio foi combinar precisão clínica com calor humano e conformidade total WCAG AA.',
      en: 'Clinical portals are frequently confusing and inaccessible to screen readers or users needing enhanced contrast. The goal was pairing clinical clarity with warmth and full WCAG AA compliance.'
    },
    solution: {
      pt: 'Desenvolvimento em HTML semântico, controles dinâmicos de contraste/fonte e navegação 100% fluida por teclado e leitor de tela.',
      en: 'Semantic HTML markup, dynamic contrast/font scaling, and seamless keyboard and screen-reader accessibility.'
    },
    result: {
      pt: '100% de conformidade WCAG AA, redução de 42% no volume de chamadas para o suporte e download de laudos em menos de 18 segundos.',
      en: '100% WCAG AA compliance, 42% drop in support calls, and under-18-second report downloads.'
    },
    links: {
      live: 'https://portal-paciente.byigorteles.com',
      github: 'https://github.com/igortelesdesign-svg/portal-paciente-accessible',
      caseStudy: true
    },
    caseStudy: {
      overview: {
        pt: 'O Portal do Paciente é uma plataforma de saúde centrada no ser humano, projetada para atender desde jovens até pessoas idosas com diferentes graus de letramento digital ou deficiências visuais.',
        en: 'The Patient Portal is a human-centered healthcare platform designed for diverse demographics, from tech-savvy users to seniors with varying digital literacy and visual impairments.'
      },
      challenge: {
        pt: 'Muitos portais hospitalares são frios, difíceis de navegar e inacessíveis para quem utiliza leitores de tela ou necessita de contraste reforçado. O desafio foi combinar precisão clínica com calor humano e conformidade total WCAG AA.',
        en: 'Clinical portals are frequently confusing and inaccessible to screen readers or users needing enhanced contrast. The goal was pairing clinical clarity with warmth and full WCAG AA compliance.'
      },
      myRole: {
        pt: 'Auditoria de Acessibilidade, Prototipação com Design Inclusivo, Arquitetura Front-End e Validação Semântica de Código.',
        en: 'Accessibility Auditing, Inclusive Prototyping, Front-End Architecture, and Semantic Code Validation.'
      },
      process: {
        pt: 'Entrevistas com usuários da terceira idade → Mapeamento de fluxos críticos de download de laudos → Ajustes de taxas de contraste e foco por teclado → Implementação com HTML semântico e testes com NVDA e VoiceOver.',
        en: 'Senior user interviews → Critical path mapping for exam result downloads → Contrast ratio and keyboard focus optimization → Semantic HTML markup tested with NVDA and VoiceOver.'
      },
      designDecisions: {
        pt: [
          'Tipografia com escala óptica ampliada e espaçamento generoso para máxima legibilidade.',
          'Controle de tamanho de fonte e contraste dinâmico sem quebra de layout.',
          'Linguagem acolhedora com status de exames explicados de forma clara e não alarmista.'
        ],
        en: [
          'Typographic hierarchy with enlarged optical scales and generous line heights.',
          'Dynamic font-sizing and contrast controls without layout breakdown.',
          'Compassionate medical copywriting explaining exam statuses clearly.'
        ]
      },
      developmentDecisions: {
        pt: [
          'Conformidade 100% com padrões WAI-ARIA sem dependência de bibliotecas pesadas.',
          'Navegação completa e fluida via teclado com estados de foco visíveis.',
          'Carregamento ultra-leve otimizado para conexões 3G/4G.'
        ],
        en: [
          '100% compliance with WAI-ARIA guidelines with zero bulky dependencies.',
          'Comprehensive keyboard navigation flow with clear focus indicators.',
          'Ultra-lightweight assets tailored for low-bandwidth mobile connections.'
        ]
      },
      result: {
        pt: 'Redução drástica no volume de chamadas para a central telefônica e aprovação unânime em testes de acessibilidade.',
        en: 'Dramatic reduction in hospital help-desk phone calls and unanimous approval in accessibility audits.'
      },
      metrics: [
        { label: { pt: 'Acessibilidade WCAG', en: 'WCAG Accessibility' }, value: 'AA 100%' },
        { label: { pt: 'Redução de suporte', en: 'Support call reduction' }, value: '-42%' },
        { label: { pt: 'Tempo de obtenção de laudo', en: 'Time to download exam' }, value: '18 seg' }
      ]
    }
  },
  {
    id: 'duna-move',
    slug: 'duna-move',
    number: '04',
    title: 'DUNA MOVE',
    year: '2024',
    category: {
      pt: 'Brand Experience · UI Design · Front-End',
      en: 'Brand Experience · UI Design · Front-End'
    },
    description: {
      pt: 'Experiência digital criada para uma marca de activewear, conectando identidade visual, comunicação, interface e presença digital.',
      en: 'Digital experience crafted for a contemporary activewear brand, connecting brand identity, communication, interface, and digital presence.'
    },
    shortDescription: {
      pt: 'Experiência digital criada para uma marca de activewear, conectando identidade visual, comunicação, interface e presença digital.',
      en: 'Digital experience crafted for a contemporary activewear brand, connecting brand identity, communication, interface, and digital presence.'
    },
    image: dunaMoveImg,
    gallery: [dunaMoveImg],
    technologies: ['Branding', 'UI Design', 'Front-End', 'Vite'],
    roles: {
      pt: ['Brand Identity', 'Direção de Arte', 'UI/UX Design', 'Front-End Development'],
      en: ['Brand Identity', 'Art Direction', 'UI/UX Design', 'Front-End Development']
    },
    liveUrl: 'https://duna-move.byigorteles.com',
    githubUrl: 'https://github.com/igortelesdesign-svg/duna-move',
    featured: true,
    tags: ['Branding', 'UI Design', 'Front-End', 'Vite'],
    challenge: {
      pt: 'Criar uma identidade contemporânea de alto impacto visual para o setor activewear e traduzir essa estética dinâmica em uma experiência web imersiva e responsiva.',
      en: 'Create a contemporary, high-impact brand identity for activewear lifestyle and translate this dynamic aesthetics into an immersive responsive web experience.'
    },
    solution: {
      pt: 'Criação de logotipo dinâmico, paleta cromática contrastante, tipografia arrojada e interface fluida com micro-interações animadas em Motion.',
      en: 'Dynamic brand mark, energetic contrast palette, bold typography, and fluid animated web interfaces powered by Motion.'
    },
    result: {
      pt: 'Consistência visual completa entre peças gráficas, campanhas e experiência digital com 60 FPS de fluidez.',
      en: 'Seamless visual coherence across graphic branding, seasonal campaigns, and 60 FPS digital experience.'
    },
    links: {
      live: 'https://duna-move.byigorteles.com',
      github: 'https://github.com/igortelesdesign-svg/duna-move',
      caseStudy: true
    },
    caseStudy: {
      overview: {
        pt: 'O Duna Move é um projeto que conecta identidade visual, direção de arte, comunicação e produto digital em uma marca contemporânea voltada ao universo activewear e performance.',
        en: 'Duna Move connects visual identity, art direction, communications, and digital product experience for a contemporary activewear brand.'
      },
      challenge: {
        pt: 'Criar uma marca que transmitisse dinamismo e estilo, garantindo que o mesmo DNA estético da identidade visual fosse traduzido fielmente no produto digital interativo.',
        en: 'Establish a bold brand conveying dynamism and active lifestyle, ensuring the visual identity DNA was faithfully translated into the live digital platform.'
      },
      myRole: {
        pt: 'Direção Criativa, Criação de Identidade Visual e Logotipo, Design de Interface e Desenvolvimento Front-End das telas web.',
        en: 'Creative Direction, Logo & Visual Identity Design, UI/UX, and Front-End Development for web experiences.'
      },
      process: {
        pt: 'Conceituação da marca → Estudos de cor e geometria no Illustrator → Construção do Brand Book → Design da interface no Figma → Implementação em React com animações vetoriais e transições com Motion.',
        en: 'Brand concept discovery → Geometry and color research in Illustrator → Brand Book creation → UI design in Figma → React implementation with vector animations using Motion.'
      },
      designDecisions: {
        pt: [
          'Identidade com vetor dinâmico simbolizando movimento contínuo e performance.',
          'Gradientes elétricos em azul e ciano contra superfícies escuras cinematográficas.',
          'Interface com vitrines visuais e catálogo imersivo de produtos.'
        ],
        en: [
          'Dynamic vector mark symbolizing continuous movement and active performance.',
          'Electric blue and cyan gradients against deep cinematic dark surfaces.',
          'Immersive product showcase and fluid visual catalog interface.'
        ]
      },
      developmentDecisions: {
        pt: [
          'Transições de páginas e estados com animações coordenadas via Motion.',
          'Componentização modular e reutilizável com Tailwind CSS.',
          'Performance de renderização a 60fps em animações de catálogo.'
        ],
        en: [
          'Smooth state transitions and coordinated visual animations with Motion.',
          'Modular and token-aligned components built with Tailwind CSS.',
          'Smooth 60fps rendering across interactive product showcases.'
        ]
      },
      result: {
        pt: 'Uma presença de marca coesa onde a comunicação visual e a experiência de software falam exatamente a mesma língua.',
        en: 'A unified brand and software ecosystem where graphic design, branding, and interactive software speak the exact same language.'
      },
      metrics: [
        { label: { pt: 'Consistência de Marca', en: 'Brand Consistency' }, value: '100%' },
        { label: { pt: 'Engajamento no lançamento', en: 'Launch engagement' }, value: '+140%' },
        { label: { pt: 'Frame rate de animações', en: 'Animation smoothness' }, value: '60 FPS' }
      ]
    }
  }
];
