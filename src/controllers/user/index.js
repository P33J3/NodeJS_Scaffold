import User from "../../models/user";

export default class UserController {
  constructor() {
    this.user = new User();
  }

  async getAllUsers(req, res) {
    //const response = this.user.getUsers();
    const response = this.user.addNewUser("Peter", "Lawrence", "34", "Lot 7");

    res.status(200).json({
      response,
    });
  }
}
