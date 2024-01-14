
import express from 'express';
const router = express.Router();

import { controller_app } from '../controllers/controller_app.js';


router.route('/').get(controller_app);


export default router;