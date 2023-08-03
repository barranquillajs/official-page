import { SponsorType } from '@/utils';
import Image from 'next/image';

const logoSize = 180;

export const SponsorSection = ({ sponsors }: { sponsors: Array<SponsorType> }) => (
  <section>
    <h2 className="text-3xl font-medium mt-20 mb-8 text-center lg:text-left">Sponsors que han confiado en nosotros</h2>
    <div className="flex flex-wrap gap-10 justify-center">
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
  </section>
);
