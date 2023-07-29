'use client';
import { useState } from 'react';

import { ButtonContained } from '@makinox/makinox-ui';

import { UserType } from '@/utils';
import { SpeakerCard } from '@/components';

export const Speakers = ({ speakers }: { speakers: Array<UserType> }) => {
  const [showAll, setShowAll] = useState(false);

  const resultSpeakers = showAll ? speakers : speakers?.slice(0, 6);

  return (
    <section className="pt-20 container mx-auto">
      <h2 className="text-3xl font-medium">Héroes</h2>
      <p className="text-base font-normal">Los charlistas que nos hacen crecer compartiendo su conocimiento</p>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 justify-items-center mt-8">
        {resultSpeakers?.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {showAll ? (
          <button className={`${ButtonContained()}`} onClick={() => setShowAll(false)}>
            Mostrar menos
          </button>
        ) : (
          <button className={`${ButtonContained()}`} onClick={() => setShowAll(true)}>
            Mostrar más
          </button>
        )}
      </div>
    </section>
  );
};
