import express from 'express';
import { vistaAgregar } from '../controller/deportesHandler.js';

const router = express.Router();

router.post('/', vistaAgregar )

export default router;