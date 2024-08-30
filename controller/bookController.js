import { getBooksDb , getBooksIDDb , insertBooksDb , deleteBooksDb , updateBooksDb } from "../model/bookDb.js";

const getBooks =  async(req,res)=> {
    res.json(await getBooksDb());
}

const getBooksId =  async(req,res)=> {
    console.log(req.params.id);
    res.json(await getBooksIDDb(req.params.id))
}

const insertBooks = async (req,res) => {
    let {bookName , author , amount , quantity , category , bookURL} = req.body
    await insertBooksDb(bookName , author , amount , quantity , category , bookURL)
    res.send('Data was inserted successfully')
}

const deleteBooks = async (req,res) => {
    let {id} = req.body
    await deleteBooksDb(req.params.id)
    res.send('Data has been deleted')
}

const updateBooks =  async(req,res)=>{
    let {bookName , author , amount , quantity , category , bookURL} = req.body
    let user = await getBooksDb(req.params.id)
    bookName?bookName = bookName:bookName = user.bookName;
    author?author = author:author = user.author;
    amount?amount = amount:amount = user.amount;
    quantity?quantity = quantity:quantity = user.quantity;
    category?category = category:category = user.category;
    bookURL?bookURL = bookURL:bookURL = user.bookURL;

    await updateBooksDb( bookName , author , amount , quantity , category , bookURL , req.params.id);
    res.send('Data has been updated successfully.')
}

export {getBooks , getBooksId , insertBooks, deleteBooks , updateBooks }