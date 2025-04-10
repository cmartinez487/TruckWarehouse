import express from 'express';
import { getAllDiaries, getDiaryById, createDiary } from '../controllers/diariesController';

const router = express.Router();

// Define las rutas
router.get('/', getAllDiaries);
router.get('/:id', getDiaryById);
router.post('/', createDiary);

export default router;