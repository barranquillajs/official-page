import cn from 'classnames';
import Image from 'next/image';
import { BsChevronRight } from 'react-icons/bs';

import heroImage from '@/public/assets/hero-image.png';
import { FaDiscord, FaInstagramSquare, FaLinkedin, FaMeetup, FaTiktok, FaTwitch, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';
import {
  LINK_BARRANQUILLA_MEETUP,
  LINK_BARRANQUILLA_DISCORD,
  LINK_BARRANQUILLA_TIKTOK,
  LINK_BARRANQUILLA_TWITCH,
  LINK_BARRANQUILLA_TWITTER,
  LINK_BARRANQUILLA_LINKEDIN,
  LINK_BARRANQUILLA_INSTAGRAM,
  LINK_BARRANQUILLA_YOUTUBE,
} from '@/constants';

const imageBlurUrl = `data:image/webp;base64,UklGRjQDAABXRUJQVlA4WAoAAAAgAAAAuQAAuQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggRgEAAFAQAJ0BKroAugA/cbjRZLSuqSkgSgKQLgllbt1eEx8kfQBQlkXOHIjC5pHOYzZLKxHbBOJ/v21BDJx3dZChAWO/f8nxFXAd/UNlYUCNwEvek3auXfgl1xbJx165kIxUIp62HLowef+C5Py5gepl7WyH6kLbeMucVxz+wLNo02FFTyW/xo00YYx4OXAA/ukkf/7F+wP4lnVVX7fI5w9WUOQmN1yZ4zL8U/JEPibX1yDxlUa0vXx8KQPOMJhL12zzxUHx8fANPvURgbrGHfeXohqN9dMuW4rcBZkOkr2bRpz29P+ZL23a5ZdLPUUzYDoosYLAIxkClmgXqwzJGQEnKPJy4JQ6wGCM61bpTa7bvvDVtpven+f1mfP0aAgDUmnIriD9AISuD+Kr+omCc8RpHtGMwENJiUz6QeVEb2PhvcOTlA3IAAAA`;

const classes = {
  item: cn('text-primary-500 text-2xl'),
};

export const Hero = () => {
  return (
    <>
      <article className="flex items-center lg:items-end justify-between lg:flex-row flex-col-reverse container mx-auto lg:my-20">
        <div className="max-w-2xl lg:max-w-2xl">
          <h1 className="text-[90px] font-bold leading-[97px] text-center lg:text-left">¿Te apasiona Javascript?</h1>
          <p className="font-normal leading-10 text-2xl my-6">Únete a nuestra comunidad de desarrolladores entusiastas, en Barranquilla y la Costa</p>
          <button className="btn btn-primary">
            <span>Unirme a la comunidad</span>
            <BsChevronRight />
          </button>
          <div>
            <h3 className="text-xl mt-8 mb-4">Síguenos en nuestras redes</h3>
            <div className="flex justify-start gap-8">
              <a className={classes.item} href={LINK_BARRANQUILLA_MEETUP} target="_blank" rel="noreferrer" aria-label="Link hacia meetup">
                <FaMeetup />
              </a>
              <a className={classes.item} href={LINK_BARRANQUILLA_DISCORD} target="_blank" rel="noreferrer" aria-label="Link hacia discord">
                <FaDiscord />
              </a>
              <a className={classes.item} href={LINK_BARRANQUILLA_TIKTOK} target="_blank" rel="noreferrer" aria-label="Link hacia tiktok">
                <FaTiktok />
              </a>
              <a className={classes.item} href={LINK_BARRANQUILLA_TWITCH} target="_blank" rel="noreferrer" aria-label="Link hacia twitch">
                <FaTwitch />
              </a>
              <a className={classes.item} href={LINK_BARRANQUILLA_TWITTER} target="_blank" rel="noreferrer" aria-label="Link hacia twitter">
                <FaTwitterSquare />
              </a>
              <a className={classes.item} href={LINK_BARRANQUILLA_LINKEDIN} target="_blank" rel="noreferrer" aria-label="Link hacia linkedin">
                <FaLinkedin />
              </a>
              <a className={classes.item} href={LINK_BARRANQUILLA_INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Link hacia instagram">
                <FaInstagramSquare />
              </a>
              <a className={classes.item} href={LINK_BARRANQUILLA_YOUTUBE} target="_blank" rel="noreferrer" aria-label="Link hacia youtube">
                <FaYoutubeSquare />
              </a>
            </div>
          </div>
        </div>
        <div>
          <Image
            width={800}
            priority={true}
            placeholder="blur"
            blurDataURL={imageBlurUrl}
            className="rounded-full"
            src={heroImage}
            alt="Asistentes del meetup de barranquilla JS"
          />
        </div>
      </article>
    </>
  );
};
