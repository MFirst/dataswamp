
import Sqlite from '../datastore/sqlite';

const sqlite = new Sqlite('');
const uuidv4 = require('uuid/v4')

export class UserService {

  static createUser({ email, password }: any) {
    const uid = uuidv4();

    sqlite.insertValues('users', [])
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