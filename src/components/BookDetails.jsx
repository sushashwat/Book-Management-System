import { useParams } from "react-router-dom";
import { Books } from "../assets/utils/Mockdata";

import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../assets/utils/cartSlice";

function BookDetails() {
    const id = useParams();
    const books = Books.filter(book => book.id == id.id)
    console.log(id);
    const dispatch = useDispatch();

    function handleAddBook(item){
        dispatch(addItem(item));
    }
    function handleRemoveItem(){
         dispatch(removeItem());
    }


    return (
        <>
            <h1>{`Book Details for book with id ${id.id}`}</h1>

            {books.map((book) => (
                <div key={book.id}>
                    <h2>{book.title}</h2>
                    <h2>{book.description}</h2>

                    <img
                        src={book.cover}
                        alt={book.title}
                        width="200"
                        height="200"
                    />

                    <h2>{book.price}</h2>
                    <button onClick={()=> handleAddBook(books)}>Add to Cart</button>
                    <button onClick={handleRemoveItem}> Remove Item from cart</button>
                </div>
            ))}
        </>
    )
}

export default BookDetails;
