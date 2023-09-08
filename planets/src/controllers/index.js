const {catchAsync}=require("../utils")

module.exports = {
    getPlanets:catchAsync(require("./getPlantets")),
    postPlanets:catchAsync(require("./postPlanets"))
}