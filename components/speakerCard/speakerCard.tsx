import Image from 'next/image';
import cn from 'classnames';

import { UserType } from '@/utils';
import { FaLinkedin, FaHome, FaGithubSquare, FaUserAlt } from 'react-icons/fa';

const classes = {
  imageContainer: cn('flex justify-center p-2'),
  imageWrapper: cn('flex bg-primary-100 w-32 h-32 justify-center items-center rounded-full'),
  link: cn('p-2'),
  icons: 20,
};

export const SpeakerCard = ({ speaker }: { speaker: UserType }) => {
  const hasPhoto = speaker?.image?.url !== undefined;

  return (
    <article className="relative flex flex-col justify-center border-2 border-primary-100 w-40 min-h-40 rounded-md m-4" key={speaker.name}>
      {hasPhoto ? (
        <div className={classes.imageContainer}>
          <div className={classes.imageWrapper}>
            <Image src={speaker.image.url} alt={`Charlista ${speaker.name}`} width={112} height={112} className="rounded-full" />
          </div>
        </div>
      ) : (
        <div className={classes.imageContainer}>
          <div className={classes.imageWrapper}>
            <FaUserAlt size={40} />
          </div>
        </div>
      )}
      <div className="p-2 text-center truncate">
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
