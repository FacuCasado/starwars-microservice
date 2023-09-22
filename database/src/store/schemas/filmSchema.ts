import { Schema } from "mongoose";
import { IFilm } from "./interface";

const filmSchema:Schema = new Schema<IFilm>({
    _id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    opening_crawl: String,
    director:{
        type:String,
        required:true
    },
    producer: String,
    release_date: {
        type:Date,
        default: new Date()
    },
    characters: [{
        type: String,
        ref:"Character"
    }],
    planets: [{
        type: String,
        ref:"Planet"
    }]
})

filmSchema.statics.list = async function (): Promise<IFilm[]>{
    return await this.find()
    .populate("characters",["_id","name"])
    .populate("planets",["_id","name"])
}

filmSchema.statics.get = async function(_id:string):Promise<IFilm[]>{
    return await this.findById(_id)
    .populate("characters",["_id","name"])
    .populate("planets",["_id","name"])
}

filmSchema.statics.insert = async function(film:IFilm):Promise<IFilm[]>{
    return await this.create(film)
}

export default filmSchema;