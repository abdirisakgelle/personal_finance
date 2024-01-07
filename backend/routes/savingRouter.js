import express from 'express';
import { createSaving, getSavings, getSavingById, updateSaving, deleteSaving } from '../controllers/savingController.js';

const router = express.Router();

router.post('/savings', createSaving);
router.get('/savings', getSavings);
router.get('/savings/:id', getSavingById);
router.put('/savings/:id', updateSaving);
router.delete('/savings/:id', deleteSaving);

export default router;
