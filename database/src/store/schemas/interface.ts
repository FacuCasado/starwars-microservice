import { Document, Model } from "mongoose";


//! Character Interface

export interface ICharacter extends Document{
    _id?:string,
    name?:string,
    height?:number,
    mass?:number,
    hair_color?:string,
    skin_color?:string,
    eye_color?:string,
    birth_year?:string,
    gender?: string,
    homeworld?:string,
    films?:string[],
}

export interface ICharacterStatics extends Model<ICharacter>{
    list(): Promise<ICharacter[]>,
    get(_id:number): Promise<ICharacter[]>,
    insert(character:ICharacter): Promise<ICharacter[]>
}

//! Film Interface

