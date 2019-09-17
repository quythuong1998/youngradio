import { path } from 'lodash/fp';
module.exports = {
    Article: {
        createdAt: path('created_at'),
        updatedAt: path('updated_at')
    }
};