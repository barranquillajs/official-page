export { client } from './apollo';
export * from './metadata';
export * from './types';

export const getItIsProductionEnv = () => process.env.NODE_ENV === 'production';
