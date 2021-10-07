const UserService = require("../services/user.service");

module.exports = class UserController {
  static async registerUser(req, res, next) {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).send(user);
    } catch (error) {
      next(error);
    }
  }

  static async getUserById(req, res, next) {
    try {
      const user = await UserService.fetchUserById(req.params.id);
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }

  static async loginUser(req, res, next) {
    try {
      const user = await UserService.loginUser(req.body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
};
