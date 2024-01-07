// incomeRoutes.js
import express from 'express';
import { createIncome, getIncomes, updateIncome, deleteIncome } from '../controllers/incomeController.js';

const router = express.Router();

router.post('/incomes', createIncome);
router.get('/incomes', getIncomes);
router.put('/incomes/:id', updateIncome);
router.delete('/incomes/:id', deleteIncome);

export default router;
