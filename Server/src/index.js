import express from 'express';
import cors from 'cors';
import connectDB from './connection.js';
import dotenv from 'dotenv';    

import { userRouter } from './routes/routeuser.js';
dotenv.config();
console.log('MongoDB URI:', process.env.MONGODB_URI ? 'URI is set' : 'URI is undefined');
const app = express();

//to convert the data from the frontend into json format
app.use(express.json());
app.use(cors());

app.use('/auth', userRouter); 
// Connect to MongoDB
connectDB();


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
