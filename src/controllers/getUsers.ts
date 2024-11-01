import usersModel from 'src/models/users';
import { client, USER_KIND, type UserType } from 'src/utils';

const parseUsers = (data): Array<UserType> => {
  if (!data?.userCollection?.items) return [];
  return data.userCollection.items;
};

export const getSpeakers = async () => {
  if (process.env.NODE_ENV !== 'production') {
    return parseUsers(usersModel.GetSpeakerQueryMocks.data);
  }

  try {
    const { data } = await client.query({ query: usersModel.GetUsersQuery, variables: { type: USER_KIND.SPEAKER } });
    return parseUsers(data);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getOrganizers = async () => {
  if (process.env.NODE_ENV !== 'production') {
    return parseUsers(usersModel.GetOrganizersMocks.data);
  }

  try {
    const { data } = await client.query({ query: usersModel.GetUsersQuery, variables: { type: USER_KIND.ORGANIZER } });
    return parseUsers(data);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getUsersBasic = async (userIds: Array<number>) => {
  if (process.env.NODE_ENV !== 'production') {
    return parseUsers(usersModel.GetUsersBasicQueryMocks);
  }

  try {
    const { data } = await client.query({ query: usersModel.GetUsersBasicQuery, variables: { userIds } });
    return parseUsers(data) as Array<Pick<UserType, 'id' | 'name' | 'image'>>;
  } catch (error) {
    console.error(error);
    return [];
  }
};
