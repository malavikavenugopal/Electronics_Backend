//  import mongoose
const mongoose = require('mongoose')

// create schema - need to use schema class in mongoose

const loginSchema = new mongoose.Schema({
    email : {
        type: String,
        require:true,
        
        
    },
    password : {
        type:String,
        require:true
    }
})

// create modal

const login = mongoose.model("login",loginSchema)
module.exports = login
// export modal


