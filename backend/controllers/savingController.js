import Saving from '../models/Saving.js'; // Adjust the path as per your project structure

// Create a new saving
export const createSaving = async (req, res) => {
    try {
        const saving = new Saving(req.body);
        await saving.save();
        res.status(201).send(saving);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Retrieve all savings
export const getSavings = async (req, res) => {
    try {
        const savings = await Saving.find({});
        res.status(200).send(savings);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Retrieve a single saving by ID
export const getSavingById = async (req, res) => {
    try {
        const saving = await Saving.findById(req.params.id);

        if (!saving) {
            return res.status(404).send({ message: 'Saving not found' });
        }

        res.status(200).send(saving);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a saving by ID
export const updateSaving = async (req, res) => {
    try {
        const saving = await Saving.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!saving) {
            return res.status(404).send({ message: 'Saving not found' });
        }

        res.status(200).send(saving);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a saving by ID
export const deleteSaving = async (req, res) => {
    try {
        const saving = await Saving.findByIdAndDelete(req.params.id);

        if (!saving) {
            return res.status(404).send({ message: 'Saving not found' });
        }

        res.status(200).send({ message: 'Saving deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
};
