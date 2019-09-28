import { skip } from 'graphql-resolvers';
import { ForbiddenError } from 'apollo-server-express';
import { USER, ADMIN } from '../../enums/userRole';
import { combineResolvers } from 'graphql-resolvers';
import { flow, isString, mapValues, pickBy, trim } from 'lodash/fp';
import brn from 'brn';

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

const trimString = brn(isString, trim);

const trimObjectValues = mapValues(val => trimString(val));

// Note: allow '' and 0, if want to omit: do it later
export const formatObject = flow(
  trimObjectValues,
  pickBy(item => item !== null && item !== undefined)
);
