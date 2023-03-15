import Head from 'next/head';

import { Footer, Header } from '../components';
import { InfoSection, Meetups, Sponsor, Speakers, Staff, Hero } from '../modules';

export default function Home() {
  return (
    <section>
      <Head>
        <title>Barranquilla JS - Pagina Oficial</title>
        <meta property="og:title" content="Barranquilla JS - Pagina Oficial" key="title" />
      </Head>
      <Header />
      <Hero />
      <InfoSection />
      <Meetups />
      <Sponsor />
      <Staff />
      <Speakers />
      <Footer />
    </section>
  );
}
