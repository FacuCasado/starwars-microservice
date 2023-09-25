const Character = require("../data")
const {response} = require("../utils")

module.exports = async(req,res)=>{
    const {id}=req.params
    const deleted = await Character.delete(id)
    if(deleted){
        response(res,200,deleted)
    }else{
        throw new ClientError("Character not found", 404)
    }
}