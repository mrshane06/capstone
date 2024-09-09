import express from 'express'
import {getBooks , getBooksId , insertBooks, deleteBooks , updateBooks , addToCart} from '../controller/bookController.js'
import { verifyToken } from '../middleware/authenticate.js'

const booksRouter = express.Router()

booksRouter.get('/', getBooks)

booksRouter.post('/addToCart', verifyToken, addToCart )


booksRouter.get( '/:id', getBooksId)
 
booksRouter.post( '/:insert', insertBooks)

booksRouter.delete('/:id', deleteBooks)

booksRouter.patch('/:id', updateBooks)

export {booksRouter}