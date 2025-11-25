import express, { type Request, type Response } from "express";
import cors, { type CorsOptions } from "cors";
import dotenv from "dotenv";
import { connectDB } from "./core/db.js";

dotenv.config();

const app = express();

// 1. Middleware
const allowedOrigins: string[] = process.env.ORIGINS
  ? JSON.parse(process.env.ORIGINS)
  : [];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(
      new Error(`CORS policy violation: Origin '${origin}' not allowed.`)
    );
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.set("trust proxy", 1); // Required for Vercel
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Connect to Database
// (In serverless, we connect lazily or globally outside the handler to reuse connections)
connectDB();

// 3. Routes
app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "🚀 Server is running successfully...",
    status: "OK",
    environment: process.env.NODE_ENV || "development",
  });
});

// 4. Start Server (LOCAL ONLY)
// We verify if we are in production. If NOT, we listen manually.
// Vercel will NOT run this block.
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`✅ Local Server is running on port ${PORT}`);
  });
}

// 5. EXPORT THE APP (REQUIRED FOR VERCEL)
// This is what makes it work on Vercel!
export default app;
