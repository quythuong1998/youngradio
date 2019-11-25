import { combineResolvers } from 'graphql-resolvers';
import { Articles, Categories } from '../../../services';
import { sortDefaultOptions } from '../../libs/options';
import { checkAuthentication, isAdmin } from '../../libs';

module.exports = {
  Query: {
    get_most_view_articles: async (_, { amount }) => {
      const articles = await Articles.find({}).sort([['view', -1]]);
      return articles.slice(0, amount);
    },

    get_user_articles: combineResolvers(
      checkAuthentication,
      (_, __, { currentUser }) => {
        return Articles.find({ author_id: currentUser.id }).sort(
          sortDefaultOptions
        );
      }
    ),

    get_lasted_articles: async (_, { amount }) => {
      const articles = await Articles.find({}).sort([['created_at', -1]]);
      return articles.slice(0, amount);
    },

    get_article: async (_, { id }) => {
      return Articles.findOne({ id });
    },

    get_articles_by_category: async (_, { categoryId }) => {
      return Articles.find({ category_id: categoryId }).sort(
        sortDefaultOptions
      );
    },
    get_articles_by_random_category: async () => {
      const randomCategory = await Categories.aggregate([
        { $sample: { size: 1 } }
      ]);

      const categoryId = randomCategory[0].id;

      return Articles.find({ category_id: categoryId }).sort(
        sortDefaultOptions
      );
    },

    get_all_articles: combineResolvers(isAdmin, async () => {
      return Articles.find({});
    })
  }
};
