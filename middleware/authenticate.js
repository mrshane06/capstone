import { compare } from "bcrypt"
import { getUserIDDb } from "../model/userDb.js"
import joke from "jsonwebtoken"
import {config} from "dotenv"
config()

const checkUser = async (req,res,next)=>{
    const {userProfile,userPass} = req.body;
    let hashedPassword = (await getUserIDDb(userProfile)).userPass
    console.log(hashedPassword);
    let result = await compare(userPass,hashedPassword)
    if(result == true){
            let token = joke.sign({userProfile:userProfile},process.env.SECRET_KEY,{expiresIn:'1h'})
            console.log(token);
            // res.json({token})
            req.body.token = token
            next()
        } else{
            res.send("Password incorrect")
        }
}
const verifyToken =(req,res,next)=>{
    let {cookie} = req.headers
    //checks if the token exists first
    let token = cookie && cookie.split('=')[1]
    joke.verify(token, process.env.SECRET_KEY,(err,decoded) => {
        if(err){
            res.json({message:'Token has expired'})
            return
    }
    req.body.user = decoded.userProfile
        console.log(decoded);
    })
    console.log(token);
    next()
}
export {checkUser, verifyToken}