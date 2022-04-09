import User from '../../models/user';

export default class UserController {
  async getAllUsers(req, res) {
    const response = await User.getUsers();

    res.status(200).json({
      response,
    });
  }
}
