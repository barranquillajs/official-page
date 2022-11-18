import cn from 'classnames';
import Image from 'next/image';
import { FaTwitterSquare, FaLinkedin, FaWhatsapp, FaMeetup } from 'react-icons/fa';

import { FluidContainer, TopBar } from '@makinox/makinox-ui';

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
          <a className={classes.item} href="https://www.meetup.com/es/barranquillajs" target="_blank" rel="noreferrer">
            <FaMeetup />
          </a>
          <a className={classes.item} href="https://chat.whatsapp.com/Cgkiea91hbpH2kErkjrmxb" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a className={classes.item} href="https://twitter.com/baq_js" target="_blank" rel="noreferrer">
            <FaTwitterSquare />
          </a>
          <a className={classes.item} href="https://www.linkedin.com/company/89602992" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </header>
  );
}
