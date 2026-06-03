import Booklist from "./components/BookList";
import { Books, } from "./assets/utils/Mockdata";
import "./components/style.css";
import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Home from "./components/Home";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>

  );
}




export default App;
