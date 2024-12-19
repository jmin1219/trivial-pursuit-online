import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected Successfuly.`);
  } catch (err) {
    console.log(`MongoDB Connection Error: ${err.message}`);
    process.exit(1);
  }
}
