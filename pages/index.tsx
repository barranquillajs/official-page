import { Footer, Header } from '../components';
import { InfoSection, Meetups, Sponsor, Speakers, Staff, Hero } from '../modules';

export default function Home() {
  return (
    <section>
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
