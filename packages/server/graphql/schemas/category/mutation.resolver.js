import { Categories } from '../../../services';
import { combineResolvers } from 'graphql-resolvers';
import { isAdmin } from '../../libs';

module.exports = {
  Mutation: {
    create_category: combineResolvers(
      isAdmin,
      async (_, { name, description }) => {
        const category = new Categories({
          name,
          description
        });
        await category.save();
        return category;
      }
    )
  }
};
