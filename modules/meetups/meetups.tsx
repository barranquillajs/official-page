import Image from 'next/image';
import { Card, ButtonContained } from '@makinox/makinox-ui';

import { LINK_BARRANQUILLA_MEETUP } from '@/constants';
import { EventUserComposedType } from '@/controllers';

export const Meetups = ({ events }: { events: Array<EventUserComposedType> }) => {
  return (
    <section className="flex flex-col justify-center container mx-auto">
      <div className="mb-2 pt-20 w-full flex justify-center">
        <h2 className="text-3xl">Ultimos eventos</h2>
      </div>
      <div className="flex items-start justify-center lg:justify-between my-4 flex-wrap">
        {events?.map((meetup) => (
          <article
            className={`relative m-2 cursor-pointer ${Card({ type: 'outlined' })}`}
            onClick={() => window.open(meetup.eventLink)}
            key={meetup.name}
          >
            <div className="card-media w-96 h-56">
              <Image
                className="object-cover"
                src={meetup.image.url}
                fill
                priority={false}
                quality={50}
                placeholder="blur"
                blurDataURL={meetup.imageBlurUrl}
                sizes="(min-width: 66em) 33vw,
                (min-width: 44em) 50vw,
                100vw"
                alt={`BarranqullaJS Meetup: ${meetup.name} `}
              />
            </div>
            <div className="card-header">
              <h3 className="headline6">{meetup.name}</h3>
            </div>
            <div className="card-body">
              <p className="body2">
                {meetup.speakersInfo.map((speaker, idx) => {
                  const totalSpeakers = meetup.speakersInfo?.length;
                  if (idx + 1 === totalSpeakers) return <span key={speaker.id}>{speaker.name}</span>;
                  return <span key={speaker.id}>{speaker.name} - </span>;
                })}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="justify-center flex">
        <button className={ButtonContained()}>
          <a href={LINK_BARRANQUILLA_MEETUP} target="_blank" rel="noreferrer">
            Ver más
          </a>
        </button>
      </div>
    </section>
  );
};
