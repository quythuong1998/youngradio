import { path } from 'lodash/fp';
import { Categories, Users } from '../../../services';
module.exports = {
  Article: {
    createdAt: path('created_at'),
    updatedAt: path('updated_at'),
    imageDescription: path('image_description'),
    authorId: path('author_id'),
    categoryId: path('category_id'),
    isVerified: path('is_verified'),
    categoryName: async article => {
      const category = await Categories.findOne({ id: article.category_id });
      return category.name;
    },
    authorName: async article => {
      const author = await Users.findOne({ id: article.author_id });
      return author.first_name + ' ' + author.last_name;
    },
    authorAvatar: async article => {
      const author = await Users.findOne({ id: article.author_id });
      return author.avatar;
    }
  }
};
