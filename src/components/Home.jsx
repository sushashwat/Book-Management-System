import { useState } from "react";
import Booklist from "./BookList";
import { Books } from "../assets/utils/Mockdata";
import { useContext } from "react";
import userContext from "../assets/utils/userContext";


function Home() {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Books);
  function handleSearch() {
    const filterBooks = Books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredBooks(filterBooks);
  }

  const {setUserName} = useContext(userContext);
  return (
    <>
      <div className="search">
        <h2>Search Books</h2>
        <input type="text"
        onChange= {(e)=> setUserName (e.target.value)} />

        <input
          type="text"
          className="search-input"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      <Booklist booksData={filteredBooks} />
    </>
  );
}
export default Home;
