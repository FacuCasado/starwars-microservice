import mongoose from "mongoose";
import characterSchema from "./schemas/characterSchema";
import filmSchema from "./schemas/filmSchema";
import planetSchema from "./schemas/planetSchema";
import { ICharacter, ICharacterStatics, IFilm, IFilmStatics, IPlanet, IPlanetStatics } from "./schemas/interface";


export const Character=mongoose.model<ICharacter, ICharacterStatics>("Character", characterSchema);
export const Film=mongoose.model<IFilm, IFilmStatics>("Film", filmSchema);
export const Planet=mongoose.model<IPlanet, IPlanetStatics>("Planet", planetSchema);