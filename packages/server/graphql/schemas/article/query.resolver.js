// import { combineResolvers } from 'graphql-resolvers';
import { Articles } from '../../../services';

module.exports = {
    Query: {
        get_most_view_articles: async (_, { amount }) => {
            const articles = await Articles.find({}).sort([['view', -1]]);
            return articles.slice(0, amount);
        }
    }
};

