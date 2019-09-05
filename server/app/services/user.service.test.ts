import { expect } from 'chai';
import UserService from './user.service';

const userService = new UserService('userTest')

describe('Test Create User', function () {
  it('createUser', function () {
    const user = {
      email: 'test@agregarena.ro',
      password: '12345678'
    }
    expect(userService.createUser(user)).to.equal('a')
  })
});