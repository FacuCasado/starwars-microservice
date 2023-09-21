import { Schema } from "mongoose";

const planetSchema = new Schema({
    _id: String,
    name:String,
    rotation_period: Number,
    orbital_period: Number,
    diameter: Number,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: Number,
    residents:[{
        type:String,
        ref:"Character"
    }],
    films:[{
        type:String,
        ref:"Film"
    }]
})

export default planetSchema;