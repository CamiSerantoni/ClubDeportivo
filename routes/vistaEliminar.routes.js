import express from 'express';
import { vistaEliminar } from '../controller/deportesHandler.js';

const router = express.Router();

router.get('/', vistaEliminar )

export default router;