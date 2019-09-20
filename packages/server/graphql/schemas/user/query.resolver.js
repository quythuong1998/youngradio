import { Users, Articles } from '../../../services';

import { combineResolvers } from 'graphql-resolvers';
import { checkAuthentication } from '../../libs';

module.exports = {
  Query: {
    login_user: async (_, { username, password }) => {
      const user = await Users.findOne({ username });
      if (user) {
        if (await user.comparePassword(password)) {
          return user;
        }
      }
      throw new Error('Incorrect username or Password!');
    },
    get_three_authors_typical: async () => {
      const authorsTypical = [];
      while (authorsTypical.length < 3) {
        const author = await Users.aggregate([{ $sample: { size: 1 } }]);
        const article = await Articles.find({ author_id: author.id });
        if (article) {
          authorsTypical.push(author);
        }
      }
      return authorsTypical;
    },
    get_current_user: combineResolvers(
      checkAuthentication,
      (_, __, { currentUser }) => {
        return Users.findOne({ id: currentUser.id });
      }
    )
  }
};
