import Image from 'next/image';
import Link from 'next/link';

import { Card } from '@makinox/makinox-ui';

import { EventUserComposedType } from '@/controllers';

export const EventCard = ({ event }: { event: EventUserComposedType }) => {
  return (
    <Link href={event.eventLink} target="_blank" className={`relative m-2 cursor-pointer ${Card({ type: 'elevated' })}`} key={event.name}>
      <div className="card-media w-96 h-56">
        <Image
          className="object-cover"
          src={event.image.url}
          fill
          priority={false}
          quality={50}
          placeholder="blur"
          blurDataURL={event.imageBlurUrl}
          sizes="(min-width: 66em) 33vw,
      (min-width: 44em) 50vw,
      100vw"
          alt={`BarranqullaJS Meetup: ${event.name} `}
        />
      </div>
      <div className="card-header">
        <h3 className="headline6">{event.name}</h3>
      </div>
      <div className="card-body">
        <p className="body2">
          {event.speakersInfo.map((speaker, idx) => {
            const totalSpeakers = event.speakersInfo?.length;
            if (idx + 1 === totalSpeakers) return <span key={speaker.id}>{speaker.name}</span>;
            return <span key={speaker.id}>{speaker.name} - </span>;
          })}
        </p>
      </div>
    </Link>
  );
};
