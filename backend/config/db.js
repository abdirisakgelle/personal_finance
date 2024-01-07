// db.js
import mongoose from 'mongoose';
import chalk from 'chalk';
import { dbURL } from './config.js';

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`${chalk.green.bold('Connected')} to the database: ${dbURL}`);
    } catch (e) {
        console.error(`${chalk.red.red('Error')} connecting to the database: ${e}`);
        process.exit(1);
    }
};

export default connectDB;
