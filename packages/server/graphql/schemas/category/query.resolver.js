// import { combineResolvers } from 'graphql-resolvers';
import { Categories } from '../../../services';

module.exports = {
  Query: {
    get_all_category: async () => {
      return Categories.find();
    }
  }
};
