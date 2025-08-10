import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import path from 'path';
import cors from 'cors';


// import all routes
import userRoutes from './app/routes/user.Route';  // Note: add .js for ES modules or configure properly


dotenv.config();
const app: Application = express()

app.set('view engine', 'ejs');  // fix case: 'view engine' lowercase v
app.use(cors({
  origin: [
    'http://localhost:5173'
  ],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());



app.use('/api', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('hello....typescript diye new start??');
});

export default app;