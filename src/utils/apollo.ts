import pkg from '@apollo/client';
const { ApolloClient, InMemoryCache } = pkg;

const space = import.meta.env.CONTENTFULL_SPACE_ID;
const accessToken = import.meta.env.CONTENTFULL_DELIVERY_KEY;

export const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${space}`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json; charset=utf-8',
  },
});
