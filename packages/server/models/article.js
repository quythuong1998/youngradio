import { model, Types, Schema } from 'mongoose';
import uuid from 'uuid';
import { updateDocBuilder } from './utils';

const ArticleSchema = Schema({
  _id: {
    type: Schema.ObjectId,
    default: Types.ObjectId
  },
  id: {
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
  author_id: {
    type: String,
    required: true
  },
  view: {
    type: Number,
    default: 0,
    required: true
  },
  hastags: [String],
  create_at: {
    type: Date,
    default: Date.now,
    required: true
  },
  update_at: {
    type: Date,
    default: Date.now,
    required: true
  },
  image_description: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  category_id: {
    type: String,
    required: true
  }
});

ArticleSchema.methods.updateDoc = updateDocBuilder();

const Articles = model('Articles', ArticleSchema);

module.exports = Articles;
