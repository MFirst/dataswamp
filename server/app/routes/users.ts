import express from 'express';

const router = express.Router();

import UsersController from '../controllers/users';

router.get('/', UsersController.getUserById);
router.post('/', UsersController.createUser);

export default router;



