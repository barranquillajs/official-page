import { InfoSection, Meetups, Sponsor, Speakers, Staff, Hero } from '../modules';
import Helmet from '../components/helmet/helmet';
import { Footer, Header } from '../components';
import { getAllSponsors, getOrganizers, getSpeakers } from '../controllers';
import { SponsorType, UserType } from '../utils';

export default function Home({
  sponsors,
  speakers,
  organizers,
}: {
  sponsors: Array<SponsorType>;
  organizers: Array<UserType>;
  speakers: Array<UserType>;
}) {
  return (
    <section>
      <Helmet />
      <Header />
      <Hero />
      <InfoSection />
      <Meetups />
      <Sponsor sponsors={sponsors} />
      <Staff organizers={organizers} />
      <Speakers speakers={speakers} />
      <Footer />
    </section>
  );
}

export async function getServerSideProps() {
  const sponsors = await getAllSponsors();
  const speakers = await getSpeakers();
  const organizers = await getOrganizers();

  return { props: { sponsors, speakers, organizers } };
}
