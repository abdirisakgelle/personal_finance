import User from '../models/User.js';
import bcrypt from 'bcryptjs';

// Create a new user
export const createUser = async (req, res) => {
    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(req.body.password, 8);
        const user = new User({ ...req.body, password: hashedPassword });
        await user.save();
        res.status(201).send({ user: user._id });
    } catch (error) {
        res.status(400).send(error);
    }
};

// Retrieve all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Retrieve a single user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a user by ID
export const updateUser = async (req, res) => {
    const updates = req.body;
    try {
        if(updates.password){
            updates.password = await bcrypt.hash(updates.password, 8);
        }
        const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
};
