import { getAllSponsors, getEvents, getOrganizers, getSpeakers } from '@/controllers';
import { Hero, InfoSection, Meetups, Speakers, Sponsor, Staff } from '@/app/_components';
import { Footer, GradientBackground, Header } from '@/components';

const Home = async () => {
  const sponsorsData = getAllSponsors();
  const organizersData = getOrganizers();
  const eventsData = getEvents();
  const speakersData = getSpeakers();

  const [sponsors, organizers, events, speakers] = await Promise.all([sponsorsData, organizersData, eventsData, speakersData]);

  return (
    <section>
      <GradientBackground />
      <Header />
      <Hero />
      <Sponsor sponsors={sponsors} />
      <div className="container px-2 mx-auto flex flex-col lg:flex-row lg:items-center mt-20 gap-8">
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
