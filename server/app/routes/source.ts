import express from 'express';

const router = express.Router();

import SourcesController from '../controllers/sources';

router.get('/', SourcesController.getSources);

export default router;



