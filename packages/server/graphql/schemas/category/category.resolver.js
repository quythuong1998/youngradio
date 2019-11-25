import { path } from 'lodash/fp';

module.exports = {
  Category: {
    createdAt: path('created_at'),
    updatedAt: path('updated_at')
  }
};
