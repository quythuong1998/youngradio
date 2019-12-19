import { Categories } from '../../../services';
import { combineResolvers } from 'graphql-resolvers';
import { isAdmin, formatObject } from '../../libs';

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
    ),
    // TODO: delete all articles when delete category
    delete_category: combineResolvers(isAdmin, async (_, { id }) => {
      const category = await Categories.findOne({ id });
      category.remove();
      return category;
    }),

    edit_category: combineResolvers(
      isAdmin,
      async (_, { id, name, description }) => {
        const category = await Categories.findOne({ id });

        const categoryData = formatObject({
          name,
          description
        });
        category.updateDoc(categoryData);
        await category.save();
        return category;
      }
    )
  }
};
