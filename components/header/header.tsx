import cn from 'classnames';
import Image from 'next/image';
import { FaTwitterSquare, FaLinkedin, FaWhatsapp, FaMeetup } from 'react-icons/fa';

import { FluidContainer, TopBar } from '@makinox/makinox-ui';

import { LINK_BARRANQUILLA_LINKEDIN, LINK_BARRANQUILLA_MEETUP, LINK_BARRANQUILLA_TWITTER, LINK_BARRANQUILLA_WHATSAPP } from '../../constants';
import headerimage from '../../public/assets/BAQJS.png';

export default function Navbar() {
  const classes = {
    item: cn('ml-1 text-primary-400 text-xl'),
  };

  return (
    <header className={`${TopBar({ isDark: false })}`}>
      <nav className={`flex justify-between items-center py-2 ${FluidContainer()} `}>
        <div className="flex items-center">
          <Image className="rounded-md" src={headerimage} alt="BarranquillaJS logo" width={30} height={30} />
          <span className="ml-2">Barranquilla JS</span>
        </div>

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
      </nav>
    </header>
  );
}
