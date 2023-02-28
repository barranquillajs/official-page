import Image from 'next/image';
import { ButtonContained, FluidContainer } from '@makinox/makinox-ui';
import { sponsorsData, SPONSOR_LEVEL } from './sponsors.data';

export const Sponsor = () => {
  return (
    <section className={`${FluidContainer()} pt-20`}>
      <div className="flex justify-between">
        <h2 className="text-3xl">Nuestros patrocinadores</h2>
        <a href="#" className={ButtonContained()}>
          Registrate como sponsor
        </a>
      </div>
      <div>
        {Object.keys(SPONSOR_LEVEL).map((level) => {
          const currentSponsor = sponsorsData.filter((sponsor) => sponsor.level === SPONSOR_LEVEL[level].name);
          if (!currentSponsor.length) return <></>;

          return (
            <div key={level}>
              <h3 className="text-xl capitalize py-4">{level.toLocaleLowerCase()} sponsor</h3>
              <div className="bg-primary-50 flex justify-center rounded-xl">
                {currentSponsor.map((sponsor) => (
                  <article key={sponsor.name} className="flex flex-col justify-center">
                    <div className="flex justify-center pt-2">
                      <Image width={208} className="rounded-full" src={sponsor.logo} alt="Asistentes del meetup de barranquilla JS" />
                    </div>
                    <h5 className="py-2 text-center">{sponsor.name}</h5>
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
