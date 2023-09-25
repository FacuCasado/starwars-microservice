const Film = require("../data")
const {response} = require("../utils")

module.exports = async(req,res)=>{
    const {id}=req.params
    const deleted = await Film.delete(id)
    if(deleted){
        response(res,200,deleted)
    }else{
        throw new ClientError("Film not found", 404)
    }
}