import redisConnect from 'connect-redis';
import session from 'express-session';
import uuid from 'uuid';
import { flow, nth, split } from 'lodash/fp';
import brn from 'brn';
import ms from 'ms';
const redis = require('redis');
const redisClient = redis.createClient();

const SESSION_KEY = 'keyne';
const RedisStore = redisConnect(session);
const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

const generateSessionKey = flow(
  split('.'),
  brn(nth(2), nth(2), nth(0))
);

export const saveSession = (session, token) => {
  if (session) {
    session[SESSION_KEY] = generateSessionKey(token);
    return true;
  }

  console.log('Session is not available');
  return false;
};
export default () =>
  session({
    name: 'session_redis',
    genid: function() {
      return uuid.v4();
    },
    store: new RedisStore({
      url: redisUrl,
      logErrors: true,
      client: redisClient
    }),
    secret: process.env.SESSION_SECRET || 'session-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: ms('1d')
    }
  });
