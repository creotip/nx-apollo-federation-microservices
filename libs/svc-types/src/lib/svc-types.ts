import { gql } from 'apollo-server';

export const UserTypeDefs = gql`
  type User {
    name: String
    age: Int
  }

  type Query {
    users: [User]
  }
`

export const ProductsDefs = gql`
  type Product {
    title: String
    price: Int
  }

  type Query {
    products: [Product]
  }
`
