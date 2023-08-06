import { EventCard, Footer, GradientBackground, Header } from '@/components';
import { getEvents } from '@/controllers';
import { returnMetadata } from '@/utils';

export const metadata = returnMetadata({ title: 'Haz parte de nuestros sponsors - Barranquilla JS' });

const Sponsors = async () => {
  const eventsData = getEvents(40);
  const [events] = await Promise.all([eventsData]);

  return (
    <section>
      <GradientBackground className="max-h-[800px]" />
      <Header />
      <div className="container px-4 md:px-0 mx-auto">
        <h1 className="text-[90px] leading-[97px] font-bold my-16">Nuestros Eventos</h1>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {events.map((event) => (
            <EventCard key={event.name} event={event} />
          ))}
        </section>
      </div>

      <Footer />
    </section>
  );
};

export default Sponsors;
