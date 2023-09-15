const {catchAsync}=require("../utils")

module.exports = {
    getPlanets:catchAsync(require("./getPlantets")),
    getIdPlanet:catchAsync(require("./getIdPlanet")),
    postPlanets:catchAsync(require("./postPlanets"))
}