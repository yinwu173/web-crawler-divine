const typeDefs = `
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, passwor: String!): Auth
        saveBook(bookData: BookInput!): User
        removeBook(bookId: ID!): User
    }
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book] 
    }
    type Book {
        bookId: String  
        authors: [String] 
        description: String
        title: String
        image: String
        link: String
    }
    input InputBook {
        bookId: String  
        authors: [String] 
        description: String
        title: String
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        users: [User]
        user(username: String!): User
        me: User
  }
`;

module.exports = typeDefs;