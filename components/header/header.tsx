import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitterSquare, FaLinkedin, FaMeetup, FaInstagramSquare, FaTiktok, FaTwitch, FaYoutubeSquare, FaDiscord } from 'react-icons/fa';

import {
  LINK_BARRANQUILLA_INSTAGRAM,
  LINK_BARRANQUILLA_LINKEDIN,
  LINK_BARRANQUILLA_MEETUP,
  LINK_BARRANQUILLA_TIKTOK,
  LINK_BARRANQUILLA_TWITCH,
  LINK_BARRANQUILLA_TWITTER,
  LINK_BARRANQUILLA_YOUTUBE,
  LINK_BARRANQUILLA_DISCORD,
} from '@/constants';
import headerimage from '@/public/assets/BAQJS.png';

const classes = {
  item: cn('text-2xl'),
};

export const Header = () => {
  return (
    <header className={`flex justify-center bg-primary-400 top-0 z-10 md:sticky shadow shadow-secondary-300/40`}>
      <nav className={`container flex flex-col justify-center md:flex-row md:justify-between items-center py-2`}>
        <Link href="/" className="flex items-center">
          <Image className="rounded-md w-12 h-12" src={headerimage} alt="BarranquillaJS logo" />
          <h1 className="text-2xl">Barranquilla JS</h1>
        </Link>

        <div className="flex gap-4 my-4">
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
      </nav>
    </header>
  );
};
