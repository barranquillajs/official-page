import { FaInstagramSquare, FaLinkedin, FaMeetup, FaTiktok, FaTwitterSquare, FaWhatsapp, FaYoutubeSquare, FaTwitch } from 'react-icons/fa';
import cn from 'classnames';

import { TopBar } from '@makinox/makinox-ui';

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

const classes = {
  item: cn('ml-4 text-primary-500 text-2xl'),
};

export const Footer = () => {
  return (
    <footer className={`${TopBar()} mt-28`}>
      <div className="container mx-auto" style={{ padding: '20px 0' }}>
        <div className="flex flex-col justify-center md:flex-row md:justify-between">
          <h3 className="text-center">Barranquilla JS (BAQJS) - {new Date().getFullYear()}</h3>
          <div className="flex justify-center">
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
        </div>
      </div>
    </footer>
  );
};
