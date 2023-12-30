// path to resolve the client

// 1) import express
const express = require('express')

// import controller
const loginController = require('../controller/loginController')
const productsController = require('../controller/productsController')


//import middleware
const jwtMiddleware = require('../middleware/jwtMiddleware')


// 2) create an object for the class
const router = new express.Router()


// 3) Path for resloving a request


// syntax - router.httprequest('path to resolve request',() => {how to resolve the request(inside controller)})
//     a) Register
router.post('/register', loginController.register)
//     b)login
router.post('/login', loginController.login)
//     c)add products
router.post('/product/add',jwtMiddleware,productsController.addProduct)
//     d)get home poducts
router.get('/product/get',jwtMiddleware,productsController.getProduct)
//     e)update products
router.put('/product/edit/:id',jwtMiddleware,productsController.editProduct)
//     f)delete products
router.delete('/product/remove/:id',jwtMiddleware,productsController.deleteProduct)




// 4) export router
module.exports = router