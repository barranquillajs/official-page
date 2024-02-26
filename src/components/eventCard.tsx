import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import type { EventUserComposedType } from '../controllers';

const imageHeight = 120;
const imageWidth = 205;

export const EventCard = ({ event }: { event: EventUserComposedType }) => {
  const date = format(new Date(event.date), 'MMMM dd, yyyy', { locale: es });

  return (
    <a
      href={event.eventLink}
      target="_blank"
      className="flex flex-col sm:flex-row items-center py-3 px-4 bg-base-100 shadow-lg gap-4 rounded-md min-w-xl w-full cursor-pointer"
      key={event.name}
    >
      <div className="relative rounded-md flex sm:hidden w-full" style={{ height: imageHeight }}>
        <img
          className="object-cover rounded-md w-full"
          src={event.image?.url}
          width={imageWidth}
          height={imageHeight}
          alt={`BarranqullaJS Meetup: ${event.name} `}
        />
      </div>
      <div className="relative rounded-md hidden sm:flex" style={{ width: imageWidth, height: imageHeight, minWidth: imageWidth }}>
        <img
          className="object-cover rounded-md"
          src={event?.image?.url}
          width={imageWidth}
          height={imageHeight}
          alt={`BarranqullaJS Meetup: ${event.name} `}
        />
      </div>

      <div className="flex max-w-md flex-col justify-between h-max">
        <h3 className="font-bold text-lg mb-1">{event.name}</h3>

        <p className="mb-4">
          {event.speakersInfo.map((speaker, idx) => {
            const totalSpeakers = event.speakersInfo?.length;
            if (idx + 1 === totalSpeakers) return <span key={speaker.id}>{speaker.name}</span>;
            return (
              <span key={speaker.id} className="font-normal text-base">
                {speaker.name} -{' '}
              </span>
            );
          })}
        </p>
        <p className="capitalize font-medium text-base text-gray-500">{date}</p>
      </div>
    </a>
  );
};
