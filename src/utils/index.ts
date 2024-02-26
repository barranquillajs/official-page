import { isAfter } from 'date-fns';

export { client } from './apollo';
export * from './types';

export const getItIsProductionEnv = () => process.env.NODE_ENV === 'production';

export const isUpcomingEvent = (date: Date | string) => isAfter(new Date(date), new Date());
