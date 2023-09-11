const server = require("./src/server")
const {PORT}=process.env

server.listen(PORT,()=>{
    console.log(`Films service listening on port ${PORT}`);
})