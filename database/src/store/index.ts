import mongoose from "mongoose";
import characterSchema from "./schemas/characterSchema";
import filmSchema from "./schemas/filmSchema";
import planetSchema from "./schemas/planetSchema";

const {MONGO_URI} = process.env

const conn = mongoose.createConnection(MONGO_URI);

export default {
    Character:conn.model("Character", characterSchema),
    Film:conn.model("Film", filmSchema),
    Planet:conn.model("Planet", planetSchema)
}