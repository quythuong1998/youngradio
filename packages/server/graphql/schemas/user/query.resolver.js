import { Users } from '../../../services';
import { Articles } from '../../../services';


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
  }
};
