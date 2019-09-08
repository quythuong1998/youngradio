import './db';
import { ApolloServer } from 'apollo-server-express';
import app from './server';
import schema from './graphql';

//using pubsub later in there: import listeners from './pubsub';

const server = new ApolloServer({
  schema
});

server.applyMiddleware({
  app,
  path: process.env.GRAPHQL_PATH
});

const env = process.env.NODE_ENV || 'development';
const port = process.env.NODE_PORT || 3003;

app.listen({ port }, () => {
  console.log('environment:', env);
  console.log(`The GraphQL server is running on port ${port}`);
});
