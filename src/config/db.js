import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/kodex")
      console.log("Connected to MongoDB");
      
    } catch (error) {
        console.error("Error while connecting to Mongose",error)
    }
}

export default connectDB;