import { EventUserComposedType, getAllSponsors, getEvents, getOrganizers, getSpeakers } from '../controllers';
import { InfoSection, Meetups, Sponsor, Speakers, Staff, Hero } from '../modules';
import Helmet from '../components/helmet/helmet';
import { SponsorType, UserType } from '../utils';
import { Footer, Header } from '../components';

export default function Home({
  sponsors,
  speakers,
  organizers,
  events,
}: {
  sponsors: Array<SponsorType>;
  organizers: Array<UserType>;
  speakers: Array<UserType>;
  events: Array<EventUserComposedType>;
}) {
  return (
    <section>
      <Helmet />
      <Header />
      <Hero />
      <InfoSection />
      <Meetups events={events} />
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
  const events = await getEvents();

  return { props: { sponsors, speakers, organizers, events } };
}
