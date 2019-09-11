import mongoose from 'mongoose';
import uuid from 'uuid';

import { SystemUsers } from '../services';
import { ADMIN } from '../enums/userRole';

const systemUser = {
  username: 'admin',
  password: '123456',
  first_name: 'Young',
  last_name: 'Radio',
  role: ADMIN,
  email: 'youngradio.email@gmail.com'
};

const insertSystemUser = () => new SystemUsers(systemUser).save();

const { MONGO_URL, MONGO_DB, MONGO_OPTIONS } = process.env;

const mongoUrl = MONGO_URL || 'mongodb://localhost:27017';
const dbName = MONGO_DB || 'YoungRadio';
const option = MONGO_OPTIONS
  ? JSON.parse(MONGO_URL)
  : {
      useNewUrlParser: true
    };

const connectDb = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(mongoUrl + '/' + dbName, option, err => {
      if (err) {
        reject(err);
      }
      console.log('resolved');
      resolve(mongoose);
    });
  });
};

module.exports.up = async function() {
  const db = await connectDb();
  await insertSystemUser();
  await db.disconnect();
};

module.exports.down = async function() {
  const db = await connectDb();
  await SystemUsers.deleteOne({ username: systemUser.username });
  await db.disconnect();
};
