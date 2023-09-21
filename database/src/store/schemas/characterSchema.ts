import { Schema } from "mongoose";

const characterSchema = new Schema({
    _id:String,
    name:String,
    height:Number,
    mass: Number,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: {
        type: String,
        enum:["male", "female", "n/a"]
    },
    homeworld: {
        type: String,
        ref:"Planet"
    },
    films: [{
        type: String,
        ref: "Film"
    }]
})

export default characterSchema;