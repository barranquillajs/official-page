import { PiDiamondsFour } from 'react-icons/pi';
import { FaRegCheckCircle } from 'react-icons/fa';

import { Footer, Header } from '@/components';
import { pricingData } from '@/constants';
import { returnMetadata } from '@/utils';

const currentPlan = pricingData[0];

export const metadata = returnMetadata({ title: 'Haz parte de nuestros sponsors - Barranquilla JS' });

export default function Sponsors() {
  return (
    <section>
      <Header />
      <div className="container mx-auto xl:px-48">
        <PrincipalSection />
        <PlanSection />
      </div>

      <Footer />
    </section>
  );
}

const PrincipalSection = () => (
  <div>
    <h1 className="text-5xl sm:text-8xl mb-12 mt-32 text-left font-bold w-4/5">Haz parte de nuestros sponsors</h1>
    <p className="text-xl mb-8 text-left font-normal">
      En BarranquillaJs, creemos en el poder de las conferencias impulsadas por la comunidad para avanzar en el mundo del desarrollo de software. Al
      centrarnos en el talento local y el intercambio de conocimientos,estamos creando una plataforma para que tanto desarrolladores como cualquier
      persona crezca profecionalmente.
    </p>
  </div>
);

const PlanSection = () => (
  <div className="flex flex-col items-center">
    <h2 className="text-4xl font-bold text-slate-800 mb-9 mt-16">Bienvenid@ a nuestra comunidad</h2>
    <div className="py-5 px-7 bg-base-100 rounded-3xl shadow-xl w-fit">
      <div className="flex items-center gap-3 border-b border-b-gray-200 pb-5 mb-5">
        <span className="bg-emerald-500 text-white p-3 rounded-lg">
          <PiDiamondsFour size={24} />
        </span>
        <div>
          <h3 className="font-bold text-xl">Sponsorships</h3>
          <span className="text-sm text-gray-500 font-normal">{currentPlan.price}</span>
        </div>
      </div>

      <ul>
        {currentPlan.perks.map((perk) => (
          <li key={perk} className="flex items-center mb-5 gap-2">
            <FaRegCheckCircle />
            <p>{perk}</p>
          </li>
        ))}
      </ul>
      <a href="mailto:barranquillajsx@gmail.com" className="btn btn-primary w-full">
        Contáctanos
      </a>
    </div>
  </div>
);
