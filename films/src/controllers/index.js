const { catchAsync } = require("../utils")

module.exports = {
    getFilms:catchAsync(require("./getFilms")),
    postFilms:catchAsync(require("./postFilms"))
}