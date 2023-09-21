import { Document, Model } from "mongoose";


//! Character Interface

export interface ICharacter extends Document{
    _id:string,
    name:string,
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

export interface IFilm extends Document{
    _id:string,
    title:string,
    opening_crawl?:string,
    director:string,
    producer?:string,
    release_date?:Date,
    characters?:string[]
    planets?:string[],
}

export interface IFilmStatics extends Model<IFilm>{
    list(): Promise<IFilm[]>,
    get(_id:number): Promise<IFilm[]>,
    insert(film:IFilm): Promise<IFilm[]>
}

//! Planet Interface

export interface IPlanet extends Document{
    _id: string,
    name:string,
    rotation_period?: number,
    orbital_period?: number,
    diameter?: number,
    climate?: string,
    gravity?: string,
    terrain?: string,
    surface_water?: number,
    residents?:string[],
    films?:string[]
}

export interface IPlanetStatics extends Model<IPlanet>{
    list(): Promise<IPlanet[]>,
    get(_id:number): Promise<IPlanet[]>,
    insert(planet:IPlanet): Promise<IPlanet[]>
}
