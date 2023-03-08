import { ButtonContained } from '@makinox/makinox-ui';
import Head from 'next/head';
import { Footer, Header } from '../components';

export default function Sponsors() {
  return (
    <section>
      <Head>
        <title>Haz parte de nuestros sponsors - Barranquilla JS</title>
        <meta property="og:title" content="Haz parte de nuestros sponsors - Barranquilla JS" key="title" />
      </Head>
      <Header />
      <div className="container mx-auto">
        <div>
          <h1>Haz parte de nuestros sponsors</h1>
          <p>
            En BarranquillaJs, creemos en el poder de las conferencias impulsadas por la comunidad para avanzar en el mundo del desarrollo de software
            y Frontend. Al centrarnos en el talento local y el intercambio de conocimientos,estamos creando una plataforma para que tanto
            desarrolladores como cualquier persona crezca profecionalmente.
          </p>
        </div>
        <div>
          <h2>Nuestras iniciativas</h2>
          <div>
            <h3>Charlas mensuales:</h3>
            <p>
              Son dos charlas de aproximadamente 40 minutos de duración, que se van a dar el mismo día. Estas charlas están propuestas por los
              miembros de la comunidad que quieren compartir su conocimiento.
            </p>
          </div>
          <div>
            <h3>Taller mensual:</h3>
            <p>
              Es un taller práctico sobre alguna tecnología particular dictado por alguno de los expertos de la comunidad, el evento puede durar unas
              tres horas.
            </p>
          </div>
        </div>
        <div>
          <h2>Estadisticas</h2>
          <div>
            <span>Logo</span>
            <p>Dos reuniones al mes</p>
          </div>
          <div>
            <span>Logo</span>
            <p>Mas de 50 asistentes a cada evento</p>
          </div>
        </div>
        <div>
          <article>
            <div>
              <span>Silver</span>
              <button className={ButtonContained({ size: 'sm' })}>Mensual</button>
            </div>
            <div>
              <ul>
                <li>Logo en pequeño en la página</li>
                <li>1 silla reservada en los eventos</li>
              </ul>
            </div>
          </article>
          <article>
            <div>
              <span>Gold</span>
              <button className={ButtonContained({ size: 'sm' })}>Mensual</button>
            </div>
            <div>
              <ul>
                <li>Logo en mediano en la página</li>
                <li>3 sillas reservadas en los eventos del meetup</li>
                <li>100 palabras en perfil de empresa en el sitio</li>
                <li>1 publicación de ofertas de empleo al mes en los canales de comunicación</li>
                <li>Espacio de 3 minutos en los eventos del meetup (charla corta o video)</li>
              </ul>
            </div>
          </article>
          <article>
            <div>
              <span>Gold</span>
              <button className={ButtonContained({ size: 'sm' })}>Mensual</button>
            </div>
            <div>
              <ul>
                <li>Logo en grande en la página</li>
                <li>Logo en las publicaciones</li>
                <li>10 sillas reservadas en los eventos del meetup</li>
                <li>300 palabras en perfil de empresa en el sitio</li>
                <li>2 publicaciónes de ofertas de empleo al mes en los canales de comunicación</li>
                <li>Espacio de 5 minutos en los eventos del meetup (charla corta o video)</li>
                <li>Repartir stickers de empresa y folletos de información.</li>
                <li>Compartimos codigo QR o link de promociones o servicios</li>
              </ul>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </section>
  );
}
