import express from "express";
import mongoose, { connect } from "mongoose";

const app = express();

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
    
})


app.post("/books",(req,res)=>{
    const{ id,
    title,
    author,
    genre,
    price,
    publishedYear,
    available,
    image } = req.body;

    const newBook = {
      id: id,
      title: title,
      author: author,
      genre: genre,
      price: price,
      publishedYear: publishedYear,
      available: available,
      image: image
    };

    books.push(newBook);
    res.send(books);

});