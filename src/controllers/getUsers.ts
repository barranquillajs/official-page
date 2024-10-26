import pkg from '@apollo/client';
import { client, USER_KIND, type UserType } from '../utils';

const { gql } = pkg;

const GetUsersBasicQuery = gql`
  query GetUsersBasic($userIds: [Int]!) {
    userCollection(where: { id_in: $userIds }) {
      items {
        id
        name
        image {
          url
        }
        imageBlurUrl
      }
    }
  }
`;

const GetUsersQuery = gql`
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
    if (client.isConnected) {
      const { data } = await client.query({ query: GetUsersQuery, variables: { type: USER_KIND.SPEAKER } });
      return parseUsers(data);
    } else return []
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getOrganizers = async () => {
  try {
    if (client.isConnected) {
      const { data } = await client.query({ query: GetUsersQuery, variables: { type: USER_KIND.ORGANIZER } });
        return parseUsers(data);
    } else return []
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getUsersBasic = async (userIds: Array<number>) => {
  try {
    if (client.isConnected) {
      const { data } = await client.query({ query: GetUsersBasicQuery, variables: { userIds } });
      return parseUsers(data) as Array<Pick<UserType, 'id' | 'name' | 'image'>>;
    } else return []
  } catch (error) {
    console.error(error);
    return [];
  }
};
