const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
          if (context.user) {
            const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

            return userData;
          }
          throw AuthenticationError('You are NOT logged in.');
        },
      },
      users: async () => {
        return User.find().select('-__v -password');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username }).select('-__v -password');
      },
  

}

module.exports = resolvers;