import { model, Types, Schema } from 'mongoose';
import uuid from 'uuid';
import { updateDocBuilder } from './utils';

const HastagSchema = Schema({
  _id: {
    type: Schema.ObjectId,
    default: Types.ObjectId
  },
  id: {
    type: String,
    default: uuid,
    required: true
  },
  name: String
});

HastagSchema.methods.updateDoc = updateDocBuilder();

const Hastags = model('Hastags', HastagSchema);

module.exports = Hastags;
