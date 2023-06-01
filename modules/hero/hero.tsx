import Image from 'next/image';

import { ButtonContained, ButtonNeumorphic } from '@makinox/makinox-ui';

import { LINK_BARRANQUILLA_LINKEDIN, LINK_BARRANQUILLA_MEETUP } from '@/constants';

import imagePeople from '@/public/assets/BAQJS.png';
const imagePeopleBlurUrl = `data:image/webp;base64,UklGRjQDAABXRUJQVlA4WAoAAAAgAAAAuQAAuQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggRgEAAFAQAJ0BKroAugA/cbjRZLSuqSkgSgKQLgllbt1eEx8kfQBQlkXOHIjC5pHOYzZLKxHbBOJ/v21BDJx3dZChAWO/f8nxFXAd/UNlYUCNwEvek3auXfgl1xbJx165kIxUIp62HLowef+C5Py5gepl7WyH6kLbeMucVxz+wLNo02FFTyW/xo00YYx4OXAA/ukkf/7F+wP4lnVVX7fI5w9WUOQmN1yZ4zL8U/JEPibX1yDxlUa0vXx8KQPOMJhL12zzxUHx8fANPvURgbrGHfeXohqN9dMuW4rcBZkOkr2bRpz29P+ZL23a5ZdLPUUzYDoosYLAIxkClmgXqwzJGQEnKPJy4JQ6wGCM61bpTa7bvvDVtpven+f1mfP0aAgDUmnIriD9AISuD+Kr+omCc8RpHtGMwENJiUz6QeVEb2PhvcOTlA3IAAAA`;

export const Hero = () => {
  return (
    <article className={`flex items-center justify-between md:flex-row flex-col-reverse pt-12 container mx-auto`}>
      <div className="my-2 max-w-lg">
        <h2 className="text-4xl text-center md:text-left">
          Este es un grupo para todos los desarrolladores, entusiastas y apasionados por Javascript en Barranquilla y la costa.
        </h2>
        <div className="flex items-center justify-center md:justify-start my-2">
          <a href={LINK_BARRANQUILLA_LINKEDIN} target="_blank" rel="noreferrer" className={`${ButtonContained()} mr-4`}>
            Síguenos
          </a>
          <a
            href={LINK_BARRANQUILLA_MEETUP}
            target="_blank"
            rel="noreferrer"
            className={`${ButtonNeumorphic({ isDark: false })} px-4 text-black-500`}
          >
            <span className="text-gray-800">Meetup</span>
          </a>
        </div>
      </div>
      <div>
        <Image
          width={500}
          priority={true}
          placeholder="blur"
          blurDataURL={imagePeopleBlurUrl}
          className="rounded-full"
          src={imagePeople}
          alt="Asistentes del meetup de barranquilla JS"
        />
      </div>
    </article>
  );
};
