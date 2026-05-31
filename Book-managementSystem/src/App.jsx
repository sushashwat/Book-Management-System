import Booklist from "./components/BookList";
import { Books, } from "./assets/utils/Mockdata";
import "./components/style.css";
import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Home from "./components/Home";

function App(){return (
    <>
    <Header/>
      
      {/* <Booklist booksData={filteredBooks} /> */}
      <Outlet/>
    </>

  );
}
  



export default App;
