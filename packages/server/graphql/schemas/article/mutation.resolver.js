import { combineResolvers } from 'graphql-resolvers';
import { Articles } from '../../../services';
import { checkAuthentication, formatObject } from '../../libs';
import { ADMIN } from '../../../enums/userRole';
module.exports = {
  Mutation: {
    create_article: combineResolvers(
      checkAuthentication,
      async (
        _,
        { title, content, categoryId, hastags, description, imageDescription },
        { currentUser }
      ) => {
        const articleStatus = currentUser.role === ADMIN ? true : false;

        const articleData = formatObject({
          title,
          content,
          category_id: categoryId,
          hastags,
          description,
          image_description: imageDescription,
          author_id: currentUser.id,
          is_verified: articleStatus
        });

        const article = new Articles(articleData);

        await article.save();
        return article;
      }
    )
  }
};
