import { FaLinkedin, FaHome, FaGithubSquare } from 'react-icons/fa';
import Image from 'next/image';
import cn from 'classnames';

import { FluidContainer } from '@makinox/makinox-ui';

import { staffData } from './staff.data';

export const Staff = () => {
  const classes = {
    imageContainer: cn('flex justify-center p-2 ro'),
    imageWrapper: cn('flex bg-base-white w-32 h-32 justify-center items-center rounded-full'),
    link: cn('p-2'),
    icons: 20,
  };

  return (
    <section className={`${FluidContainer()} pt-20`}>
      <div>
        <h2 className="text-3xl text-center">Organizadores</h2>
      </div>
      <div className="flex justify-center md:justify-between flex-wrap mt-8">
        {staffData.map((staff) => {
          return (
            <article key={staff.name} className="bg-primary-50 w-64 rounded-md">
              <div>
                <div className={classes.imageContainer}>
                  <div className={classes.imageWrapper}>
                    <Image src={staff.image} alt={`Organizador de la comunidad: ${staff.name}`} width={112} height={112} className="rounded-full" />
                  </div>
                </div>
              </div>
              <div className="p-2 text-center">
                <span>{staff.name}</span>
              </div>
              <div className="p-2 text-center">
                <span>{staff.text}</span>
              </div>
              <div className="flex justify-center h-10">
                {staff?.page && (
                  <a className={classes.link} href={staff.page} target="_blank" rel="noreferrer">
                    <FaHome size={classes.icons} />
                  </a>
                )}
                {staff?.github && (
                  <a className={classes.link} href={staff.github} target="_blank" rel="noreferrer">
                    <FaGithubSquare size={classes.icons} />
                  </a>
                )}
                {staff?.linkedin && (
                  <a className={classes.link} href={staff.linkedin} target="_blank" rel="noreferrer">
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
