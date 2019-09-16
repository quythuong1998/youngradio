import { path } from 'lodash/fp';
import { MALE, FEMALE } from '../../../enums/userGender';
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

  Author: {
    fullName: author =>
      author.first_name && author.last_name
        ? author.first_name + ' ' + author.last_name
        : author.email,
    firstName: path('first_name'),
    lastName: path('last_name'),
    birthDate: path('birth_date'),
    token: (author, _, { req }) => {
      const jwt = auth.sign(author);
      saveSession(req.session, jwt);
      return 'bearer ' + jwt;
    }
  }
};
