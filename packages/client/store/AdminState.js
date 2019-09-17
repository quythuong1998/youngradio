import { makeFetchAction } from 'redux-api-call';
import { respondToSuccess } from '../middlewares/api-reaction';
import Router from 'next/router';
import { flow, includes, join, map, path, get, brn } from 'lodash/fp';
import { gql } from '../libs';

const ADMIN_LOGIN_API = 'AdminLoginAPI';

export const createErrorSelector = action =>
  flow(
    brn(action.errorSelector, action.errorSelector, action.dataSelector),
    path('errors'),
    map(error => error.message)
  );

//TODO: admin login

// const AdminLoginAPI = makeFetchAction(
//   ADMIN_LOGIN_API,
//   gql`
//     mutation($username: String!, $password: String!) {
//       login_system_user(username: $username, password: $password) {
//         id
//         fullname
//         token
//       }
//     }
//   `
// );

// export const adminLogin = (username, password) => {
//   return respondToSuccess(
//     AdminLoginAPI.actionCreator({ username, password }),
//     resp => {
//       if (resp.errors) {
//         console.error('Err:', resp.errors);
//         return;
//       }
//       saveToken(resp.data.login_system_user.token);
//       Router.push('/');
//       return;
//     }
//   );
// };

// export const adminLoginErrorMessageSelector = createErrorSelector(
//   AdminLoginAPI
// );

export default {};
