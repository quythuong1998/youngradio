import { Articles } from '../../../services';

module.exports = {
    Query: {
        get_most_view_articles: async (_, { amount }) => {
            const articles = await Articles.find({}).sort([['view', -1]]);
            return articles.slice(0, amount);
        },

        get_three_post_newest: async () => {
            const sortArticles = await Articles.find({}).sort([['created_at', -1]]);
            return sortArticles.slice(0, 3);

        }
    }
};

