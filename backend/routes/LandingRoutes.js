import { Router } from 'express';

import * as Landing from '../controllers/landingController.js';

const router = Router();

router.route('/').get(Landing.getIndex);

router.route('/about').get(Landing.getAbout);

router.route('/contact').get(Landing.getContact).post(Landing.postContact);

export default router;
