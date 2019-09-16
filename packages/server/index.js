import './db';
import { ApolloServer } from 'apollo-server-express';
import app from './server';
import schema from './graphql';

//using pubsub later in there: import listeners from './pubsub';

const server = new ApolloServer({
  schema,
  context: async ({ req, res }) => {
    const currentToken = (req.headers.authorization || '').substr(7);

    // try {
    //   //do not check session for this phase
    //   // if (!isVerifiedSession(req.session, currentToken)) {
    //   //   throw new AuthenticationError(
    //   //     'you are unauthorized to do this action!'
    //   //   );
    //   // }

    //   const payload = await auth.verify(currentToken);

    //   const [currentUser, currentPartner] = await Promise.all([
    //     Base.getUserByType(payload),
    //     Base.getCurrentPartner(payload)
    //   ]);

    return {
      req,
      res
    };
    // } catch (error) {
    //   throw error;
    // }
  }
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
