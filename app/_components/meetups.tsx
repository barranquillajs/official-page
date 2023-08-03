import { LINK_BARRANQUILLA_MEETUP } from '@/constants';
import { EventUserComposedType } from '@/controllers';
import { EventCard } from '@/components';

export const Meetups = ({ events }: { events: Array<EventUserComposedType> }) => {
  return (
    <section className="flex flex-col justify-center w-full lg:w-1/2">
      <div className="mb-2  w-full flex items-center justify-between">
        <h2 className="text-3xl">Ultimos eventos</h2>
        <button className="btn btn-primary">
          <a href={LINK_BARRANQUILLA_MEETUP} target="_blank" rel="noreferrer">
            Ver más
          </a>
        </button>
      </div>

      <div className="flex items-start justify-center lg:justify-between my-4 flex-wrap gap-4">
        {events?.map((event) => (
          <EventCard event={event} key={event.name} />
        ))}
      </div>
    </section>
  );
};
