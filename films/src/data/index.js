const films = require("./films.json")

module.exports = {
    list:async ()=>{ return films },
    id:async (id)=>{return films.filter(film=>film.id===id)},
    create:async ()=>{ return "Post" }
}