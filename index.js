import express from 'express'
import cors from 'cors'
import { userRouter } from './routes/userRouter.js'
import { booksRouter } from './routes/bookRouter.js'

let port = process.env.PORT || 7070
const app = express()

app.use(cors({
    origin: ['http://localhost:8080','https://capstone-the-book-nook.web.app'],
    credentials : true
}))
app.use(express.json())
app.use(express.static('public'))
 
app.use('/user', userRouter)

app.use('/books', booksRouter)

app.listen(port,()=>{
    console.log('http://localhost:'+ port);
})