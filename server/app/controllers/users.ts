import { Request, Response, NextFunction } from 'express';
import UserService from '../services/user.service';
import SQLExecutor from '../ds/sql.executor';
const userService = new UserService(new SQLExecutor('user-db'));

class UsersController {

  static getUserById = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body;
    userService.getUserById(id);
  }

  static createUser = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    userService.createUser({ email, password });
  }
}


export default UsersController;