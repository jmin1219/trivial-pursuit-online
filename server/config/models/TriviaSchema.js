import mongoose from "mongoose";

const triviaSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  question: {
    type: String,
    required: true,
    trim: true, // Removes extra spaces
  },
  answer: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: Object.keys(COLORS), // imported from COLORS.js
  },
});

export default mongoose.model("Trivia", triviaSchema);
