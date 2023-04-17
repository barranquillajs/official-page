import { ApolloClient, InMemoryCache } from '@apollo/client';

const space = process.env.CONTENTFULL_SPACE_ID;
const accessToken = process.env.CONTENTFULL_DELIVERY_KEY;

export const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${space}`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
