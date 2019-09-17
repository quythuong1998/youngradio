import { makeFetchAction } from 'redux-api-call';
import { respondToSuccess } from '../middlewares/api-reaction';
import Router from 'next/router';
import { flow, includes, join, map, path, get, brn } from 'lodash/fp';
import { gql, saveToken } from '../libs';

const AUTHOR_LOGIN_API = 'AuthorLoginAPI';

const AuthorLoginAPI = makeFetchAction(
  AUTHOR_LOGIN_API,
  gql`
    query($username: String!, $password: String!) {
      login_author(username: $username, password: $password) {
        id
        fullName
        token
      }
    }
  `
);

export const authorLogin = (username, password) => {
  return respondToSuccess(
    AuthorLoginAPI.actionCreator({ username, password }),
    resp => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }
      saveToken(resp.data.login_author.token);
      Router.push('/');
      return;
    }
  );
};

export const authorLoginErrorMessageSelector = flow(
  AuthorLoginAPI.dataSelector,
  path('errors'),
  map('message'),
  join(' | ')
);

export default {};
