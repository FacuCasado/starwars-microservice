const Character = require("../data");
const {response} = require("../utils")

module.exports = async (req,res)=>{
    const charData = req.body
    const newCharacter = await Character.create(charData) 
    response(res,201,newCharacter)
}