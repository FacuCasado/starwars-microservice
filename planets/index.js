const server = require("./src/server");
const {PORT}=process.env

server.listen(PORT, ()=>{
    console.log(`Plantes service listening at port ${PORT}`);
})