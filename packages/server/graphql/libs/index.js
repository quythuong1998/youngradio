import { skip } from 'graphql-resolvers';
import { ForbiddenError } from 'apollo-server-express';
import { USER, ADMIN } from '../../enums/userRole';
import { combineResolvers } from 'graphql-resolvers';

export const checkAuthentication = (parent, args, { currentUser }) =>
  currentUser ? skip : new ForbiddenError('Not authenticated as user.');

export const isAdmin = combineResolvers(
  checkAuthentication,
  (_, __, { currentUser: { role } }) =>
    role === ADMIN ? skip : new Error('Not authorized as Admin')
);

export const isUser = combineResolvers(
  checkAuthentication,
  (_, __, { currentUser: { role } }) =>
    role === USER ? skip : new Error('Not authorized as User')
);
