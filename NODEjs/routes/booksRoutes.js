import {createBook} from "../controller/books.Controller.js";

export function routes(app      ){
    app.post("/api/book", createBook);
}
