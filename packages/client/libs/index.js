import * as graphql from './graphql';

export const gql = graphql.gql;
export const isServer = !process.browser;
