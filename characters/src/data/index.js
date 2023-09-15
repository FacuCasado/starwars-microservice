const characters = require("./characters.json");

module.exports = {
    list:async ()=>{ return characters },
    create:async()=>{ throw Error ("Hubo un error creando el personaje")},
    id:async (id)=>{return characters.filter(char=>char.id===id)}
}