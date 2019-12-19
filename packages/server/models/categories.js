import { Types, model, Schema } from 'mongoose';
import uuid from 'uuid';
import { updateTimeWhenSave, updateDocBuilder } from './utils';

const CategorySchema = Schema({
  _id: {
    type: Schema.ObjectId,
    default: Types.ObjectId
  },
  id: {
    type: String,
    default: uuid,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now,
    required: true
  }
});

CategorySchema.pre('save', updateTimeWhenSave);
CategorySchema.methods.updateDoc = updateDocBuilder();

const Categories = model('Categories', CategorySchema);
module.exports = Categories;
