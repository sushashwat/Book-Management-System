import { Link } from "react-router-dom";
import Book from "./Book";
import "./style.css";
import { useEffect } from "react";
import useFetch from "../assets/utils/useFetch";


function Booklist(props) {

  return (
    
    <div className="bookList">

      {props.booksData.map((book) => (

        <Link
          to={`/book/${book.id}`}
          key={book.id}
        >
          <Book bookDetails={book} />
        </Link>

      ))}

    </div>
  );
}

export default Booklist; 