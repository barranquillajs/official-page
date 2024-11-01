import sponsorsModel from 'src/models/sponsors';
import { type SponsorType, client } from 'src/utils';

const parseSponsors = (data): Array<SponsorType> => {
  if (!data?.sponsorsCollection?.items) return [];
  return data.sponsorsCollection.items;
};

export const getAllSponsors = async () => {
  if (process.env.NODE_ENV !== 'production') {
    return parseSponsors(sponsorsModel.GetSponsorsQueryMocks.data);
  }

  try {
    const { data } = await client.query({ query: sponsorsModel.GetSponsorsQuery });
    return parseSponsors(data);
  } catch (error) {
    console.error(error);
    return [];
  }
};
