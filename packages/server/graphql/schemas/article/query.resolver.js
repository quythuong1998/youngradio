import { combineResolvers } from 'graphql-resolvers';
import { Articles } from '../../../services';
import { sortDefaultOptions } from '../../libs/options';
import { checkAuthentication } from '../../libs';

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
    )
  }
};
