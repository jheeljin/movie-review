import express from "express";
import axios from "axios";

const router = express.Router();
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Fetch Trending Movies
// Fetch Trending Movies
router.get("/trending", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}`
    );
    console.log("TMDB API Response:", response.data); // Log the response
    res.json(response.data.results);
  } catch (error) {
    console.error("Error fetching trending movies:", error); // Log the error
    res.status(500).json({ error: "Failed to fetch trending movies" });
  }
});


// Fetch Movie Details
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie details" });
  }
});

export default router;
