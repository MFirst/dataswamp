import { expect } from 'chai';
import UserService from './user.service';
import SQLExecutor from '../ds/sql.executor';

const sqlExec = new SQLExecutor('user-db-test');
const userService = new UserService(sqlExec);

describe('Test Create User', function () {
  it('createUser', async function () {
    const user = {
      email: 'test@agregarena.ro',
      password: '12345678'
    }

    await userService.createUser(user);
    const response = await sqlExec.getAll('users');
    console.log(response, 'Response')
  })

  // it('getUserById', function () {
  //   const id = 12345;
  //   expect(userService.getUserById(id)).to.equal(id);
  // })
});