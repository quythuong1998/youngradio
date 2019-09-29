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
    default: 0
  },
  hastags: [String],
  created_at: {
    type: Date,
    default: Date.now,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now,
    required: true
  },
  image_description: String,
  category_id: {
    type: String,
    required: true
  },
  is_verified: {
    type: Boolean,
    required: true,
    default: false
  }
});

ArticleSchema.methods.updateDoc = updateDocBuilder();

const Articles = model('Articles', ArticleSchema);

module.exports = Articles;
