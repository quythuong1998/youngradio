import { skip } from 'graphql-resolvers';
import { ForbiddenError } from 'apollo-server-express';

export const checkAuthentication = (parent, args, { currentUser }) =>
  currentUser ? skip : new ForbiddenError('Not authenticated as user.');
