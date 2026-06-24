import express from "express";
import mongoose, { connect } from "mongoose";
import { routes } from "./routes/booksRoutes.js";
const app = express();

app.use(express.json());

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});


mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection;

db.on("open", ()=>{
    console.log("connection is successful");
});

db.on("error", ()=>{
    console.log("connection is not successful");
    
});

routes(app);



