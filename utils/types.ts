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

export type EventType = {
  name: string;
  image?: {
    url?: string;
  };
  imageBlurUrl: string;
  speakersId: Array<string>;
  eventLink: string;
};

export const SPONSOR_LEVEL = {
  DIAMOND: { name: 'DIAMOND', size: 200 },
  GOLD: { name: 'GOLD', size: 150 },
  SILVER: { name: 'SILVER', size: 100 },
};

export enum USER_KIND {
  SPEAKER = 'Speaker',
  ORGANIZER = 'Organizer',
}
