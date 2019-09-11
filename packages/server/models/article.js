import { model, Types, Schema } from 'mongoose';
import uuid from 'uuid';
import { updateDocBuilder } from './utils';

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
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    hastags: [String]
});

ArticleSchema.methods.updateDoc = updateDocBuilder();

const Articles = model('Articles', ArticleSchema);

module.exports = Articles;
