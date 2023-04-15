import sponsorUniCuc from '../public/assets/sponsors/UNI-CUC.png';
import sponsorUniBaq from '../public/assets/sponsors/UNI-BAQ.jpg';
import sponsorRichard from '../public/assets/people/RICHARD-ROCANCIO.jpeg';

export const SPONSOR_LEVEL = {
  DIAMOND: { name: 'DIAMOND', width: 200 },
  GOLD: { name: 'GOLD', width: 150 },
  SILVER: { name: 'SILVER', width: 100 },
};

export const sponsorsData = [
  {
    name: 'Richard rocancio',
    logo: sponsorRichard,
    url: 'https://github.com/batusai513',
    level: SPONSOR_LEVEL.DIAMOND.name,
    description: 'IUB (ITSA) Es una institución de educación superior en Soledad y Barranquilla Colombia.',
  },
  {
    name: 'Universidad de la costa (CUC)',
    logo: sponsorUniCuc,
    url: 'https://www.cuc.edu.co/',
    level: SPONSOR_LEVEL.DIAMOND.name,
    description: 'La CUC es una institución de educación superior en Barranquilla Colombia.',
  },
  {
    name: 'Institución Universitaria de Barranquilla IUB',
    logo: sponsorUniBaq,
    url: 'https://www.unibarranquilla.edu.co/',
    level: SPONSOR_LEVEL.GOLD.name,
  },
];
