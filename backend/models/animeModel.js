const mongoose = require("mongoose");

const animeSchema = mongoose.Schema(
    {
        ranking: {type: Number, required: true },
        episodes: {type: Number, required: true},
        title: {type: String, required: true},
        thumb: {type: Image},
        status: {type: String},


    },
    {
        timestamps: true, 
    }
);

module.exports = mongoose.model("Anime", animeSchema);

