import { model, Types, Schema } from 'mongoose';
import uuid from 'uuid';
import { updateDocBuilder } from './utils';
import bcrypt from 'bcryptjs';
import { USER_PENDING } from '../enums/userStatus';
import { AUTHOR } from '../enums/userRole';

const UserSchema = Schema({
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
  quote: String,
  status: {
    type: Number,
    default: USER_PENDING,
    required: true
  },
  role: {
    type: Number,
    default: AUTHOR,
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
  },
  avatar: String
});

UserSchema.methods.updateDoc = updateDocBuilder();

UserSchema.pre('save', function(next) {
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
    if (user.username) {
      user.username = user.username.toLowerCase();
    }
    return next();
  }
});

UserSchema.methods.comparePassword = function(password) {
  try {
    return bcrypt.compare(password, this.password);
  } catch (err) {
    return err;
  }
};

const Users = model('Users', UserSchema);

module.exports = Users;
