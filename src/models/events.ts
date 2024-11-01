import pkg from '@apollo/client';
import GetEventsQueryMocks from 'src/mocks/GetEventsQuery.json';
const {gql} = pkg;

const GetEventsQuery = gql`
  query GetEvents($limit: Int!) {
    eventsCollection(limit: $limit, order: date_DESC) {
      items {
        name
        image {
          url
        }
        date
        place
        imageBlurUrl
        speakersId
        eventLink
      }
    }
  }
`;

export default {
  GetEventsQuery,
  GetEventsQueryMocks
}
