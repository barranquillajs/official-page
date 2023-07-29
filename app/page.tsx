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
      <Sponsor sponsors={sponsors} />
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center mt-20">
        <Meetups events={events} />
        <InfoSection />
      </div>
      <Staff organizers={organizers} />
      <Speakers speakers={speakers} />
      <Footer />
    </section>
  );
};

export default Home;
