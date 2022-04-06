import db from "../../lib/knex/index";
import "regenerator-runtime/runtime.js";

export default class User {
  constructor() {
    this.db = db;
  }

  retrieveUser() {
    return {
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      address: this.address,
    };
  }

  async addNewUser(firstname, lastname, age, address) {
    return this.db("users").insert({
      firstname,
      lastname,
      age,
      address,
    });
  }

  async getUsers() {
    return this.db.select().table("users");
  }

  async getUserById(id) {
    return this.db("users").where("id", id);
  }

  async updateUserById(id, updateObject) {
    return this.db("users").where("id", id).update(updateObject);
  }

  async removeUserById(id) {
    return this.db("users").where("id", id).del();
  }
}
