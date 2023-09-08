const { response } = require("../utils")
const Films = require("../data");

module.exports = async (req,res)=>{
    const newFilms = await Films.create();
    response(res, 201, newFilms)
}