import cn from 'classnames';
import Image from 'next/image';
import { PiDiamondsFour } from 'react-icons/pi';
import { FaRegCheckCircle } from 'react-icons/fa';

import { getAllSponsors } from '@/controllers';
import { Footer, Header } from '@/components';
import { pricingData } from '@/constants';
import { returnMetadata, SponsorType } from '@/utils';

const logoSize = 180;
const currentPlan = pricingData[0];

const classes = {
  yellowIcon: cn('bg-primary text-stone-900 p-3 rounded-2xl'),
  analyticTitle: cn('text-3xl font-medium mt-20 mb-8 text-center lg:text-left'),
  analyticDivider: cn('flex flex-col items-center lg:items-start gap-8 lg:flex-row lg:justify-between'),
  analyticCard: cn('flex gap-4 items-start py-5 px-2 md:px-10 rounded-md shadow-xl md:w-[470px] md:max-w-[470px] md:min-w-[470px]'),
  analyticCardTitle: cn('text-xl font-bold mb-1'),
  analyticCardText: cn('md:w-80 max-w-xs text-base font-normal'),
};

export const metadata = returnMetadata({ title: 'Haz parte de nuestros sponsors - Barranquilla JS' });

const Sponsors = async () => {
  const sponsorsData = getAllSponsors();
  const [sponsors] = await Promise.all([sponsorsData]);

  return (
    <section>
      <Header />
      <div className="container mx-auto xl:px-48">
        <PrincipalSection />
        <PlanSection />
        <AnalyticsSection />
        <SponsorSection sponsors={sponsors} />
      </div>

      <Footer />
    </section>
  );
};

const PrincipalSection = () => (
  <section>
    <h1 className="text-5xl sm:text-8xl mb-12 mt-32 text-left font-bold w-4/5">Haz parte de nuestros sponsors</h1>
    <p className="text-xl mb-8 text-left font-normal">
      En BarranquillaJs, creemos en el poder de las conferencias impulsadas por la comunidad para avanzar en el mundo del desarrollo de software. Al
      centrarnos en el talento local y el intercambio de conocimientos,estamos creando una plataforma para que tanto desarrolladores como cualquier
      persona crezca profecionalmente.
    </p>
  </section>
);

const PlanSection = () => (
  <section className="flex flex-col items-center">
    <h2 className="text-4xl font-bold mb-9 mt-16">Bienvenid@ a nuestra comunidad</h2>
    <div className="py-5 px-7 bg-base-100 rounded-3xl shadow-xl w-fit">
      <div className="flex items-center gap-3 border-b border-b-gray-200 pb-5 mb-5">
        <span className="bg-emerald-500 text-white p-3 rounded-lg">
          <PiDiamondsFour size={24} />
        </span>
        <div>
          <h3 className="font-bold text-xl">Sponsorships</h3>
          <span className="text-sm text-gray-500 font-normal">{currentPlan.price}</span>
        </div>
      </div>

      <ul>
        {currentPlan.perks.map((perk) => (
          <li key={perk} className="flex items-center mb-5 gap-2">
            <FaRegCheckCircle />
            <p>{perk}</p>
          </li>
        ))}
      </ul>
      <a href="mailto:barranquillajsx@gmail.com" className="btn btn-primary w-full">
        Contáctanos
      </a>
    </div>
  </section>
);

const AnalyticsSection = () => (
  <>
    <section>
      <h2 className={classes.analyticTitle}>Nuestras iniciativas</h2>
      <div className={classes.analyticDivider}>
        <article className={classes.analyticCard}>
          <span className={classes.yellowIcon}>
            <PiDiamondsFour size={24} />
          </span>
          <div>
            <h3 className={classes.analyticCardTitle}>Charlas mensuales</h3>
            <p className={classes.analyticCardText}>
              Son dos charlas de aproximadamente 40 minutos de duración, que se van a dar el mismo día. Estas charlas están propuestas por los
              miembros de la comunidad que quieren compartir su conocimiento.
            </p>
          </div>
        </article>
        <article className={classes.analyticCard}>
          <span className={classes.yellowIcon}>
            <PiDiamondsFour size={24} />
          </span>
          <div>
            <h3 className={classes.analyticCardTitle}>Taller mensual</h3>
            <p className={classes.analyticCardText}>
              Es un taller práctico sobre alguna tecnología particular dictado por alguno de los expertos de la comunidad, el evento puede durar unas
              tres horas.
            </p>
          </div>
        </article>
      </div>
    </section>
    <section>
      <h2 className={classes.analyticTitle}>Estadísticas</h2>
      <div className={classes.analyticDivider}>
        <article className={classes.analyticCard}>
          <span className={classes.yellowIcon}>
            <PiDiamondsFour size={24} />
          </span>
          <div>
            <h3 className={classes.analyticCardTitle}>Dos reuniones al mes</h3>
          </div>
        </article>
        <article className={classes.analyticCard}>
          <span className={classes.yellowIcon}>
            <PiDiamondsFour size={24} />
          </span>
          <div>
            <h3 className={classes.analyticCardTitle}>Mas de 50 asistentes a cada evento</h3>
          </div>
        </article>
      </div>
    </section>
  </>
);

const SponsorSection = ({ sponsors }: { sponsors: Array<SponsorType> }) => (
  <section>
    <h2 className={classes.analyticTitle}>Sponsors que han confiado en nosotros</h2>
    <div className="flex flex-wrap gap-10 justify-center">
      {sponsors.map((sponsor) => (
        <article key={sponsor.name} className="flex justify-center pt-2 items-center rounded-full" style={{ width: logoSize, height: logoSize }}>
          <Image
            width={logoSize}
            height={logoSize}
            blurDataURL={sponsor.logoRaw}
            className="rounded-full"
            src={sponsor.logo.url}
            alt="Asistentes del meetup de barranquilla JS"
          />
        </article>
      ))}
    </div>
  </section>
);

export default Sponsors;
