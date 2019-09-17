import { makeFetchAction } from 'redux-api-call';
import { respondToSuccess } from '../middlewares/api-reaction';
import Router from 'next/router';
import { flow, includes, join, map, path, get, brn } from 'lodash/fp';
import { gql, saveToken } from '../libs';

const USER_LOGIN_API = 'UserLoginAPI';

const UserLoginAPI = makeFetchAction(
  USER_LOGIN_API,
  gql`
    query($username: String!, $password: String!) {
      login_user(username: $username, password: $password) {
        id
        fullName
        token
      }
    }
  `
);

export const userLogin = (username, password) => {
  return respondToSuccess(
    UserLoginAPI.actionCreator({ username, password }),
    resp => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }
      saveToken(resp.data.login_user.token);
      Router.push('/');
      return;
    }
  );
};

export const userLoginErrorMessageSelector = flow(
  UserLoginAPI.dataSelector,
  path('errors'),
  map('message'),
  join(' | ')
);

export default {};
