import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  movieId: { type: String, required: true },
  user: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Review", reviewSchema);
