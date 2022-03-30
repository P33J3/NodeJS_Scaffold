import db from '../../lib/knex'

export default class User {
    constructor(firstname, lastname, age, address) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.address = address
        this.db = db
    }

    retrieveUser() {
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            age: this.age,
            address: this.address,
        }
    }

    async addNewUser() {
        return this.db('users').insert(this.retrieveUser())
    }

    async getUsers() {
        return this.db.select().table('users')
    }

    async getUserById(id) {
        return this.db('users').where('id', id)
    }

    async updateUserById(id, updateObject) {
        return this.db('users').where('id', id).update(updateObject)
    }

    async removeUserById(id) {
        return this.db('users').where('id', id).del()
    }
}
