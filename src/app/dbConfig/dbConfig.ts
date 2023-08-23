import mongoose from "mongoose";

import React from 'react'

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!)
    const connection = mongoose.connection;

    connection.on("connected", () => {
        console.log("Mongo db connected...");
        
    })

    connection.on("error", (err)=>{
        console.log("MongoDb connection error. Please make sure MongoDb is running. " + err);
        process.exit();
        
    })



  } catch (error) {
    console.error("Something goes wrong!" + error);
    
  }
  
}
