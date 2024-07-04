import mongoose from 'mongoose';

let isConnected = false;
export const connectToDB=async()=>{
    mongoose.set('strictQuery',true);
    if(!process.env.MONGOODB_URL)return console.log('MONGOODB_URL is not defined');
    if(isConnected)return console.log('Already connected to DB');
 try{
      await mongoose.connect(process.env.MONGOODB_URL);
      isConnected=true;
      console.log('Connected to DB');
 }
 catch(error){
   console.log(error);
 }
}