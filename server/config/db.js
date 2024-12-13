import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:W0VdX57z8Enq9zgi@backenddb.0l174.mongodb.net/"
    );
    console.log(`MongoDB Connected Successfuly.`);
  } catch (err) {
    console.log(`MongoDB Connection Error: ${err.message}`);
    process.exit(1);
  }
}
