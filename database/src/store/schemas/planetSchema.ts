import { Schema } from "mongoose";
import { IPlanet } from "./interface";

const planetSchema:Schema = new Schema<IPlanet>({
    _id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    rotation_period: {
        type:Number,
        default:0
    },
    orbital_period: {
        type:Number,
        default:0
    },
    diameter: Number,
    climate: {
        type:String,
        default:"n/a"
    },
    gravity: {
        type:String,
        default:"1 standar"
    },
    terrain: String,
    surface_water: {
        type:Number,
        default:0
    },
    residents:[{
        type:String,
        ref:"Character"
    }],
    films:[{
        type:String,
        ref:"Film"
    }]
})

planetSchema.statics.list = async function (): Promise<IPlanet[]>{
    return await this.find()
    .populate("residents",["_id","name"])
    .populate("films",["_id","title"])
}

planetSchema.statics.get = async function(_id:string):Promise<IPlanet[]>{
    return await this.findById(_id)
    .populate("residents",["_id","name"])
    .populate("films",["_id","title"])
}

planetSchema.statics.insert = async function(planet:IPlanet):Promise<IPlanet[]>{
    return await this.create(planet)
}

export default planetSchema;