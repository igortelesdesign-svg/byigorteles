import { PlaygroundItem } from '../types';

import kineticTypeImg from '../assets/images/kinetic_type_mockup_1787671558160.jpg';
import glassDockImg from '../assets/images/glass_dock_mockup_1787671573555.jpg';
import nexusImg from '../assets/images/nexus_system_mockup_1787671320290.jpg';
import rcmImg from '../assets/images/rcm_branding_mockup_1787671306752.jpg';

export const playgroundData: PlaygroundItem[] = [
  {
    id: 'kinetic-typography',
    title: 'Kinetic Typography & Rhythmic Grid',
    category: 'graphic-design',
    categoryLabel: { pt: 'Design Gráfico', en: 'Graphic Design' },
    year: '2025',
    image: kineticTypeImg,
    description: {
      pt: 'Exploração de tipografia cinética e grids suíços contemporâneos sobrepostos a contrastes monocromáticos e azuis elétricos.',
      en: 'Kinetic typography and contemporary Swiss grid research with high-contrast monochromes and electric blue hues.'
    },
    tools: ['Photoshop', 'Illustrator', 'InDesign']
  },
  {
    id: 'glass-audio-dock',
    title: 'Spatial Audio Dock UI Experiment',
    category: 'ui-experiments',
    categoryLabel: { pt: 'UI Experiments', en: 'UI Experiments' },
    year: '2025',
    image: glassDockImg,
    description: {
      pt: 'Widget interativo de controle de áudio espacial com feedback háptico visual, onda senoidal em tempo real e backdrop blur calibrado.',
      en: 'Interactive spatial audio control widget with haptic visual feedback, live sine wave visualizers, and calibrated blur.'
    },
    tools: ['Figma', 'React', 'Tailwind CSS', 'Web Audio API']
  },
  {
    id: 'fluid-mesh-shaders',
    title: 'Generative Canvas Mesh Gradients',
    category: 'creative-coding',
    categoryLabel: { pt: 'Creative Coding', en: 'Creative Coding' },
    year: '2024',
    image: nexusImg,
    description: {
      pt: 'Estudo de shaders em WebGL e Canvas 2D gerando gradientes líquidos matemáticos reativos ao movimento do cursor.',
      en: 'WebGL & Canvas 2D shader experiment generating procedural liquid mesh gradients reacting to pointer velocity.'
    },
    tools: ['TypeScript', 'HTML5 Canvas', 'Math Algorithms']
  },
  {
    id: 'cyber-art-direction',
    title: 'Editorial Poster Series: Idea to Reality',
    category: 'ai-art',
    categoryLabel: { pt: 'Direção com IA', en: 'AI Art Direction' },
    year: '2024',
    image: rcmImg,
    description: {
      pt: 'Série de posters editoriais explorando o diálogo entre inteligência artificial generativa, composição manual no Photoshop e tipografia vetorial.',
      en: 'Editorial poster series investigating the intersection of generative AI, manual Photoshop compositing, and vector typography.'
    },
    tools: ['Midjourney', 'Photoshop', 'Illustrator', 'Typography']
  }
];
