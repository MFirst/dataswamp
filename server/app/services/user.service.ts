
import SQLExecutor from '../ds/sql.executor';
import { saltHashPassword } from '../utils/hashPass';

const tableName = 'users';
const uuidv4 = require('uuid/v4')

export default class UserService {
  constructor(private sqlExecutor: SQLExecutor) {
  }

  async createUser({ email, password }: any) {
    const uid = uuidv4();

    const salt = saltHashPassword(password);

    return await this.sqlExecutor.insertValues(tableName, ['uid', 'email', 'password', 'salt'], [[uid, email, password, salt]])
  }

  async getUserByEmail(email: string) {

  }

  async getUserById(id: number) {
    return await this.sqlExecutor.getById(tableName, id);
  }

  async deleteUser(id: number) {

  }

  async patchUser(id: number) {

  }

  async putUser(id: number) {

  }
}