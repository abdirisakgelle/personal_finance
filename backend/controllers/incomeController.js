import Income from '../models/Income.js';

export const createIncome = async (req, res) => {
    try {
        const income = new Income(req.body);
        await income.save();
        res.status(201).send(income);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getIncomes = async (req, res) => {
    try {
        const incomes = await Income.find({});
        res.status(200).send(incomes);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateIncome = async (req, res) => {
    try {
        const income = await Income.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!income) {
            return res.status(404).send({ message: 'Income not found' });
        }

        res.status(200).send(income);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteIncome = async (req, res) => {
    try {
        const income = await Income.findByIdAndDelete(req.params.id);

        if (!income) {
            return res.status(404).send({ message: 'Income not found' });
        }

        res.status(200).send({ message: 'Income deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
};
