import { Response, Request } from "express"
import store from "../store";
import utils from "../utils";

const {response}=utils

export default async(req:Request,res:Response)=>{
    const {model,id}=req.params;
    const data = await store[model as keyof typeof store].get(id)
    response(res,200,data)
}