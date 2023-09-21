import server from './src/server';
const {PORT}=process.env

server.listen(PORT,()=>{
    console.log(`Database microservice listening at port ${PORT}`);
})