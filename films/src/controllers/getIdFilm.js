const Films = require("../data");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async(req,res)=>{
    const {id}=req.params
    const film=await Films.id(id)

    if(film){
        response(res,200,film)
    }else{
        throw new ClientError("Film not found",404)
    }
}