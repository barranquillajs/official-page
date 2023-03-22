import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitterSquare, FaLinkedin, FaWhatsapp, FaMeetup, FaInstagramSquare, FaTiktok, FaTwitch, FaYoutubeSquare } from 'react-icons/fa';

import {
  LINK_BARRANQUILLA_INSTAGRAM,
  LINK_BARRANQUILLA_LINKEDIN,
  LINK_BARRANQUILLA_MEETUP,
  LINK_BARRANQUILLA_TIKTOK,
  LINK_BARRANQUILLA_TWITCH,
  LINK_BARRANQUILLA_TWITTER,
  LINK_BARRANQUILLA_WHATSAPP,
  LINK_BARRANQUILLA_YOUTUBE,
} from '../../constants';
import headerimage from '../../public/assets/BAQJS.png';

const classes = {
  item: cn('ml-4 my-1 text-xl'),
};

export const Header = () => {
  return (
    <header className={`flex justify-center bg-primary-400`}>
      <nav className={`container flex flex-col justify-center md:flex-row md:justify-between items-center py-2`}>
        <Link href="/" className="flex items-center">
          <Image className="rounded-md" src={headerimage} alt="BarranquillaJS logo" width={60} height={60} />
          <h1 className="text-xl">Barranquilla JS</h1>
        </Link>

        <div className="flex">
          <a className={classes.item} href={LINK_BARRANQUILLA_MEETUP} target="_blank" rel="noreferrer" aria-label="Link hacia meetup">
            <FaMeetup />
          </a>
          <a className={classes.item} href={LINK_BARRANQUILLA_WHATSAPP} target="_blank" rel="noreferrer" aria-label="Link hacia whatsapp">
            <FaWhatsapp />
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
