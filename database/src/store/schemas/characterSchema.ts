import { Schema, Document, Model } from "mongoose";
import { ICharacter } from "./interface";

const characterSchema: Schema = new Schema<ICharacter>({
    _id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    height:{
        type:Number,
        default:0
    },
    mass: {
        type:Number,
        default:0
    },
    hair_color: {
        type:String,
        default:"n/a"
    },
    skin_color: {
        type:String,
        default:"n/a"
    },
    eye_color: {
        type:String,
        default:"n/a"
    },
    birth_year: {
        type:String,
        default:"n/a"
    },
    gender: {
        type: String,
        enum:["male", "female", "n/a", "hermaphrodite", "none"],
        default:"n/a"
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

characterSchema.statics.list = async function (): Promise<ICharacter[]>{
    return await this.find()
    .populate("homeworld",["_id","name"])
    .populate("films",["_id","title"])
}

characterSchema.statics.get = async function(_id:number):Promise<ICharacter[]>{
    return await this.findById(_id.toString())
    .populate("homeworld",["_id","name"])
    .populate("films",["_id","title"])
}

characterSchema.statics.insert = async function(character:ICharacter):Promise<ICharacter[]>{
    return await this.create(character)
}


export default characterSchema;