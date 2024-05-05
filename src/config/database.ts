// src/config/database.ts
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MongoCon}`,{
    
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

export default connectDB;
