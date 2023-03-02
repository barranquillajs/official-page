import { FaLinkedin, FaHome, FaGithubSquare, FaUserAlt } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { ButtonContained, FluidContainer } from '@makinox/makinox-ui';

import { speakerData } from './speakers.data';

export const Speakers = () => {
  const [showAll, setShowAll] = useState(false);

  const classes = {
    imageContainer: cn('flex justify-center p-2'),
    imageWrapper: cn('flex bg-primary-100 w-32 h-32 justify-center items-center rounded-full'),
    link: cn('p-2'),
    icons: 20,
  };

  const speakers = showAll ? speakerData : speakerData.slice(0, 6);

  return (
    <section className={`${FluidContainer()} pt-20`}>
      <h2 className="text-3xl">Nuestros heroes</h2>
      <p>Los charlistas que nos hacen crecer compartiendo su conocimiento</p>

      <div className="flex justify-center md:justify-between flex-wrap mt-8">
        {speakers.map((speaker) => {
          const hasPhoto = speaker.image !== undefined;

          return (
            <article className="relative flex flex-col justify-center border-2 border-primary-100 w-40 min-h-40 rounded-md m-4" key={speaker.name}>
              {hasPhoto ? (
                <div className={classes.imageContainer}>
                  <div className={classes.imageWrapper}>
                    <Image src={speaker.image} alt={`Charlista ${speaker.name}`} width={112} height={112} className="rounded-full" />
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
                {speaker?.page && (
                  <a className={classes.link} href={speaker.page} target="_blank" rel="noreferrer">
                    <FaHome size={classes.icons} />
                  </a>
                )}
                {speaker?.github && (
                  <a className={classes.link} href={speaker.github} target="_blank" rel="noreferrer">
                    <FaGithubSquare size={classes.icons} />
                  </a>
                )}
                {speaker?.linkedin && (
                  <a className={classes.link} href={speaker.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin size={classes.icons} />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <div className="flex justify-center mt-8">
        {showAll ? (
          <button className={ButtonContained()} onClick={() => setShowAll(false)}>
            Mostrar menos
          </button>
        ) : (
          <button className={ButtonContained()} onClick={() => setShowAll(true)}>
            Mostrar más
          </button>
        )}
      </div>
    </section>
  );
};
