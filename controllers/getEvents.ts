import { gql } from '@apollo/client';

import { client, EventType, UserType } from '../utils';
import { getUsersBasic } from './getUsers';

export type EventUserComposedType = EventType & { speakersInfo: Array<Pick<UserType, 'id' | 'name' | 'image'>> };

const GetEventsQuery = gql`
  query GetEvents($limit: Int!) {
    eventsCollection(limit: $limit, order: date_DESC) {
      items {
        name
        image {
          url
        }
        imageBlurUrl
        speakersId
        eventLink
      }
    }
  }
`;

const parseEvents = async (data): Promise<Array<EventUserComposedType>> => {
  if (!data?.eventsCollection?.items) return [];
  const eventsData: Array<EventType> = structuredClone(data.eventsCollection.items);
  const eventsPromised = eventsData.map(async (event) => {
    const speakersId = event.speakersId.map((el) => parseInt(el, 10));
    const speakersInfo = await getUsersBasic(speakersId);
    const eventCopy: EventUserComposedType = structuredClone(event);
    eventCopy['speakersInfo'] = speakersInfo;
    return eventCopy;
  });

  const eventsResolved = await Promise.all(eventsPromised);
  return eventsResolved;
};

export const getEvents = async (limit = 3) => {
  try {
    const { data } = await client.query({ query: GetEventsQuery, variables: { limit } });
    return await parseEvents(data);
  } catch (error) {
    console.error(error);
    return [];
  }
};
