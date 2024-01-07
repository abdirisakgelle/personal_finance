import Expense from '../models/Expense.js'; // Adjust the path as per your project structure

// Create a new expense
export const createExpense = async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).send(expense);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Retrieve all expenses
export const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({});
        res.status(200).send(expenses);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Retrieve a single expense by ID
export const getExpenseById = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);

        if (!expense) {
            return res.status(404).send({ message: 'Expense not found' });
        }

        res.status(200).send(expense);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update an expense by ID
export const updateExpense = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!expense) {
            return res.status(404).send({ message: 'Expense not found' });
        }

        res.status(200).send(expense);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete an expense by ID
export const deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndDelete(req.params.id);

        if (!expense) {
            return res.status(404).send({ message: 'Expense not found' });
        }

        res.status(200).send({ message: 'Expense deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
};
