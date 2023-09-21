import mongoose from 'mongoose';
import server from './src/server';
const {PORT, MONGO_URI}=process.env


mongoose.connect(MONGO_URI!)
.then(res=>console.log("Welcome to Mongo!"))
.catch(error=>console.log(`Mongo error:${error}`))

server.listen(PORT,()=>{
    console.log(`Database microservice listening at port ${PORT}`);
})