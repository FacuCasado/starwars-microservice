const Planet = require("../data")
const {response} = require("../utils")

module.exports = async(req,res)=>{
    const {id}=req.params
    const deleted = await Planet.delete(id)
    if(deleted){
        response(res,200,deleted)
    }else{
        throw new ClientError("Planet not found", 404)
    }
}