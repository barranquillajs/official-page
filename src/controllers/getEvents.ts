import eventsModel from 'src/models/events';
import { client, type EventType, type UserType } from 'src/utils';
import { getUsersBasic } from './getUsers';

export type EventUserComposedType = EventType & { speakersInfo: Array<Pick<UserType, 'id' | 'name' | 'image'>> };

const parseEvents = async (data): Promise<Array<EventUserComposedType>> => {
  if (!data?.eventsCollection?.items) return [];
  const eventsData: Array<EventType> = [...data.eventsCollection.items];
  const eventsPromised = eventsData.map(async (event) => {
    const speakersId = event.speakersId.map((el) => parseInt(el, 10));
    const speakersInfo = await getUsersBasic(speakersId);
    const eventCopy = { ...event };
    eventCopy['speakersInfo'] = speakersInfo;
    return eventCopy as EventUserComposedType;
  });

  const eventsResolved = await Promise.all(eventsPromised);
  return eventsResolved;
};

export const getEvents = async (limit = 3) => {
  if (process.env.NODE_ENV !== 'production') {
    return parseEvents(eventsModel.GetEventsQueryMocks.data);
  }

  try {
    const { data } = await client.query({ query: eventsModel.GetEventsQuery, variables: { limit } });
    return await parseEvents(data);
  } catch (error) {
    console.error(error);
    return [];
  }
};
