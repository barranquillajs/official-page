import pkg from '@apollo/client';
import GetSponsorsQueryMocks from 'src/mocks/GetSponsorsQuery.json';
const {gql} = pkg;

const GetSponsorsQuery = gql`
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

export default {
  GetSponsorsQuery,
  GetSponsorsQueryMocks
}