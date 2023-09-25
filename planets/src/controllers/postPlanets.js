const {response} = require("../utils")
const Planets = require("../data/index")

module.exports = (req,res)=>{
    const planetData = req.body;
    const newPlanet = Planets.create(planetData);
    response(res,201,newPlanet)
}