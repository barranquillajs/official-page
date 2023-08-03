import Image from 'next/image';
import { PiDiamondsFour } from 'react-icons/pi';

import { SponsorType } from '@/utils';

const logoSize = 180;

export const Sponsor = ({ sponsors }: { sponsors: Array<SponsorType> }) => {
  return (
    <section className="container mx-auto pt-20">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-start gap-2">
          <PiDiamondsFour size={24} className="text-emerald-500" />
          <h3 className="font-bold text-gray-600">Sponsors</h3>
        </div>
        <div className="flex gap-11">
          {sponsors.map((sponsor) => (
            <article key={sponsor.name} className="flex justify-center pt-2 items-center rounded-full" style={{ width: logoSize, height: logoSize }}>
              <Image
                width={logoSize}
                height={logoSize}
                blurDataURL={sponsor.logoRaw}
                className="rounded-full"
                src={sponsor.logo.url}
                alt="Asistentes del meetup de barranquilla JS"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
