const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const morgan = require("morgan");
const PORT = 8000
const characterURL = "http://characters:8001";
const filmsURL = "http://films:8002";
const planetsURL = "http://planets:8003"

const server=express();

server.use(morgan('dev'));

server.use(
    "/characters",
    createProxyMiddleware({
        target:characterURL,
        changeOrigin:true
    })
)

server.use(
    "/films",
    createProxyMiddleware({
        target:filmsURL,
        changeOrigin:true
    })
)

server.use(
    "/planets",
    createProxyMiddleware({
        target:planetsURL,
        changeOrigin:true
    })
)

server.listen(PORT,()=>{
    console.log(`Gateway listen at port ${PORT}`);
})