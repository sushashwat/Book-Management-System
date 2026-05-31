import Booklist from "./components/BookList";
import { Books, } from "./assets/utils/Mockdata";
import "./components/style.css";
import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";


function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Books);
  function handleSearch() {
    console.log("search Text ", searchText);
    const filterBooks = Books.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()));
    console.log("filteredBooks", filteredBooks);
    setFilteredBooks(filterBooks);  
    

  }
  return (
    <>
    <Header/>
      <div className="search">
        <h2>Search Books</h2>
        <input type="text" className="search-input" onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <Booklist booksData={filteredBooks} />
      <Outlet/>
    </>

  );
}


export default App;
