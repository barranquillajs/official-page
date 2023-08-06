import { es } from 'date-fns/locale';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import { EventUserComposedType } from '@/controllers';
import { Icon, IconCatalog } from '@/components';
import { isUpcomingEvent } from '@/utils';

const imageHeight = 250;
const imageWidth = 372;

const classes = {
  yellowIcon: cn('bg-primary text-stone-900 p-3 rounded-2xl'),
  cardInfo: cn('flex items-start gap-2'),
  cardInfoTitle: cn('text-xl font-bold'),
  cardInfoText: cn('text-gray-500 font-medium text-xl capitalize'),
};

export const Upcoming = ({ events }: { events: Array<EventUserComposedType> }) => {
  const event = events.find((event) => isUpcomingEvent(event.date));
  if (!event?.date) return null;

  const date = format(new Date(event.date), 'MMMM dd, yyyy', { locale: es });

  return (
    <section className="pt-20 container px-4 md:px-0 mx-auto">
      <article className="bg-base-100 shadow-lg rounded-lg">
        <div className="flex justify-start">
          <div className="bg-neutral-900 text-white flex justify-between items-center py-1 px-5 rounded-lg rounded-bl-none mb-4 gap-4">
            <Icon icon={IconCatalog.alarm} viewBox="0 0 20 20" width={20} height={20} />
            <span className="font-bold text-lg">Nuevo Evento</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="relative rounded-md flex md:hidden w-full" style={{ height: imageHeight }}>
            <Image
              className="object-cover rounded-md w-full"
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
          <div className="relative rounded-md p-3 hidden md:flex" style={{ width: imageWidth, height: imageHeight, minWidth: imageWidth }}>
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
          <div className="gap-5 flex flex-col items-start p-4">
            <h3 className="text-3xl font-bold">{event.name}</h3>
            <div className={classes.cardInfo}>
              <span className={classes.yellowIcon}>
                <Icon icon={IconCatalog.clock} viewBox="0 0 32 32" width={32} height={32} />
              </span>
              <div>
                <h4 className={classes.cardInfoTitle}>Fecha</h4>
                <span className={classes.cardInfoText}>{date}</span>
              </div>
            </div>
            <div className={classes.cardInfo}>
              <span className={classes.yellowIcon}>
                <Icon icon={IconCatalog.place} viewBox="0 0 32 32" width={32} height={32} />
              </span>
              <div>
                <h4 className={classes.cardInfoTitle}>Ubicación</h4>
                <span className={classes.cardInfoText}>{event.place}</span>
              </div>
            </div>
            <Link className="btn btn-primary mb-4" href={event.eventLink} target="_blank" rel="noreferrer">
              Quiero asistir
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};
