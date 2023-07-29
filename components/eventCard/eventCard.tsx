import Image from 'next/image';
import Link from 'next/link';

import { EventUserComposedType } from '@/controllers';

const imageHeight = 120;
const imageWidth = 205;

export const EventCard = ({ event }: { event: EventUserComposedType }) => {
  return (
    <Link
      href={event.eventLink}
      target="_blank"
      className="flex items-center py-3 px-4 bg-base-100 shadow-lg gap-4 rounded-md min-w-xl w-full cursor-pointer"
      key={event.name}
    >
      <div className="relative flex rounded-md" style={{ width: imageWidth, height: imageHeight, minWidth: imageWidth }}>
        <Image
          className="object-cover rounded-md"
          src={event.image.url}
          width={imageWidth}
          height={imageHeight}
          priority={false}
          quality={50}
          placeholder="blur"
          blurDataURL={event.imageBlurUrl}
          alt={`BarranqullaJS Meetup: ${event.name} `}
        />
      </div>

      <div className="flex max-w-md flex-col justify-between h-max">
        <h3 className="font-bold text-lg">{event.name}</h3>

        <p>
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
      </div>
    </Link>
  );
};
