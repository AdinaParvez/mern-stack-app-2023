import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Configure env
dotenv.config()
console.log(process.env.PORT);


// Database config
connectDB();

// ESM module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("prod"));
app.use(express.static(path.join(__dirname, "./client/build")));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Serve static files
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// PORT
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgCyan.white);
});


