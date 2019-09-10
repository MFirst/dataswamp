import { expect } from 'chai';
import UserService from './user.service';
import SQLExecutor from '../ds/sql.executor';

const userService = new UserService(new SQLExecutor('user-db-test'));

describe('Test Create User', function () {
  it('createUser', function () {
    const user = {
      email: 'test@agregarena.ro',
      password: '12345678'
    }
    expect(userService.createUser(user)).to.equal('a')
  })
});