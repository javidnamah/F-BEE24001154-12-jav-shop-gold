const { User } = require("../../models");

class UserRepository {
  constructor() {}
  async findAll() {
    const userList = await User.findAll({
      attributes: ["id", "name", "email", "password"],
    });

    return userList;
  }

  async insert(user) {
    const createdUser = await User.create({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    return createdUser;
  }

  async getByEmail(email) {
    const loginUser = await User.findOne({ where: { email } });
    return loginUser;
  }
}

module.exports = UserRepository;
