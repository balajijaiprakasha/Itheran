import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./core/db";



// Load environment variables
dotenv.config();

connectDB()
  .then(() => {
    const app = express();

    // ------------------------------------------------------------------------
    // CORS Configuration
    // ------------------------------------------------------------------------
    const allowedOrigins = ["http://localhost:5173"];

    app.use(
      cors({
        origin: (origin, callback) => {
          if (!origin) return callback(null, true); // Allow same-origin or curl
          if (allowedOrigins.includes(origin)) return callback(null, true);
          return callback(new Error("Not allowed by CORS"));
        },
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
      })
    );

    app.set("trust proxy", 1);

    // ------------------------------------------------------------------------
    // Health Check
    // ------------------------------------------------------------------------
    app.get("/", (req: Request, res: Response) => {
      res.send({ message: "🚀 Server is running successfully..." });
    });

    // ------------------------------------------------------------------------
    // Start Server
    // ------------------------------------------------------------------------
    const PORT = process.env.PORT || 3030;

    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  });
