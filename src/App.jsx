import Booklist from "./components/BookList";
import { Books, } from "./assets/utils/Mockdata";
import "./components/style.css";
import React, { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Home from "./components/Home";
import BookDetails from "./components/BookDetails";
import userContext from "./assets/utils/userContext";
import {Provider} from "react-redux"
import appStore from "./assets/utils/appStore";

function App() {
  const [userName, setUserName] = useState("Shashwat Gupta ")
  return (
    <>
    <Provider store={appStore}>   
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </userContext.Provider>
      </Provider>
    </>

  );
}




export default App;
