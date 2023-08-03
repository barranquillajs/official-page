import { PiDiamondsFour } from 'react-icons/pi';
import { FaRegCheckCircle } from 'react-icons/fa';

import { pricingData } from '@/constants';

const currentPlan = pricingData[0];

export const PlanSection = () => (
  <section className="flex flex-col items-center">
    <h2 className="text-4xl font-bold mb-9 mt-16">Bienvenid@ a nuestra comunidad</h2>
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
  </section>
);
