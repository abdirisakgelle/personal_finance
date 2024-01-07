import mongoose from 'mongoose';
import validator from 'validator';

const incomeSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  source: { 
    type: String, 
    required: true,
    validate: [validator.isAscii, 'Source should contain ASCII characters only'] // Example validator usage
  },
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

const Income = mongoose.model('Income', incomeSchema);

export default Income;
