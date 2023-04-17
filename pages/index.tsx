import { InfoSection, Meetups, Sponsor, Speakers, Staff, Hero } from '../modules';
import Helmet from '../components/helmet/helmet';
import { Footer, Header } from '../components';
import { getAllSponsors } from '../controllers';
import { SponsorType } from '../utils';

export default function Home({ sponsors }: { sponsors: Array<SponsorType> }) {
  return (
    <section>
      <Helmet />
      <Header />
      <Hero />
      <InfoSection />
      <Meetups />
      <Sponsor sponsors={sponsors} />
      <Staff />
      <Speakers />
      <Footer />
    </section>
  );
}

export async function getServerSideProps() {
  const sponsors = await getAllSponsors();

  return { props: { sponsors } };
}
