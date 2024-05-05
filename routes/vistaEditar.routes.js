import express from 'express';
import { vistaEditar } from '../controller/deportesHandler.js';

const router = express.Router();

router.get('/', vistaEditar )

export default router;