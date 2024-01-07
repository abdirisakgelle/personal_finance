import mongoose from 'mongoose';
import validator from 'validator';

const savingSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  purpose: {
    type: String,
    validate: {
      validator: function(value) {
        // Check if the string is not just empty spaces
        return value.trim().length > 0;
      },
      message: props => `${props.value} is not a valid purpose`
    }
  },
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true // This should be part of the options object, not the schema fields
});

const Saving = mongoose.model('Saving', savingSchema);

export default Saving;
