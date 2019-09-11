// import { combineResolvers } from 'graphql-resolvers';
import { frompairs } from 'lodash/fp'
import { Categories } from '../../../services';
module.exports = {
    Query: {
        get_all_category: async () => {
            const categories = await Categories.find({});
            return categories;
        }
    }
};
