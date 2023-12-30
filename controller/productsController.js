//import model

const products = require('../Models/productSchema') 


 exports.addProduct =async (req,res)=>{
      // logic
      console.log('inside productController request');
      //send from jwtmidddleware
      const adminid = req.payload
      console.log(adminid);
 

      //destructuring from reqbody
      const{category,name,brand,about,img1,img2,img3,img4,video,color,price}= req.body
  
 
       try{
          const existingProduct = await products.findOne({name})
               if(existingProduct){
                   res.status(406).json('Project already exist... upload new Project')
                }
               else{
               const newProduct =new products({
                category,
                name,
                brand,
                about,
                img1,
                img2,
                img3,
                img4,
                video,
                color,
                price,
                adminid
                })
                     await newProduct.save()
          
                    // response
                   res.status(200).json(newProduct)
 
               }
 
 
      }
 catch(err){
      res.status(401).json('Request FAILED due to',err)
 }
 }
 
 
//getProducts
exports.getProduct =  async (req,res)=>{

     
     const searchKey = req.query.search
     console.log(searchKey)
     
     const query = {
          category:{
               $regex:searchKey, $options:'i'
          }
     }

     try{
          const getproducts = await products.find(query)
          res.status(200).json(getproducts)
     }
     catch(err){
          res.status(401).json('Request FAILED due to',err)
     }
}

//edit product by id

exports.editProduct = async(req,res)=>{
     const {id} = req.params
      //send from jwtmidddleware
      const adminid = req.payload
      console.log(adminid);

     const{category,name,brand,about,img1,img2,img3,img4,video,color,price}= req.body



     try{

          const updateProduct = await products.findByIdAndUpdate({_id:id},{category,name,brand,about,img1,img2,img3,img4,video,color,price,adminid},{new:true})


          await updateProduct.save()

          res.status(200).json(updateProduct)

     }
     catch(err){
          res.status(401).json('Request FAILED due to',err)
     }

}

//delete Products by id
exports.deleteProduct = async(req,res)=>{

     const {id} = req.params

     try{
          const removeProduct = await products.findByIdAndDelete({_id:id})

          res.status(200).json(removeProduct)
     }

     catch(err){
          res.status(401).json('Request FAILED due to',err)
     }


}