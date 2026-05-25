import Book from "./Book";
import "./style.css";



function Booklist(props){
    return(
        <div className="bookList">
          {props.booksData.map((book) => (
            <Book 
              key={book.id}
              bookDetails={book}
            />
          ))}
        </div>
    )
}

export default Booklist; 