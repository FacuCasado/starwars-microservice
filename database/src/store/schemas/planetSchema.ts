import { Schema } from "mongoose";
import { IPlanet } from "./interface";
import DatabaseError from "../../utils/errors";

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

planetSchema.statics.delete = async function(_id:string):Promise<IPlanet[]>{

    const store = require("../index")
    const {Character, Film}=store

    const planet = await this.findById(_id)

    if(!planet){
        throw new DatabaseError("Planet not found", 404)
    }else{
        await Character.updateMany(
            {_id:{$in:planet.residents}},
            {$set:{homeworld:null}}
        )
        await Film.updateMany(
            {_id:{$in:planet.films}},
            {$pull:{planets:_id}}
        )
        return await this.findByIdAndDelete(_id)
    }
}

export default planetSchema;