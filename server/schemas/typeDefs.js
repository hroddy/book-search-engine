const { Query } = require("mongoose");
const { User } = require("../models");
const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
}
type Book {
    bookId: ID!
    authors: [String]
    description: String!
    title: String!
   image: String
   link: String
}
type Auth {
    token: ID!
    user: User
}
type Mutation {
    login (email: String!, password: String!): Auth
    addUser (username: String!, email: String!, password: String!): Auth
    saveBook (authors: [String], description: String, title: String!, image: String, link: String): User
    removeBook (bookId: ID!): User
}
type Query {
    me: User
}
`;

module.exports = typeDefs;