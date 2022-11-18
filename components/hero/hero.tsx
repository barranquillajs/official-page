import Image from 'next/image';

import { ButtonContained, ButtonOutline } from '@makinox/makinox-ui';

import imagePeople from '../../public/assets/BAQ-PEOPLE.jpeg';

export default function Hero() {
  return (
    <article className="flex items-center justify-around mt-12">
      <div className="my-2 max-w-lg">
        <h1>Este es un grupo para todos los desarrolladores, entusiastas y apasionados por Javascript en Barranquilla y la costa.</h1>
        <div className="flex items-center my-2">
          <button className={`${ButtonContained()} mr-4`}>Siguenos</button>
          <button className={`${ButtonOutline()} px-4`}>Meetup</button>
        </div>
      </div>
      <div>
        <Image width={500} className="rounded-full" src={imagePeople} alt="Asistentes del meetup de barranquilla JS" />
      </div>
    </article>
  );
}
