import { FaLinkedin, FaHome, FaGithubSquare, FaUserAlt } from 'react-icons/fa';
import Image from 'next/image';
import cn from 'classnames';

import { UserType } from '@/utils';

const imageSize = 130;

const classes = {
  imageContainer: cn('flex justify-center'),
  imageWrapper: cn('flex bg-primary-100 justify-center items-center rounded-full bg-slate-100'),
  link: cn('p-2'),
  icons: 20,
};

export const SpeakerCard = ({ speaker }: { speaker: UserType }) => {
  const hasPhoto = speaker?.image?.url !== undefined;

  return (
    <article className="relative flex flex-col justify-center rounded-md m-4" key={speaker.name}>
      {hasPhoto ? (
        <div className={classes.imageContainer}>
          <div className={classes.imageWrapper} style={{ width: imageSize, height: imageSize }}>
            <Image
              src={speaker.image.url}
              blurDataURL={speaker?.imageBlurUrl}
              alt={`Charlista ${speaker.name}`}
              width={imageSize}
              height={imageSize}
              className="rounded-full"
            />
          </div>
        </div>
      ) : (
        <div className={classes.imageContainer}>
          <div className={classes.imageWrapper} style={{ width: imageSize, height: imageSize }}>
            <FaUserAlt size={40} />
          </div>
        </div>
      )}
      <div className="my-5 text-center truncate font-bold text-sm">
        <span>{speaker.name}</span>
      </div>
      <div className="flex justify-center h-10">
        {speaker?.homePage && (
          <a className={classes.link} href={speaker.homePage} target="_blank" rel="noreferrer" aria-label={`Pagina web de ${speaker.name}`}>
            <FaHome size={classes.icons} />
          </a>
        )}
        {speaker?.githubLink && (
          <a className={classes.link} href={speaker.githubLink} target="_blank" rel="noreferrer" aria-label={`Github de ${speaker.name}`}>
            <FaGithubSquare size={classes.icons} />
          </a>
        )}
        {speaker?.linkedinLink && (
          <a className={classes.link} href={speaker.linkedinLink} target="_blank" rel="noreferrer" aria-label={`Linkedin de ${speaker.name}`}>
            <FaLinkedin size={classes.icons} />
          </a>
        )}
      </div>
    </article>
  );
};
