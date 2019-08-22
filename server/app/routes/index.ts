import express from 'express';

const router = express.Router();

import projectRouter from './project';
import sourcesRouter from './source';

router.use('/projects', projectRouter);

router.use('/sources', sourcesRouter);

module.exports = router;



