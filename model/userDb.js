import { pool } from "../config/config.js";

const  getUserDb = async () =>{
    let [data] = await pool.query('SELECT * FROM user')
    return data 
}

const getUserIDDb = async (id) =>{
    let [[data]] = await pool.query('SELECT * FROM user WHERE user_id = ?', [id])
    return data
}
 
const insertUserDb = async( firstName,lastName,age,gender,userRole,emailAdd,userPass,userProfile) => {
    let [data] = await pool.query(`
        INSERT INTO user (firstName,lastName,age,gender,userRole,emailAdd,userPass,userProfile)
        VALUES(?,?,?,?,?,?,?,?)
        `, [firstName,lastName,age,gender,userRole,emailAdd,userPass,userProfile]
    )
    return data
}

const deleteUserDb = async(id) => {
    await pool.query('DELETE FROM user WHERE user_id =?', [id])
}

const updateUserDb = async (firstName , lastName , age , gender , userRole , emailAdd , userPass , userProfile , id)=>{
    await pool.query('UPDATE user SET firstName = ? , lastName = ? , age = ? , gender = ? , userRole = ? , emailAdd = ? , userPass = ? , userProfile = ? WHERE user_id = ?', [firstName , lastName , age , gender , userRole , emailAdd , userPass , userProfile, id])
}

const getProfile = async (userProfile) =>{
    let [[data]] = await pool.query('SELECT * FROM user WHERE userProfile = ?', [userProfile])
    return data
}

export {getUserDb , getUserIDDb , insertUserDb , deleteUserDb , updateUserDb , getProfile } 