import User from '../../models/user';

export default class UserController {
  constructor() {
    this.user = new User();
  }

  async getAllUsers(req, res) {
    const response = this.user.getUsers();

    res.status(200).json({
      response,
    });
  }
}
