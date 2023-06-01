import { ButtonContained } from '@makinox/makinox-ui';

import { LINK_BARRANQUILLA_MEETUP } from '@/constants';
import { EventUserComposedType } from '@/controllers';
import { EventCard } from '@/components';

export const Meetups = ({ events }: { events: Array<EventUserComposedType> }) => {
  return (
    <section className="flex flex-col justify-center container mx-auto">
      <div className="mb-2 pt-20 w-full flex justify-center">
        <h2 className="text-3xl">Ultimos eventos</h2>
      </div>
      <div className="flex items-start justify-center lg:justify-between my-4 flex-wrap">
        {events?.map((event) => (
          <EventCard event={event} key={event.name} />
        ))}
      </div>
      <div className="justify-center flex">
        <button className={`${ButtonContained()}`}>
          <a href={LINK_BARRANQUILLA_MEETUP} target="_blank" rel="noreferrer">
            Ver más
          </a>
        </button>
      </div>
    </section>
  );
};
