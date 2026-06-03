import Booklist from "./components/BookList";
import { Books, } from "./assets/utils/Mockdata";
import "./components/style.css";
import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Home from "./components/Home";
import BookDetails from "./components/BookDetails";
import userContext from "./assets/utils/userContext";

function App() {
  const [userName, setUserName] = useState("Shashwat Gupta ")
  return (
    <>
      <Header />
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Outlet />
      </userContext.Provider>

    </>

  );
}




export default App;
