import { makeFetchAction, ACTIONS } from 'redux-api-call';
import { respondToSuccess } from '../middlewares/api-reaction';
import Router from 'next/router';
import { flow, join, map, path, get, has } from 'lodash/fp';

import { gql } from '../libs/graphql';
import { saveToken, removeToken } from '../libs/token-libs';
import nfetch from '../libs/nfetch';

const USER_LOGIN_API = 'UserLoginAPI';
const GET_CURRENT_USER_API = 'GetCurrentUserAPI';
const USER_LOGOUT = 'UserLogout';
const USER_LOGOUT_API = 'UserLogoutAPI';
const GET_TYPYCAL_USERS_API = 'GetTypycalUsersAPI';

const GetTypycalUsersAPI = makeFetchAction(
  GET_TYPYCAL_USERS_API,
  gql`
    query {
      get_three_authors_typical {
        fullName
        profession
        quote
        avatar
        id
      }
    }
  `
);

export const getTypycalUsers = () => {
  return respondToSuccess(GetTypycalUsersAPI.actionCreator(), resp => {
    if (resp.errors) {
      console.error('Err:', resp.errors);
      return;
    }
    return;
  });
};

export const getTypycalUsersDataSelector = flow(
  GetTypycalUsersAPI.dataSelector,
  get('data.get_three_authors_typical')
);

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

const GetCurrentUserAPI = makeFetchAction(
  GET_CURRENT_USER_API,
  gql`
    query {
      get_current_user {
        id
        username
        email
        fullName
        createdAt
        updatedAt
        status
        birthDate
        avatar
        role
        profession
        quote
      }
    }
  `
);

export const verifyScopeAndRole = user => {
  if (!user) {
    return false;
  }

  return true; //check it
};

export const getCurrentUser = () =>
  respondToSuccess(GetCurrentUserAPI.actionCreator({}), resp => {
    if (resp.errors) {
      console.error(resp.errors);
      return Router.replace({
        pathname: '/login'
      });
    }
    if (!verifyScopeAndRole(resp.data.get_current_user)) {
      return Router.replace({
        pathname: '/login'
      });
    }
  });

export const getCurrentUserDataSelector = flow(
  GetCurrentUserAPI.dataSelector,
  get('data.get_current_user')
);

const isUserLoggedIn = has('json.data.get_current_user');

export const doLogout = () => [
  {
    type: USER_LOGOUT
  },
  userLogout()
];

const UserLogoutAPI = makeFetchAction(
  USER_LOGOUT_API,
  nfetch({ endpoint: '/signout' })
);

export const userLogout = () => respondToSuccess(UserLogoutAPI.actionCreator());

export default {
  connectStatus(state = false, { type, payload }) {
    if (type === ACTIONS.COMPLETE && payload.name === GET_CURRENT_USER_API) {
      return isUserLoggedIn(payload);
    }

    if (type === ACTIONS.FAILURE && payload.name === GET_CURRENT_USER_API) {
      removeToken();
      Router.push('/login');

      return false;
    }

    if (type === USER_LOGOUT) {
      removeToken();
      Router.push('/login');
      return false;
    }

    return state;
  }
};
