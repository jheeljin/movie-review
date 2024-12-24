import express from "express";
import Review from "../models/review.js";

const router = express.Router();

// Add a Review
router.post("/", async (req, res) => {
  try {
    const { movieId, user, rating, comment } = req.body;
    const newReview = new Review({ movieId, user, rating, comment });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ error: "Failed to save review" });
  }
});

// Get Reviews for a Movie
router.get("/:movieId", async (req, res) => {
  try {
    const { movieId } = req.params;
    console.log("Fetching reviews for movie ID:", movieId);  // Log the movieId
    const reviews = await Review.find({ movieId });
    console.log("Fetched reviews:", reviews);  // Log the reviews fetched
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});


export default router;
