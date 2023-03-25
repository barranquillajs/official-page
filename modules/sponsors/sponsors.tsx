import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';

import { ButtonContained } from '@makinox/makinox-ui';

import { sponsorsData, SPONSOR_LEVEL } from '../../constants';

export const Sponsor = () => {
  return (
    <section className="container mx-auto pt-20">
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
        <h2 className="text-3xl">Nuestros patrocinadores</h2>
        <Link href="/sponsors" className={ButtonContained()} aria-label="Pagina de sponsor">
          Registrate como sponsor
        </Link>
      </div>
      <div>
        {Object.keys(SPONSOR_LEVEL).map((level) => {
          const currentSponsor = sponsorsData.filter((sponsor) => sponsor.level === SPONSOR_LEVEL[level].name);
          if (!currentSponsor?.length) return <Fragment key={level}></Fragment>;
          return (
            <div key={level}>
              <h3 className="text-xl capitalize py-4">{level.toLocaleLowerCase()} sponsor</h3>
              <div className="bg-primary-50 flex justify-center rounded-xl">
                {currentSponsor?.map((sponsor) => (
                  <article key={sponsor.name} className="flex flex-col justify-center">
                    <div className="flex justify-center pt-2">
                      <Image width={208} className="rounded-full" src={sponsor.logo} alt="Asistentes del meetup de barranquilla JS" />
                    </div>
                    <h4 className="py-2 text-center">{sponsor.name}</h4>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
