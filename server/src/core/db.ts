import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env.MONGODB_URI as string;

    if (!uri) {
      throw new Error("Missing MONGODB_URI in environment variables");
    }

    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error: any) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
