import { Schema } from "mongoose";

const filmSchema = new Schema({
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [{
        type: String,
        ref:"Character"
    }],
    planets: [{
        type: String,
        ref:"Planet"
    }]
})

export default filmSchema;