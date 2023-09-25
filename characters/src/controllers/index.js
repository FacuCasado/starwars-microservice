const { catchAsync } = require("../utils")

module.exports={
    getCharacters:catchAsync(require("./getCharacters")),
    getIdCharacter:catchAsync(require("./getIdCharacter")),
    postCharacters:catchAsync(require("./postCharacters")),
    deleteCharacters:catchAsync(require("./deleteCharacter"))
}