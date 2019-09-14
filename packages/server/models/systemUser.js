import { model, Types, Schema } from 'mongoose';
import uuid from 'uuid';
import { updateDocBuilder, updateTimeWhenSave } from './utils';
import { ADMIN } from '../enums/userRole';
import bcrypt from 'bcryptjs';

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
  username: { type: String, required: true },
  password: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, require: true },
  gender: Number,
  email: { type: String, required: true },
  birth_date: String,
  role: {
    type: Number,
    default: ADMIN,
    required: true
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

SystemUserSchema.pre('save', function(next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        user.updated_at = Date.now();
        return next();
      });
    });
  } else {
    return next();
  }
});
SystemUserSchema.pre('save', updateTimeWhenSave);
SystemUserSchema.methods.updateDoc = updateDocBuilder();

SystemUserSchema.methods.comparePassword = function(password) {
  try {
    return bcrypt.compare(password, this.password);
  } catch (err) {
    return err;
  }
};

const SystemUsers = model('SystemUsers', SystemUserSchema);
module.exports = SystemUsers;
