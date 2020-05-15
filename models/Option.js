const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OptionSchema = new Schema ({
    
        budget: Number,
        genres: Array,
        homepage: String,
        id: Number,
        keywords: Array,
        original_language: String,
        original_title: String,
        overview: String,
        popularity: String,
        production_companies: Array,
        production_countries: Array,
        release_date: String,
        revenue: Number,
        runtime: Number,
        spoken_languages: Array,
        status: String,
        tagline: String,
        title: String,
        vote_average: String,
        vote_count: Number
})

const Option = mongoose.model("Option", OptionSchema);

module.exports = Option;
