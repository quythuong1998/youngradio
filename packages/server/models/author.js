import { model, Types, Schema } from 'mongoose';
import uuid from 'uuid';
import { updateDocBuilder } from './utils';
import { numberLiteralTypeAnnotation } from '@babel/types';

//just for example!
const AuthorSchema = Schema({
    _id: {
        type: Schema.ObjectId,
        default: Types.ObjectId
    },
    id:
    {
        type: String,
        default: uuid,
        required: true
    },
    name: String,
    age: Number,
    stories: [{
        type: Schema.Types.ObjectId, ref: 'Article'
    }]
});

ArticleSchema.methods.updateDoc = updateDocBuilder();

const Article = model('Article', ArticleSchema);
const Author = model('Author', AuthorSchema);

module.exports = Article;
module.exports = Author;