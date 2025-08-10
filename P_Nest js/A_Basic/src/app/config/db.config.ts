/* eslint-disable no-console */
import mongoose from 'mongoose';
import { envVars } from './env.config';


const uri = envVars.DB_URL;
console.log(uri)

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB Atlas');
  } 
  catch (e) {
    console.error('Failed to connect to MongoDB Atlas', e);
  }
};