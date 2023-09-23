import { Request, Response, NextFunction } from "express"
import store from "../store";
import utils from "../utils";

const {DatabaseError}=utils

export default (req:Request,res:Response,next:NextFunction)=>{
    const {model}=req.params;
    if(store.hasOwnProperty(model)) return next()
    else throw new DatabaseError('Invalid model', 401)
}