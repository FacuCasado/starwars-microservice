import { Request, Response, NextFunction } from "express"
import store from "../store";

export default (req:Request,res:Response,next:NextFunction)=>{
    const {model}=req.params;
    if(store.hasOwnProperty(model)) return next()
    else throw Error('Invalid model')
}