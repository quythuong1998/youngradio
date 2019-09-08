import { model, Types, Schema } from 'mongoose';
import uuid from 'uuid';
import { updateDocBuilder } from './utils';

//just for example!
const SystemUserSchema = Schema({
  _id: {
    type: Schema.ObjectId,
    default: Types.ObjectId
  },
  id: {
    type: String,
    default: uuid,
    required: true
  },
  username: { type: String, required: true }
});

SystemUserSchema.methods.updateDoc = updateDocBuilder();

const SystemUser = model('SystemUsers', SystemUserSchema);
module.exports = SystemUser;
