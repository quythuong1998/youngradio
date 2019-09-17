import { path } from 'lodash/fp';
import { MALE, FEMALE } from '../../../enums/userGender';
import { AUTHOR, ADMIN } from '../../../enums/userRole';
import {
  USER_PENDING,
  USER_ACTIVE,
  USER_BANNED
} from '../../../enums/userStatus';
import auth from '../../../authentication';
import { saveSession } from '../../../middlewares/session';
module.exports = {
  UserStatus: {
    PENDING: USER_PENDING,
    ACTIVE: USER_ACTIVE,
    BANNED: USER_BANNED
  },

  Gender: {
    FEMALE,
    MALE
  },

  Role: {
    ADMIN,
    AUTHOR
  },

  User: {
    fullName: user =>
      user.first_name && user.last_name
        ? user.first_name + ' ' + user.last_name
        : user.email,
    firstName: path('first_name'),
    lastName: path('last_name'),
    birthDate: path('birth_date'),
    token: (user, _, { req }) => {
      const jwt = auth.sign(user);
      saveSession(req.session, jwt);
      return 'bearer ' + jwt;
    }
  }
};
