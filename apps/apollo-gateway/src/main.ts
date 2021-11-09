import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import { UserTypeDefs, ProductsDefs } from '@monorepo-microservices/svc-types';

const gateway = new ApolloGateway({
  schemaConfigDeliveryEndpoint: null,
  localServiceList: [
    { name: 'users', url: 'http://localhost:4001', typeDefs: UserTypeDefs },
    { name: 'products', url: 'http://localhost:4002', typeDefs: ProductsDefs },
  ],
});

const server = new ApolloServer({
  gateway,
});

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀 Gateway ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
