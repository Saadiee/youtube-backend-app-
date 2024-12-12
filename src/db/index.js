import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {}) // It will return an object
    console.log(connectionInstance);
  } catch (error) {
    console.error("MONGO DB CONNECTION FAILED: ", error);
  }
}
export default connectDB;