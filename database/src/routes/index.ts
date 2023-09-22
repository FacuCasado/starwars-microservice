import {Router, Request, Response} from 'express';
import store from '../store';

const router=Router()


router.get("/:model",async(req:Request,res:Response)=>{
    const {model}=req.params;
    const response= await store[model as keyof typeof store].list()
    res.status(200).json(response)
})

router.get("/:model/:id",async(req:Request,res:Response)=>{
    const {model,id}=req.params;
    const response = await store[model as keyof typeof store].get(id)
    res.status(200).json(response)
})

router.post("/:model",async (req:Request, res:Response)=>{
    const {model}=req.params;
    const newEntry=req.body;

    const response = await store[model as keyof typeof store].insert(newEntry)

    res.status(201).json(response)

})


export default router