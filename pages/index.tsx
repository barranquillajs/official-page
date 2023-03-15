import { InfoSection, Meetups, Sponsor, Speakers, Staff, Hero } from '../modules';
import Helmet from '../components/helmet/helmet';
import { Footer, Header } from '../components';

export default function Home() {
  return (
    <section>
      <Helmet />
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
