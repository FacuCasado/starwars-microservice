const planets = require("./planets.json")

module.exports = {
    list:async ()=>{ return planets },
    id:async (id)=>{return planets.filter(planet=>planet.id===id)},
    create:async ()=>{ return 'Post' }
}