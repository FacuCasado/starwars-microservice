const { catchAsync } = require("../utils")

module.exports = {
    getFilms:catchAsync(require("./getFilms")),
    getIdFilm:catchAsync(require("./getIdFilm")),
    postFilms:catchAsync(require("./postFilms"))
}