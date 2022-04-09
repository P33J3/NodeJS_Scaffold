import User from "../../models/user";

export default class UserController {
  constructor() {
    // user is being returned as undefined
    //this.user = new User();
  }

  async getAllUsers(req, res) {
    try {
      // declared new instance of class inside method to test & response was returned
      const testUser = new User();
      // const response = this.users.getUsers();

      // res.status(200).json({ response });
      //used the call below becuase a promise was being returned but not dealt with
      testUser.getUsers().then((data) => {
        res.send(data);
      });
    } catch (err) {
      console.error(err);
    }
  }
}
