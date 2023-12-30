//import mongoose

const mongoose = require('mongoose')

//create schema 
const productSchema = new mongoose.Schema({
   
    category: {
        type: String,
        require:true
    },
    name: {
        type: String,
        require:true
    },
    brand: {
        type: String,
        require:true
    },
    about: {
        type: String,
        require:true
    },
    img1: {
        type: String,
        require:true
    },
    img2: {
        type: String,
        require:true
    },
    img3: {
        type: String,
        require:true
    },
    img4: {
        type: String,
        require:true
    },
    video: {
        type: String,
        require:true
    },
    color: {
        type: String,
        require:true
    },
    price: {
        type: String,
        require:true
    },
    adminid:{
        type: String,
        require:true
    }

})

//create model

const products = mongoose.model("product",productSchema)


//export modal

module.exports = products
