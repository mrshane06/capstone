import { getUserDb , getUserIDDb , insertUserDb , deleteUserDb , updateUserDb } from "../model/userDb.js";
import { hash } from "bcrypt";

const getUser =  async(req,res)=> {
    res.json(await getUserDb());
}

const getUserId =   async(req,res)=> {
    console.log(req.params.id);
    res.json(await getUserIDDb(req.params.id))
}

const insertUser = async (req,res) => {
    let {firstName,lastName,age,gender,userRole,emailAdd,userPass,userProfile} = req.body
    let hashedP = await hash(userPass, 10)
    await insertUserDb(firstName,lastName,age,gender,userRole,emailAdd,hashedP,userProfile)
    res.send('Data was inserted successfully')
}

const deleteUser = async (req,res) => {
    let {id} = req.body
    await deleteUserDb(req.params.id)
    res.send('Data has been deleted')
}

const updateUser =  async(req,res)=>{
    let {firstName,lastName,age,gender,userRole,emailAdd,userPass,userProfile} = req.body
    let user = await getUserDb(req.params.id)
    firstName?firstName = firstName:firstName = user.firstName;
    lastName?lastName = lastName:lastName = user.lastName;
    age?age = age:age = user.age;
    gender?gender = gender:gender = user.gender;
    userRole?userRole = userRole:userRole = user.userRole;
    emailAdd?emailAdd = emailAdd:emailAdd = user.emailAdd;
    userPass?userPass = userPass:userPass = user.userPass;
    userProfile?userProfile = userProfile:userProfile = user.userProfile;

    await updateUserDb( firstName , lastName , age , gender , userRole , emailAdd , userPass , userProfile , req.params.id);
    res.send('Data has been updated successfully.')
}

const loginUser = (req,res)=>{
    res.json({message:"you have signed in successfully",token:req.body.token})
}

export {getUser , getUserId , insertUser, deleteUser , updateUser , loginUser }