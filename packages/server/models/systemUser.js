import { model, Types, Schema } from 'mongoose';
import uuid from 'uuid';// big storage and hidden ``ID``
import { updateDocBuilder } from './utils';

//just for example!
const SystemUserSchema = Schema({
  _id: {
    type: Schema.ObjectId,
    default: Types.ObjectId
  },
  id:
  {
    type: String,
    default: uuid,// do
    required: true
  },
  username: { type: String, required: true }
});

SystemUserSchema.methods.updateDoc = updateDocBuilder();// don't undertand

const SystemUser = model('SystemUsers', SystemUserSchema);
module.exports = SystemUser;
