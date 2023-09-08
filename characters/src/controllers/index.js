const { catchAsync } = require("../utils")

module.exports={
    getCharacters:catchAsync(require("./getCharacters")),
    postCharacters:catchAsync(require("./postCharacters"))
}