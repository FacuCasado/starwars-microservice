const { response } = require("../utils")
const Films = require("../data");

module.exports = async (req,res)=>{
    const filmData = req.body
    const newFilms = await Films.create(filmData);
    response(res, 201, newFilms)
}