import pkg from '@apollo/client';
import GetOrganizersMocks from 'src/mocks/GetOrganizers.json';
import GetSpeakerQueryMocks from 'src/mocks/GetSpeakerQuery.json';
import GetUsersBasicQueryMocks from 'src/mocks/GetUsersBasicQuery.json';
const {gql} = pkg;

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

export default {
  GetUsersBasicQuery,
  GetUsersQuery,
  GetUsersBasicQueryMocks,
  GetSpeakerQueryMocks,
  GetOrganizersMocks,
}