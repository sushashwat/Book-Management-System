import bookModel from "../model/books.model.js";
export function createBook(req,res){
    const{title,author,coverImage, description} = req.body

    const newBook = new bookModel ({
        title: title,
        author: author,
        coverImage: coverImage,
        description: description,
    });

    newBook.save().then(data => {
        if(!data){
            return res.status(400).json({
                message:"Something went wrong "
            })
        }
        res.send(data);
    })
}
