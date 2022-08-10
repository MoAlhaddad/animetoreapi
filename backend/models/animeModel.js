const mongoose = require("mongoose");

const animeSchema = mongoose.Schema(
  {
    ranking: { type: Number, required: true },
    episodes: { type: Number, required: true },
    title: { type: String, required: true },
    // thumb: {img:  required: true },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = AnimeSpot = mongoose.model("Anime", animeSchema);
