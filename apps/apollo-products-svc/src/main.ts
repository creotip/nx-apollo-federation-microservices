import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import * as express from 'express';
import * as http from 'http';
import { ProductsDefs } from '@monorepo-microservices/svc-types';

const products = [
  {
    title: 'nike shoes',
    price: 45,
  },
  {
    title: 'adidas shoes',
    price: 23,
  },
];



const resolvers = {
  Query: {
    products: () => products,
  },
};

async function startApolloServer(typeDefs, resolvers) {
  // Required logic for integrating with Express
  const app = express();
  const httpServer = http.createServer(app);

  // Same ApolloServer initialization as before, plus the drain plugin.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  // More required logic for integrating with Express
  await server.start();
  server.applyMiddleware({
    app,

    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: '/'
  });

  // Modified server startup
  await new Promise<void>(resolve => httpServer.listen({ port: 4002 }, resolve));
  console.log(`🚀 Products Service ready at http://localhost:4002${server.graphqlPath}`);
}


startApolloServer(ProductsDefs, resolvers)
