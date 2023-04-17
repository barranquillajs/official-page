export type SponsorType = {
  name: string;
  description: string;
  logo: {
    url: string;
  };
  logoRaw: string;
  url: string;
  level: string;
};

export const SPONSOR_LEVEL = {
  DIAMOND: { name: 'DIAMOND', width: 200 },
  GOLD: { name: 'GOLD', width: 150 },
  SILVER: { name: 'SILVER', width: 100 },
};
