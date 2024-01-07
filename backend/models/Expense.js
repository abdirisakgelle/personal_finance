import mongoose from 'mongoose';
import validator from 'validator';

const expenseSchema = new mongoose.Schema({
  amount: { 
    type: Number, 
    required: true 
  },
  category: { 
    type: String, 
    required: true,
    validate: {
      validator: function(value) {
        // Check if the string is not just empty spaces and has a reasonable length
        return validator.trim(value).length > 0 && validator.isLength(value, { max: 100 });
      },
      message: 'Category cannot be empty and should be less than 100 characters'
    }
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  description: {
    type: String,
    validate: {
      validator: function(value) {
        // Check if the string, if provided, is not just empty spaces
        return validator.trim(value).length > 0;
      },
      message: 'Description cannot be just empty spaces'
    }
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }
}, {
  timestamps: true
});

const Expense = mongoose.model('Expense', expenseSchema);

export default Expense;
