require('dotenv').config();
import express, { Application, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import router from './routes/index';

type Error = {
    message: string;
    statusCode?: number;
};


const server:Application = express();

server.use(express.json());
server.use(morgan('dev'))

server.use('/',router)

server.use('*',(req:Request,res:Response)=>{
    res.status(404).send('Not Found')
})

server.use((err:Error,req:Request,res:Response,next:NextFunction):void=>{
    res.status(err.statusCode || 500).json({
        error:true,
        message:err.message
    })
})

export default server;