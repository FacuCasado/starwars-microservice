import mongoose, {Model} from "mongoose";
import characterSchema from "./schemas/characterSchema";
import filmSchema from "./schemas/filmSchema";
import planetSchema from "./schemas/planetSchema";
import { ICharacter, ICharacterStatics, IFilm, IFilmStatics, IPlanet, IPlanetStatics } from "./schemas/interface";

interface CharacterModel extends Model<ICharacter>, ICharacterStatics {}
interface FilmModel extends Model<IFilm>, IFilmStatics {}
interface PlanetModel extends Model<IPlanet>, IPlanetStatics {}

type Store = {
  Character: CharacterModel;
  Film: FilmModel;
  Planet: PlanetModel;
};

const store:Store={
    Character:mongoose.model<ICharacter, ICharacterStatics>("Character", characterSchema),
    Film:mongoose.model<IFilm, IFilmStatics>("Film", filmSchema),
    Planet:mongoose.model<IPlanet, IPlanetStatics>("Planet", planetSchema)
}

export default store