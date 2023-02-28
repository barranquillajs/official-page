import sponsorUniBaq from '../../public/assets/sponsors/UNI-BAQ.jpg';
import sponsorPayoneer from '../../public/assets/sponsors/PAYONEER.jpg';

export const SPONSOR_LEVEL = {
  DIAMOND: { name: 'DIAMOND', width: 200 },
  GOLD: { name: 'GOLD', width: 150 },
  SILVER: { name: 'SILVER', width: 100 },
};

export const sponsorsData = [
  {
    name: 'Institución Universitaria de Barranquilla IUB',
    logo: sponsorUniBaq,
    url: 'https://www.unibarranquilla.edu.co/',
    level: SPONSOR_LEVEL.DIAMOND.name,
  },
  {
    name: 'Payoneer',
    logo: sponsorPayoneer,
    url: 'https://www.payoneer.com/es/',
    level: SPONSOR_LEVEL.SILVER.name,
  },
];
