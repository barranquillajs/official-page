import Image from 'next/image';

import { ButtonContained, ButtonOutline, FluidContainer } from '@makinox/makinox-ui';

import { LINK_BARRANQUILLA_LINKEDIN, LINK_BARRANQUILLA_MEETUP } from '../../constants';
import imagePeople from '../../public/assets/BAQ-PEOPLE.jpeg';

export const Hero = () => {
  return (
    <article className={`flex items-center justify-between md:flex-row flex-col-reverse pt-12 ${FluidContainer}`}>
      <div className="my-2 max-w-lg">
        <h1 className="text-4xl">
          Este es un grupo para todos los desarrolladores, entusiastas y apasionados por Javascript en Barranquilla y la costa.
        </h1>
        <div className="flex items-center my-2">
          <a href={LINK_BARRANQUILLA_LINKEDIN} target="_blank" rel="noreferrer" className={`${ButtonContained()} mr-4`}>
            Síguenos
          </a>
          <a href={LINK_BARRANQUILLA_MEETUP} target="_blank" rel="noreferrer" className={`${ButtonOutline()} px-4`}>
            Meetup
          </a>
        </div>
      </div>
      <div>
        <Image width={500} priority={true} className="rounded-full" src={imagePeople} alt="Asistentes del meetup de barranquilla JS" />
      </div>
    </article>
  );
};
