import express from 'express';

const router = express.Router();

import ProjectsController from '../controllers/projects';

router.get('/', ProjectsController.getProjects)

export default router;



