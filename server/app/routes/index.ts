import express from 'express';

const router = express.Router();

import projectRouter from './project';
import sourcesRouter from './source';
import usersRouter from './users';

router.use('/projects', projectRouter);

router.use('/sources', sourcesRouter);

router.use('/users', usersRouter);

module.exports = router;



