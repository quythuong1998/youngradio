// import { combineResolvers } from 'graphql-resolvers';
import { Radio } from '../../../services';

module.exports = {
  Query: {
    get_lasted_blog_radio: async () => {
      const radio = await Radio.find({})
        .limit(1)
        .sort({ $natural: -1 });
      return radio[0];
    },

    get_blog_radio: async (_, { id }) => {
      return Radio.findOne({ id });
    },
    get_all_blog_radio: async () => {
      return Radio.find({}).sort([['created_at', -1]]);
    }
  }
};
