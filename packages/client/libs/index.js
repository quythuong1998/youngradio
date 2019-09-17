import * as graphql from './graphql';
import * as tokenLibs from './token-libs';

export const gql = graphql.gql;
export const isServer = !process.browser;
export const saveToken = tokenLibs.saveToken;
export const getToken = tokenLibs.getToken;
export const removeToken = tokenLibs.removeToken;
