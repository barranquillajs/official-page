import { FaInstagramSquare, FaLinkedin, FaMeetup, FaTiktok, FaTwitterSquare, FaDiscord, FaYoutubeSquare, FaTwitch } from 'react-icons/fa';
import Image from 'next/image';
import cn from 'classnames';

import bqjsLogo from '@/public/assets/BAQJS.svg';
import {
  LINK_BARRANQUILLA_INSTAGRAM,
  LINK_BARRANQUILLA_LINKEDIN,
  LINK_BARRANQUILLA_MEETUP,
  LINK_BARRANQUILLA_TIKTOK,
  LINK_BARRANQUILLA_TWITCH,
  LINK_BARRANQUILLA_TWITTER,
  LINK_BARRANQUILLA_DISCORD,
  LINK_BARRANQUILLA_YOUTUBE,
} from '@/constants';

const classes = {
  item: cn('text-primary-500 text-2xl'),
};

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t-8 border-t-primary mt-28 py-10">
      <div className="container mx-auto flex flex-col justify-center items-center gap-8">
        <Image className="h-28 w-28 bg-primary rounded-full" src={bqjsLogo} alt="BarranquillaJS logo" />
        <div className="flex justify-center flex-wrap text-primary gap-7">
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
        <span className="text-center text-gray-300 text-xs font-medium">Copyright © Barranquilla.JS. All rights reserved.</span>
      </div>
    </footer>
  );
};
