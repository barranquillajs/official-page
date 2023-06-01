import cn from 'classnames';
import Image from 'next/image';
import { FaChartBar } from 'react-icons/fa';
import { MdOutlineStackedBarChart } from 'react-icons/md';

import { ButtonContained } from '@makinox/makinox-ui';

import { initiativesData, pricingData } from '@/constants';
import { Helmet, Footer, Header } from '@/components';

const classes = {
  pageSbutitle: cn('text-3xl text-center mb-14 mt-24'),
  initiativeCard: cn('bg-primary-200 w-96 flex flex-row rounded-md'),
  initiativeCardIcon: cn('m-4'),
  initiativeCardText: cn('flex flex-col items-start'),
  initiativeCardtTitle: cn('pt-1 pr-6 text-xl font-semibold'),
  initiativeCardtParragraph: cn('py-1 pr-6 text-justify'),
  planCard: cn('border-4 border-primary-100 w-80 h-w-80 p-4 rounded-md'),
  planCardHeader: cn('flex items-center justify-around py-4'),
  planCardList: cn('list-disc pl-4'),
};

export default function Sponsors() {
  return (
    <section>
      <Helmet title="Haz parte de nuestros sponsors - Barranquilla JS" />
      <Header />
      <div className="container mx-auto xl:px-48">
        <div>
          <h1 className="text-5xl mb-12 mt-32 text-center">Haz parte de nuestros sponsors</h1>
          <p className="text-xl mb-8 text-justify">
            En BarranquillaJs, creemos en el poder de las conferencias impulsadas por la comunidad para avanzar en el mundo del desarrollo de software
            y Frontend. Al centrarnos en el talento local y el intercambio de conocimientos,estamos creando una plataforma para que tanto
            desarrolladores como cualquier persona crezca profecionalmente.
          </p>
        </div>
        <div>
          <h2 className={classes.pageSbutitle}>Nuestras iniciativas</h2>
          <div className="flex justify-center md:justify-around md:items-center">
            <div className="flex flex-col items-center gap-4 md:mr-6">
              {initiativesData.map((initiative) => (
                <div key={initiative.title} className={classes.initiativeCard}>
                  {initiative.icon}
                  <div className={classes.initiativeCardText}>
                    <h3 className={classes.initiativeCardtTitle}>{initiative.title}</h3>
                    <p className={classes.initiativeCardtParragraph}>{initiative.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden md:block relative h-80 w-96 rounded-sm">
              <Image
                className="object-cover rounded-sm"
                src={'https://secure.meetupstatic.com/photos/event/a/c/7/6/highres_507044150.jpeg'}
                width={500}
                height={500}
                priority={false}
                sizes="(min-width: 66em) 33vw,
                (min-width: 44em) 50vw,
                100vw"
                alt={`BarranqullaJS: meetup`}
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className={classes.pageSbutitle}>Estadisticas</h2>
          <div className="flex flex-col items-center sm:flex-row sm:justify-around gap-4">
            <div className={cn(classes.initiativeCard, 'items-center')}>
              <MdOutlineStackedBarChart className={classes.initiativeCardIcon} size={40} />
              <p>Dos reuniones al mes</p>
            </div>
            <div className={cn(classes.initiativeCard, 'items-center')}>
              <FaChartBar className={classes.initiativeCardIcon} size={40} />
              <p>Mas de 50 asistentes a cada evento</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className={classes.pageSbutitle}>Eres bienvenido en nuestra comunidad</h2>
          </div>
          <div className="flex flex-col-reverse items-center md:items-stretch md:flex-row md:justify-between gap-4">
            {pricingData.map((plan) => (
              <article key={plan.title} className={classes.planCard}>
                <div className={classes.planCardHeader}>
                  <span>{plan.title}</span>
                  <button className={`${ButtonContained({ size: 'sm' })} px-4`}>Mensual</button>
                </div>
                <div className="my-4 flex justify-center">
                  <span className="opacity-70 text-center text-sm">Pago mensual de {plan.price}</span>
                </div>
                <div>
                  <ul className={classes.planCardList}>
                    {plan.perks.map((perk) => (
                      <li key={perk}>{perk}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="flex justify-center py-16">
          <a href="mailto:barranquillajsx@gmail.com" target="_blank" rel="noreferrer" className={`${ButtonContained()}`}>
            Contáctanos
          </a>
        </div>
      </div>

      <Footer />
    </section>
  );
}
