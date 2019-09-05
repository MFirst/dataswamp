
import SQLExecutor from '../ds/sql.executor';

const uuidv4 = require('uuid/v4')

import { saltHashPassword } from '../utils/hashPass';

export default class UserService {
  constructor(dbName: string) {
    this.sqlExecutor = new SQLExecutor(dbName);
  }

  public sqlExecutor: SQLExecutor;

  async createUser({ email, password }: any) {
    const uid = uuidv4();

    const salt = saltHashPassword(password);

    return await this.sqlExecutor.insertValues('user', ['uid', 'email', 'password', 'salt'], [[uid, email, password, salt]])
  }

  static getUserByEmail(email: string) {

  }

  static getUserById(id: number) {

  }

  static deleteUser(id: number) {

  }

  static patchUser(id: number) {

  }

  static putUser(id: number) {

  }

}


// https://ciphertrick.com/salt-hash-passwords-using-nodejs-crypto/