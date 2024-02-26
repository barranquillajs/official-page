import pkg from '@apollo/client';
import { client, type SponsorType } from '../utils';

const { gql } = pkg;

const query = gql`
  query {
    sponsorsCollection {
      total
      items {
        name
        description
        logo {
          url
        }
        logoRaw
        url
        level
      }
    }
  }
`;

const parseSponsors = (data): Array<SponsorType> => {
  if (!data?.sponsorsCollection?.items) return [];
  return data.sponsorsCollection.items;
};

export const getAllSponsors = async () => {
  try {
    const { data } = await client.query({ query });
    return parseSponsors(data);
  } catch (error) {
    console.error(error);
    return [];
  }
};
