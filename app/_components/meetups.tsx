import Link from 'next/link';

import { EventUserComposedType } from '@/controllers';
import { isUpcomingEvent } from '@/utils';
import { EventCard } from '@/components';

export const Meetups = ({ events }: { events: Array<EventUserComposedType> }) => {
  return (
    <section className="flex flex-col justify-center w-full lg:w-1/2">
      <div className="mb-2  w-full flex items-center justify-between">
        <h2 className="text-3xl">Ultimos eventos</h2>
        <button className="btn btn-primary">
          <Link href="/events">Ver más</Link>
        </button>
      </div>

      <div className="flex items-start justify-center lg:justify-between my-4 flex-wrap gap-4">
        {events?.map((event) => {
          const isUpcoming = isUpcomingEvent(event.date);

          if (isUpcoming) return null;
          return <EventCard event={event} key={event.name} />;
        })}
      </div>
    </section>
  );
};
