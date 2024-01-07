import express from 'express';
import connectDB from './config/db.js';
import chalk from 'chalk';
import incomeRoutes from './routes/incomeRouter.js';
import expenseRouter from './routes/expenseRouter.js';
import savingRouter from './routes/savingRouter.js'; 
import userRouter from './routes/userRouter.js'; // Update the path as necessary
import cors from 'cors';



const app = express();
app.use(cors());

app.use(express.json());
app.use('/api', incomeRoutes); 
app.use('/api', expenseRouter);
app.use('/api', savingRouter); 
app.use('/api', userRouter); // Prefixing with '/api' is optional


const port = 3000;
connectDB();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`${chalk.red.bold('Server')} is listening at http://localhost:${port}`);
});
