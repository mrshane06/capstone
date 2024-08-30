import express from 'express'
import {getBooks , getBooksId , insertBooks, deleteBooks , updateBooks } from '../controller/bookController.js'

const booksRouter = express.Router()

booksRouter.get('/', getBooks)

booksRouter.get( '/:id', getBooksId)

booksRouter.post( '/:insert', insertBooks)

booksRouter.delete('/:id', deleteBooks)

booksRouter.patch('/:id', updateBooks)

export {booksRouter}