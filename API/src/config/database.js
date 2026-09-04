import mongoose from "mongoose";
import config from "./config.js"

const connectDatabase = async ()=>{
  try{
    await mongoose.connect(config.mongodbUrl)
    console.log("Database connected successfully");
  } catch(err){
    console.log("Database connection Failed.");
    console.log(err);
    
  }
}

export default connectDatabase;