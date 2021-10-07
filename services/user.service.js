const User = require("../models/user.model");

module.exports = class UserService {
  static async createUser(userData) {
    try {
      const createdUser = await new User(userData).save();
      return createdUser;
    } catch (error) {
      throw new Error(`Something Went Wrong ${error}`);
    }
  }

  static async loginUser(credentials) {
    try {
      const user = await User.findByCredentials(
        credentials.email,
        credentials.password
      );

      return user;
    } catch (error) {
      throw new Error("Invalid Credentials");
    }
  }

  static async fetchUserById(id) {
    try {
      const user = await User.findById({ _id: id });
      return user;
    } catch (error) {
      throw new Error(`Something Went Wrong ${error}`);
    }
  }
};
