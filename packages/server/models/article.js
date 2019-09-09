import { model, Types, Schema } from 'mongoose';
import uuid from 'uuid';
import { updateDocBuilder } from './utils';

//just for example!
const ArticleSchema = Schema({
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
    title: String,
    content: String,
    author: String,
    date: {
        type: Date, default: Date.now
    },
    hastag: [{
        type: Schema.Types.String, ref: 'Hastag'
    }]
});

ArticleSchema.methods.updateDoc = updateDocBuilder();

const Article = model('Article', ArticleSchema);
const Hastag = model('Hastag', HastagSchema);

module.exports = Article;
module.exports = Hastag;
