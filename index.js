// 1) import dotenv
// loads .env file contents into process.env by default 

require('dotenv').config()

// 2) import express - to create server

const express = require('express')

// 3) import cors 

const cors = require('cors')

// import router
const router = require('./Routes/router')

// import mongoose

require('./DB/connections')

// 4) create server - creates an express application The express() function is a top-level function exported by the express module 

const plServer = express()

// 5) use of cors by server

plServer.use(cors())

// 6) Returns middleware that only parses json and convert it into javscript object

plServer.use(express.json())


// 7) use of router
plServer.use(router)


// 8)  multerMiddleware (to uploads files to uploads folder)
plServer.use('/uploads',express.static('./uploads'))


// 9) custome the port

const PORT = 4000 || process.env.PORT

// 10) run server

plServer.listen(PORT, ()=>{
    console.log(`server running successfully at port number ${PORT}`);
})

// 11) get http request to baseurl - http://localhost:4000/

plServer.get('/',(req,res)=>{
    res.send(`<h1 style="color:green">Product-listing server running successfully and waiting for client request</h1>`)
})

