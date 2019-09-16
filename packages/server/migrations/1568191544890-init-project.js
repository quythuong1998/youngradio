import mongoose from 'mongoose';

import { SystemUsers, Authors } from '../services';
import { ADMIN } from '../enums/userRole';
import { MALE } from '../enums/userGender';

const authorUser = {
  username: 'author',
  password: '123456',
  first_name: 'Young Radio',
  last_name: 'Author',
  email: 'youngradio.author@gmail.com',
  gender: MALE,
  birth_date: '19/10/1998',
  quote: 'Death is like a wind, always by my side.'
};

const systemUser = {
  username: 'admin',
  password: '123456',
  first_name: 'Young',
  last_name: 'Radio',
  role: ADMIN,
  email: 'youngradio.admin@gmail.com',
  gender: MALE,
  birth_date: '19/10/1998'
};

const insertSystemUser = () => new SystemUsers(systemUser).save();
const insertAuthorUser = () => new Authors(authorUser).save();

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
      resolve(mongoose);
    });
  });
};

module.exports.up = async function() {
  const db = await connectDb();
  await insertSystemUser();
  await insertAuthorUser();
  await db.disconnect();
};

module.exports.down = async function() {
  const db = await connectDb();
  await SystemUsers.deleteOne({ username: systemUser.username });
  await Authors.deleteOne({ username: authorUser.username });

  await db.disconnect();
};
