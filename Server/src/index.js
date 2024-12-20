import express from 'express';
import cors from 'cors';
import connectDB from './connection.js';
import dotenv from 'dotenv';    

dotenv.config();
const app = express();

//to convert the data from the frontend into json format
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
