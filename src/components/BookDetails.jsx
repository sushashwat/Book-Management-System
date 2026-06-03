import { useParams } from "react-router-dom";
import { Books } from "../assets/utils/Mockdata";
function BookDetails() {
    const id = useParams();
    const books = Books.filter(book => book.id == id.id)
    console.log(id);


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
                </div>
            ))}
        </>
    )
}

export default BookDetails;
