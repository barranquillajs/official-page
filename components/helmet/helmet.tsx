import { StaticImageData } from 'next/image';

import baqjsLogo from '../../public/assets/BAQJS.png';

type HelmetProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: StaticImageData;
  url?: string;
};

const Helmet = ({
  title = 'Barranquilla JS - Pagina Oficial',
  description = 'Este es un grupo para todos los desarrolladores, entusiastas y apasionados por Javascript en Barranquilla y la costa.',
  keywords = 'barranquilla, js, javascript, meetup, comunidad, desarrollo, programacion, tecnologia, costa, atlantico, colombia',
  image = baqjsLogo,
}: HelmetProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="image" content={image.src} />

      <meta property="og:title" content={title} key="title" />
      <meta name="og:image" content={image.src} />
    </>
  );
};

export { Helmet };
