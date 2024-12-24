import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import movieRoutes from './routes/movies.js';
import reviewRoutes from "./routes/reviews.js";
import authRoutes from './routes/auth.js';
// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route (for debugging purposes)
app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/movies", movieRoutes);
app.use("/api/reviews", reviewRoutes);
console.log("MONGO_URI:", process.env.MONGO_URI);
app.use('/api/auth', authRoutes);
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
