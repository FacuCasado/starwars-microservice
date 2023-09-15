const Character = require("../data")
const {response} = require("../utils")
const { ClientError } = require("../utils/errors")

module.exports= async (req,res)=>{
    const {id}=req.params
    const character=await Character.id(id)
    if(character.length){
        response(res,200,character)
    }else{
        throw new ClientError("Character not found", 404)
    }
}