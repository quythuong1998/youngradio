import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';

// import { sessionMiddlewares, expressJWT } from './middlewares'; //build in the future

const app = express();

app.disable('x-powered-by');
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json', extended: true }));
app.use(logger('dev'));

app.use(function(err, req, res, next) {
  //todo: handle error below, try catch api with catch(e) { next(e) }
  if (err) {
    switch (err.name) {
      case 'GraphQLError': {
        // handle later
        return next();
      }
      case 'UnauthorizedError': {
        console.error('error:', err);
        return next(err);
      }

      default: {
        console.error('error:', err);
        return res.status(503).send('Server Error');
      }
    }
  } else {
    next();
  }
});

module.exports = app;
