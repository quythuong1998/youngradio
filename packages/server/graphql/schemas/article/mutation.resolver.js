import { combineResolvers } from 'graphql-resolvers';
import { Articles } from '../../../services';
import { checkAuthentication, formatObject } from '../../libs';

module.exports = {
  Mutation: {
    create_article: combineResolvers(
      checkAuthentication,
      async (
        _,
        { title, content, categoryId, hastags, description, imageDescription },
        { currentUser }
      ) => {
        const articleData = formatObject({
          title,
          content,
          category_id: categoryId,
          hastags,
          description,
          imageDescription,
          author_id: currentUser.id
        });

        const article = new Articles(articleData);

        await article.save();
        return article;
      }
    )
  }
};
