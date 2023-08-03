export enum PLANS {
  Neutral,
  Silver = 'Silver',
  Gold = 'Gold',
  Diamond = 'Diamond',
}

export const pricingData = [
  {
    title: PLANS.Neutral,
    price: 'Desde $100.000',
    perks: [
      'Logo grande en la página',
      'Logo en las publicaciones',
      '10 sillas reservadas en los eventos del meetup',
      'Espacio de 5 a 10 minutos en los eventos del meetup (charla corta o video)',
      'Repartir stickers de empresa y folletos de información',
      'Compartimos codigo QR o link de promociones o servicios',
    ],
  },
  {
    title: PLANS.Silver,
    price: '$80.000',
    perks: ['Logo en pequeño en la página', '1 silla reservada en los eventos'],
  },
  {
    title: PLANS.Gold,
    price: '$160.000',
    perks: [
      'Logo en mediano en la página',
      '3 sillas reservadas en los eventos del meetup',
      '100 palabras en perfil de empresa en el sitio web',
      'Espacio de 3 minutos en los eventos del meetup (charla corta o video)',
    ],
  },
  {
    title: PLANS.Diamond,
    price: '$320.000',
    perks: [
      'Logo en grande en la página',
      'Logo en las publicaciones',
      '10 sillas reservadas en los eventos del meetup',
      '300 palabras en perfil de empresa en el sitio',
      'Espacio de 5 minutos en los eventos del meetup (charla corta o video)',
      'Repartir stickers de empresa y folletos de información',
      'Compartimos codigo QR o link de promociones o servicios',
    ],
  },
];
