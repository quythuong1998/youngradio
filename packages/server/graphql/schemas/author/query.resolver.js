import { Authors } from '../../../services';

module.exports = {
  Query: {
    login_author: async (_, { username, password }) => {
      const author = await Authors.findOne({ username });
      if (author) {
        if (await author.comparePassword(password)) {
          return author;
        }
      }
      throw new Error('Incorrect username or Password!');
    }
  }
};
