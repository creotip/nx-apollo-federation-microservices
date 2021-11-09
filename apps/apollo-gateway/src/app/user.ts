// import { buildFederatedSchema } from '@apollo/federation';
// import { ApolloServer, gql } from 'apollo-server';
// import User from './datasources/models/User';
// import mongoStore from './mongoStore';
//
// const typeDefs = gql`
//   type User @key(fields: "id") {
//     id: ID!
//     username: String!
//   }
//   extend type Query {
//     users: [User]
//     user(id: ID!): User
//   }
//   extend type Mutation {
//     createUser(userPayload: UserPayload): User
//   }
//   input UserPayload {
//     username: String!
//   }
// `;
//
// const resolvers = {
//   Query: {
//     users: async () => {
//       const allUsers = await User.find({});
//       return allUsers;
//     },
//     user: async (_, { id }) => {
//       const currentUser = await User.findOne({ _id: id });
//       return currentUser;
//     },
//   },
//   User: {
//     __resolveReference: async (ref) => {
//       const currentUser = await User.findOne({ _id: ref.id });
//       return currentUser;
//     },
//   },
//   Mutation: {
//     createUser: async (_, { userPayload: { username } }) => {
//       const user = new User({ username });
//       const createdUser = await user.save();
//       return createdUser;
//     },
//   },
// };
//
// mongoStore();
//
// const server = new ApolloServer({
//   schema: buildFederatedSchema([{ typeDefs, resolvers }]),
// });
//
// server.listen({ port: 4001 }).then(({ url }) => {
//   console.log(`User service ready at url: ${url}`);
// });
