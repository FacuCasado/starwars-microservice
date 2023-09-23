import { Response, Request } from "express"
import store from "../store";
import utils from "../utils";

const {response}=utils

export default async (req:Request, res:Response)=>{
    const {model}=req.params;
    const newEntry=req.body;

    const data = await store[model as keyof typeof store].insert(newEntry)

    response(res,201,data)

}