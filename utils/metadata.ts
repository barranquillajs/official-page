import { Metadata } from 'next';
import { getItIsProductionEnv } from '.';

type HelmetProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
};

export const returnMetadata = ({
  title = 'Barranquilla JS - Pagina Oficial',
  description = 'Este es un grupo para todos los desarrolladores, entusiastas y apasionados por Javascript en Barranquilla y la costa.',
  keywords = 'barranquilla, js, javascript, meetup, comunidad, desarrollo, programacion, tecnologia, costa, atlantico, colombia',
  image,
}: HelmetProps): Metadata => {
  const isProductionEnv = getItIsProductionEnv();
  const metadataBase = isProductionEnv ? new URL(process.env.URL) : new URL(`http://localhost:${process.env.PORT || 3000}`);
  const usableImage = image || '/assets/BAQJS.png';

  return {
    title,
    description,
    keywords,
    applicationName: 'Barranquilla JS',
    metadataBase,
    icons: {
      icon: '/assets/BAQJS.png',
      shortcut: usableImage,
      apple: usableImage,
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: usableImage,
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'es',
      images: [
        {
          url: usableImage,
          width: 800,
          height: 600,
        },
        {
          url: usableImage,
          width: 1200,
          height: 300,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
};
