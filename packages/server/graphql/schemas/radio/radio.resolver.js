import { path } from 'lodash/fp';
import { Users } from '../../../services';
module.exports = {
  Radio: {
    createdAt: path('created_at'),
    updatedAt: path('updated_at'),
    smallThumbnail: path('small_thumbnail'),
    largeThumbnail: path('large_thumbnail'),
    authorId: path('author_id'),
    authorName: async article => {
      const author = await Users.findOne({ id: article.author_id });
      return author.first_name + ' ' + author.last_name;
    },
    authorAvatar: async article => {
      const author = await Users.findOne({ id: article.author_id });
      return author.avatar;
    },
    videoURL: path('video_url')
  }
};
