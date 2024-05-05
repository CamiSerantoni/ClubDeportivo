import express from 'express';
import { vistaDeportes } from '../controller/deportesHandler.js';

const router = express.Router();

router.get('/', vistaDeportes )

export default router;