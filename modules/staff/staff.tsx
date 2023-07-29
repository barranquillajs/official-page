import { FaLinkedin, FaHome, FaGithubSquare } from 'react-icons/fa';
import Image from 'next/image';
import cn from 'classnames';

import { UserType } from '@/utils';

const imageSize = 193;

const classes = {
  imageContainer: cn('flex justify-center p-2 rounded-full border-2 border-neutral-700'),
  imageWrapper: cn('flex bg-base-white justify-center items-center rounded-full'),
  link: cn('p-2'),
  icons: 20,
};

export const Staff = ({ organizers }: { organizers: Array<UserType> }) => {
  return (
    <section className="container mx-auto pt-20">
      <div>
        <h2 className="text-3xl text-center">Organizadores</h2>
      </div>
      <div className="flex justify-between flex-wrap mt-8">
        {organizers.map((staff) => {
          return (
            <article key={staff.name} className="bg-primary-50 rounded-md m-4">
              <div className={classes.imageContainer}>
                <div className={classes.imageWrapper} style={{ width: imageSize, height: imageSize }}>
                  <Image
                    src={staff.image.url}
                    blurDataURL={staff?.imageBlurUrl}
                    alt={`Organizador de la comunidad: ${staff.name}`}
                    width={imageSize}
                    height={imageSize}
                    className="rounded-full"
                  />
                </div>
              </div>

              <div className="text-center font-bold text-lg my-4">
                <span>{staff.name}</span>
              </div>
              <div className="flex justify-center h-10">
                {staff?.homePage && (
                  <a className={classes.link} href={staff.homePage} target="_blank" rel="noreferrer" aria-label="Website">
                    <FaHome size={classes.icons} />
                  </a>
                )}
                {staff?.githubLink && (
                  <a className={classes.link} href={staff.githubLink} target="_blank" rel="noreferrer" aria-label="Github">
                    <FaGithubSquare size={classes.icons} />
                  </a>
                )}
                {staff?.linkedinLink && (
                  <a className={classes.link} href={staff.linkedinLink} target="_blank" rel="noreferrer" aria-label="Linkedin">
                    <FaLinkedin size={classes.icons} />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
