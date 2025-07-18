import express, { Request, Response } from 'express';
import morgan from 'morgan';
import todoRouter from './routes/todo';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Backend is up and running on Render!");
});
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/api', todoRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
