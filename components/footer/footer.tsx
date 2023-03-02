import { FaLinkedin, FaMeetup, FaTwitterSquare, FaWhatsapp } from 'react-icons/fa';
import cn from 'classnames';

import { TopBar, FluidContainer } from '@makinox/makinox-ui';

import { LINK_BARRANQUILLA_LINKEDIN, LINK_BARRANQUILLA_MEETUP, LINK_BARRANQUILLA_TWITTER, LINK_BARRANQUILLA_WHATSAPP } from '../../constants';

export const Footer = () => {
  const classes = {
    item: cn('ml-1 text-primary-500 text-2xl'),
  };
  return (
    <footer className={`${TopBar()} mt-28`}>
      <div className={FluidContainer()} style={{ padding: '10px 0' }}>
        <div className="flex justify-between">
          <span>Barranquilla JS (BAQJS) - {new Date().getFullYear()}</span>
          <div className="flex">
            <a className={classes.item} href={LINK_BARRANQUILLA_MEETUP} target="_blank" rel="noreferrer">
              <FaMeetup />
            </a>
            <a className={classes.item} href={LINK_BARRANQUILLA_WHATSAPP} target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a className={classes.item} href={LINK_BARRANQUILLA_TWITTER} target="_blank" rel="noreferrer">
              <FaTwitterSquare />
            </a>
            <a className={classes.item} href={LINK_BARRANQUILLA_LINKEDIN} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
