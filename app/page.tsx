import { getAllSponsors, getEvents, getOrganizers, getSpeakers } from '@/controllers';
import { Hero, InfoSection, Meetups, Speakers, Sponsor, Staff } from '@/modules';
import { Footer, Header } from '@/components';

const Home = async () => {
  const sponsorsData = getAllSponsors();
  const organizersData = getOrganizers();
  const eventsData = getEvents();
  const speakersData = getSpeakers();

  const [sponsors, organizers, events, speakers] = await Promise.all([sponsorsData, organizersData, eventsData, speakersData]);

  return (
    <section>
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
};

export default Home;
