import User from "../../models/user";

export default class UserController {
  constructor() {
    // user is being returned as undefined
    this.user = new User();
  }

  async getAllUsers(req, res) {
    try {
      // declared new instance of class inside method to test & response was returned
      const testUser = new User();
      const response = testUser.getUsers();

      res.status(200).json(response);
    } catch (err) {
      console.error(err);
    }
  }
}
