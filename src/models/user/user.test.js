import { expect } from 'chai';
import { async } from 'regenerator-runtime';
import User from '.';
import { populateUsers, purgeUsersTable } from '../../helpers/tests';

describe('User Model', () => {
    beforeAll(async () => {
        await populateUsers()
    })
    afterAll(async () => {
        await purgeUsersTable()
    })
  it('Should fetch all users', async () => {
    const users = await User.getUsers();
    expect(users.length).to.eq(10);
  });
});
