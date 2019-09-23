import { path } from 'lodash/fp';
module.exports = {
    Article: {
        createdAt: path('create_at'),
        updatedAt: path('update_at'),
        imageDescription: path('image_description'),
        authorId: path('author_id'),
        categoryId: path('category_id'),
        firstName: path('first_name'),
        lastName: path('last_name')
    }
};