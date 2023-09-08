const {response} = require("../utils")
const Planets = require("../data/index")

module.exports = (req,res)=>{
    const newPlanet = Planets.create();
    response(res,201,newPlanet)
}