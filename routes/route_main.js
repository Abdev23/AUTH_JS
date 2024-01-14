
import express from 'express';
const router = express.Router();

import { controller_main } from '../controllers/controller_main.js';


router.route('/home').get(controller_main);


export default router;