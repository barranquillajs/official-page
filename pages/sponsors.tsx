import cn from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import { FaChartBar, FaLaptop, FaUsers } from 'react-icons/fa';
import { MdOutlineStackedBarChart } from 'react-icons/md';

import { ButtonContained } from '@makinox/makinox-ui';

import { Footer, Header } from '../components';

export default function Sponsors() {
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

  return (
    <section>
      <Head>
        <title>Haz parte de nuestros sponsors - Barranquilla JS</title>
        <meta property="og:title" content="Haz parte de nuestros sponsors - Barranquilla JS" key="title" />
      </Head>
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
              <div className={classes.initiativeCard}>
                <FaUsers size={120} className={classes.initiativeCardIcon} />
                <div className={classes.initiativeCardText}>
                  <h3 className={classes.initiativeCardtTitle}>Charlas mensuales</h3>
                  <p className={classes.initiativeCardtParragraph}>
                    Son dos charlas de aproximadamente 40 minutos de duración, que se van a dar el mismo día. Estas charlas están propuestas por los
                    miembros de la comunidad que quieren compartir su conocimiento.
                  </p>
                </div>
              </div>
              <div className={classes.initiativeCard}>
                <FaLaptop size={120} className={classes.initiativeCardIcon} />
                <div className={classes.initiativeCardText}>
                  <h3 className={classes.initiativeCardtTitle}>Taller mensual</h3>
                  <p className={classes.initiativeCardtParragraph}>
                    Es un taller práctico sobre alguna tecnología particular dictado por alguno de los expertos de la comunidad, el evento puede durar
                    unas tres horas.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative h-80 w-96 rounded-sm">
              <Image
                className="object-cover rounded-sm"
                src={'https://secure.meetupstatic.com/photos/event/a/c/7/6/highres_507044150.jpeg'}
                fill
                priority={false}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
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
            <article className={classes.planCard}>
              <div className={classes.planCardHeader}>
                <span>Silver</span>
                <button className={ButtonContained({ size: 'sm' })}>Mensual</button>
              </div>
              <div>
                <ul className={classes.planCardList}>
                  <li>Logo en pequeño en la página</li>
                  <li>1 silla reservada en los eventos</li>
                </ul>
              </div>
            </article>
            <article className={classes.planCard}>
              <div className={classes.planCardHeader}>
                <span>Gold</span>
                <button className={ButtonContained({ size: 'sm' })}>Mensual</button>
              </div>
              <div>
                <ul className={classes.planCardList}>
                  <li>Logo en mediano en la página</li>
                  <li>3 sillas reservadas en los eventos del meetup</li>
                  <li>100 palabras en perfil de empresa en el sitio</li>
                  {/* <li>1 publicación de ofertas de empleo al mes en los canales de comunicación</li> */}
                  <li>Espacio de 3 minutos en los eventos del meetup (charla corta o video)</li>
                </ul>
              </div>
            </article>
            <article className={classes.planCard}>
              <div className={classes.planCardHeader}>
                <span>Diamond</span>
                <button className={ButtonContained({ size: 'sm' })}>Mensual</button>
              </div>
              <div>
                <ul className={classes.planCardList}>
                  <li>Logo en grande en la página</li>
                  <li>Logo en las publicaciones</li>
                  <li>10 sillas reservadas en los eventos del meetup</li>
                  <li>300 palabras en perfil de empresa en el sitio</li>
                  {/* <li>2 publicaciónes de ofertas de empleo al mes en los canales de comunicación</li> */}
                  <li>Espacio de 5 minutos en los eventos del meetup (charla corta o video)</li>
                  <li>Repartir stickers de empresa y folletos de información.</li>
                  <li>Compartimos codigo QR o link de promociones o servicios</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
        <div className="flex justify-center py-16">
          <a href="mailto:barranquillajsx@gmail.com" target="_blank" rel="noreferrer" className={ButtonContained()}>
            Contactanos
          </a>
        </div>
      </div>

      <Footer />
    </section>
  );
}
