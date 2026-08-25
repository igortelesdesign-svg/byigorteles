import { PlaygroundItem } from '../types';

import primeCarnesImg from '../assets/images/prime-carnes-case.webp';
import rcmJucurutuImg from '../assets/images/rcm-jucurutu-case.webp';
import rnCrossImg from '../assets/images/rn-cross-case.webp';
import dunaMoveCreativeImg from '../assets/images/duna-move-creative-case.webp';
import somaImg from '../assets/images/soma-case.webp';

export const playgroundData: PlaygroundItem[] = [
  {
    id: 'prime-carnes-retail',
    title: 'Prime Carnes — Retail Campaign',
    category: 'graphic-design',
    categoryLabel: { pt: 'Design Gráfico', en: 'Graphic Design' },
    year: '2026',
    image: primeCarnesImg,
    description: {
      pt: 'Campanha publicitária para varejo alimentício, combinando direção de arte, composição promocional e comunicação de ponto de venda.',
      en: 'Retail advertising campaign combining art direction, promotional composition and point-of-sale communication.'
    },
    tools: ['Photoshop', 'Art Direction', 'Social Media', 'Advertising']
  },
  {
    id: 'rcm-jucurutu-campaign',
    title: 'RCM Jucurutu — Brand Campaign',
    category: 'art-direction',
    categoryLabel: { pt: 'Direção de Arte', en: 'Art Direction' },
    year: '2026',
    image: rcmJucurutuImg,
    description: {
      pt: 'Campanha de expansão da Rede de Postos RCM, trabalhando identidade visual, personagem de marca, comunicação promocional e presença local.',
      en: 'Expansion campaign for Rede de Postos RCM combining brand identity, mascot usage, promotional communication and local presence.'
    },
    tools: ['Photoshop', 'Branding', 'Art Direction', 'Social Media']
  },
  {
    id: 'rn-cross-community',
    title: 'RN Cross — Community Campaign',
    category: 'art-direction',
    categoryLabel: { pt: 'Design Gráfico', en: 'Graphic Design' },
    year: '2026',
    image: rnCrossImg,
    description: {
      pt: 'Direção visual para comunicação fitness focada em comunidade, intensidade, pertencimento e performance no ambiente de treino.',
      en: 'Visual direction for a fitness campaign focused on community, intensity, belonging and performance.'
    },
    tools: ['Photography', 'Photoshop', 'Social Media', 'Art Direction']
  },
  {
    id: 'duna-move-content',
    title: 'Duna Move — Activewear Content',
    category: 'art-direction',
    categoryLabel: { pt: 'Design Gráfico', en: 'Graphic Design' },
    year: '2026',
    image: dunaMoveCreativeImg,
    description: {
      pt: 'Conteúdo visual para marca de activewear, unindo fotografia fitness, direção de imagem, posicionamento de produto e linguagem editorial.',
      en: 'Visual content for an activewear brand combining fitness photography, image direction, product positioning and editorial language.'
    },
    tools: ['Photography', 'Brand Content', 'Art Direction', 'Photoshop']
  },
  {
    id: 'soma-visual-communication',
    title: 'Soma — Visual Communication',
    category: 'graphic-design',
    categoryLabel: { pt: 'Design Gráfico', en: 'Graphic Design' },
    year: '2026',
    image: somaImg,
    description: {
      pt: 'Peça técnica e comercial para comunicação visual, destacando estrutura, acabamento, resistência e aplicação de lonas em projetos físicos.',
      en: 'Technical and commercial visual communication piece highlighting structure, finishing, durability and physical banner applications.'
    },
    tools: ['Graphic Design', 'Advertising', 'Visual Communication', 'Photoshop']
  }
];
