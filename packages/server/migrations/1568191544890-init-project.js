import mongoose from 'mongoose';
import { Users } from '../services';
import { MALE } from '../enums/userGender';
import { USER_ACTIVE } from '../enums/userStatus';
import { AUTHOR, ADMIN } from '../enums/userRole';

const authorUser = {
  username: 'author',
  password: '123456',
  first_name: 'Young Radio',
  last_name: 'Author',
  email: 'youngradio.author@gmail.com',
  gender: MALE,
  birth_date: '19/10/1998',
  quote: 'Death is like a wind, always by my side.',
  status: USER_ACTIVE,
  role: AUTHOR
};

const systemUser = {
  username: 'admin',
  password: '123456',
  first_name: 'Young Radio',
  last_name: 'Admin',
  email: 'youngradio.admin@gmail.com',
  gender: MALE,
  birth_date: '19/10/1998',
  quote: 'Death is like a wind, always by my side.',
  status: USER_ACTIVE,
  role: ADMIN
};

const insertSystemUser = () => new Users(systemUser).save();
const insertAuthorUser = () => new Users(authorUser).save();

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

  await Promise.all([
    Users.deleteOne({ username: systemUser.username }),
    Users.deleteOne({ username: authorUser.username })
  ]);

  await db.disconnect();
};
