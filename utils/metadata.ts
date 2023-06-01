import { Metadata } from 'next';
import { StaticImageData } from 'next/image';

import baqjsLogo from '../public/assets/BAQJS.png';

type HelmetProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: StaticImageData;
  url?: string;
};

export const returnMetadata = ({
  title = 'Barranquilla JS - Pagina Oficial',
  description = 'Este es un grupo para todos los desarrolladores, entusiastas y apasionados por Javascript en Barranquilla y la costa.',
  keywords = 'barranquilla, js, javascript, meetup, comunidad, desarrollo, programacion, tecnologia, costa, atlantico, colombia',
  image = baqjsLogo,
}: HelmetProps): Metadata => {
  return {
    title,
    description,
    keywords,
    applicationName: 'Barranquilla JS',
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      title,
      description,
      images: {
        url: image.src,
      },
      locale: 'es_CO',
    },
  };
};
