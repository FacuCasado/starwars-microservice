const Planets = require("../data/index")
const {response} = require("../utils")
const {ClientError} = require("../utils/errors")

module.exports=async(req,res)=>{
    const {id}=req.params;
    const planet=await Planets.id(id)

    if(planet){
        response(res,200,planet)
    }else{
        throw new ClientError("Planet not found", 404)
    }
}