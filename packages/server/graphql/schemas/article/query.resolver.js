import { combineResolvers } from 'graphql-resolvers';
import { Articles, Categories } from '../../../services';
import { sortDefaultOptions } from '../../libs/options';

module.exports = {
  Query: {
    get_most_view_articles: async (_, { amount }) => {
      const articles = await Articles.find({}).sort([['view', -1]]);
      return articles.slice(0, amount);
    },

    get_user_articles: combineResolvers((_, { userId }) => {
      return Articles.find({ author_id: userId }).sort(sortDefaultOptions);
    }),

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
    //Refactor later: hastag -> hashtag
    get_articles_by_hashtag: async (_, { hashtag }) => {
      return await Articles.find({ hastags: hashtag }).sort(sortDefaultOptions);
    }
  }
};
