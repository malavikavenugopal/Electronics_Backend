// import model
const login = require('../Models/loginSchema')

//import jwt
//to ensure proper login and gave secret code to user
const jwt = require("jsonwebtoken")

// logic for register

exports.register = async (req, res)=>{
    // logic
    console.log('inside userAdmin-register logic');

    // destructuring data from the client request body (since json format is comverted into javascript object by the .json( method used in index.js file))

    const { email, password} = req.body

    try {// since email is the unique value we are checking that email is already parent in the database
    // for that we are using finOne method which return entire document when the condition is true else return null
    
        const existingadmin = await login.findOne({email})
        if(existingadmin){
            // so we are sending a response in the 400 series
            res.status(406).json('account already exist... please login')

        }else{
            // if finOne returns null, it mean the email or the user does not exist in the databse
           
            const newUser = new login({
                email,
                password,

            }

            // 2) add the object use save() method in mongoose

            await newUser.save()

            // response
            res.status(200).json(newUser)

            }
        }catch(err){
            res.status(401).json('register request FAILED due to',err)
        }


    
}



exports.login = async (req, res) => {
    console.log('inside adminController-login logic');
    const { email, password } = req.body
    try {
        const existingadmin = await login.findOne({ email, password })
        //{email:email,password:password}

        if (existingadmin) {

            //create token using sign method
            const token = jwt.sign({ admin: existingadmin._id }, "supersecretkey1234")
            res.status(200).json(
                {
                    existingadmin, token
                    //existingUser:existingUser
                }

            )
        }
        else {
            res.status(404).json('Invalid Email or Password')
        }
    } catch (err) {
        res.status(401).json('Login request FAILED due to', err)
    }

}

