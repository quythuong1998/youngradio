import { Users } from '../../../services';
<<<<<<< HEAD
import { Articles } from '../../../services';

=======
import { combineResolvers } from 'graphql-resolvers';
import { checkAuthentication } from '../../libs';
import { ADMIN } from '../../../enums/userRole';
>>>>>>> origin/develop

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
<<<<<<< HEAD
    get_three_authors_typical: async () => {
      const authorsTypical = [];
      const authorId = await Users.find({});
      console.log(authorId);
      while (authorsTypical.length < 3) {
        const article = await Articles.find({ author_id: authorId });
        console.log(article);
        if (article) {
          authorsTypical.push(authorId);
        }
      }
      return authorsTypical;
    }
=======

    get_current_user: combineResolvers(
      checkAuthentication,
      (_, __, { currentUser }) => {
        return Users.findOne({ id: currentUser.id });
      }
    )
>>>>>>> origin/develop
  }
};
