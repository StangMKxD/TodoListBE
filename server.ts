import express, { Request, Response } from 'express';
import morgan from 'morgan';
import todoRouter from './routes/todo'
import cors from 'cors';

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use('/api', todoRouter)



app.listen(5000, ()=>console.log("Server is running on port 5000"))