import { gql } from '@apollo/client';
import { client, UserType, USER_KIND } from '../utils';

const query = gql`
  query GetUsers($type: String!) {
    userCollection(where: { type_contains_some: [$type] }) {
      items {
        id
        name
        image {
          url
        }
        homePage
        linkedinLink
        githubLink
      }
    }
  }
`;

const parseUsers = (data): Array<UserType> => {
  if (!data?.userCollection?.items) return [];
  return data.userCollection.items;
};

export const getSpeakers = async () => {
  try {
    const { data } = await client.query({ query, variables: { type: USER_KIND.SPEAKER } });
    return parseUsers(data);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getOrganizers = async () => {
  try {
    const { data } = await client.query({ query, variables: { type: USER_KIND.ORGANIZER } });
    return parseUsers(data);
  } catch (error) {
    console.error(error);
    return [];
  }
};
