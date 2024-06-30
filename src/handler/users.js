class UserHandler {
  constructor(userService) {
    this.userService = userService;

    // binding
    this.getAll = this.getAll.bind(this);
  }

  async getAll(req, res) {
    const serviceRes = await this.userService.getAll();

    res.status(serviceRes.statusCode).send({
      users: serviceRes.users,
    });
  }
}

module.exports = UserHandler;
