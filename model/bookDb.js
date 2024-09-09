import { pool } from "../config/config.js";

const  getBooksDb = async () =>{
    let [data] = await pool.query('SELECT * FROM books')
    return data
}

const getBooksIDDb = async (id) =>{
    let [[data]] = await pool.query('SELECT * FROM books WHERE books_id = ?', [id])
    return data
}
 
const insertBooksDb = async( bookName , author , amount , quantity , description , category , bookURL) => {
    let [data] = await pool.query(`
        INSERT INTO books (bookName , author , amount , quantity , description , category , bookURL)
        VALUES(?,?,?,?,?,?,?)
        `, [bookName , author , amount , quantity , description , category , bookURL]
    )
    return data
}

const deleteBooksDb = async(id) => {
    await pool.query('DELETE FROM books WHERE books_id =?', [id])
}

const updateBooksDb = async (bookName , author , amount , quantity , description , category , bookURL,  id)=>{
    await pool.query('UPDATE books SET bookName = ? , author = ? , amount = ? , quantity = ? , description = ? , category = ? , bookURL = ? WHERE books_id = ?', [bookName , author , amount , quantity , description , category , bookURL, id])
}

const addToCartDb = async(books_id,user_id)=>{
    let [data] = await pool.query('INSERT INTO cart (books_id,user_id) VALUES (?,?)',[books_id,user_id])
}

export {getBooksDb , getBooksIDDb , insertBooksDb , deleteBooksDb , updateBooksDb , addToCartDb} 