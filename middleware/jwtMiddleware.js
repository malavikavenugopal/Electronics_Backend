

//importing jwt
const jwt=require("jsonwebtoken")

//router specific middlewear
const jwtmiddleware=(req,res,next)=>{
    console.log("inside jwt middleware")
    //logic
    //verify token
    //1)first access token
    const token = req.headers['authorization'].split(' ')[1]
    console.log(token)

    

    try{
        //verify by using verify() method
        //first argument as the token and the second argument as secret key from  loginController
        const jwtResponse = jwt.verify(token,"supersecretkey1234")
        console.log(jwtResponse)


        
        req.payload= jwtResponse.admin 

       next()

    }catch(err){
        res.status(401).json("Autherization failed...please login")
    }
  //next() here we place next control returns to controller 
}
module.exports=jwtmiddleware