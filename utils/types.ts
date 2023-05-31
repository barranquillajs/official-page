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

export type UserType = {
  id: number;
  name: string;
  image?: {
    url?: string;
  };
  homePage?: string;
  linkedinLink?: string;
  githubLink?: string;
};

export const SPONSOR_LEVEL = {
  DIAMOND: { name: 'DIAMOND', width: 200 },
  GOLD: { name: 'GOLD', width: 150 },
  SILVER: { name: 'SILVER', width: 100 },
};

export enum USER_KIND {
  SPEAKER = 'Speaker',
  ORGANIZER = 'Organizer',
}
