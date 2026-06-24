import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import About from './components/About.jsx'
// import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Booklist from './components/BookList.jsx'
import BookDetails from './components/BookDetails.jsx'
import Demo from './components/Demo.jsx'
import { lazy } from 'react'
import Memo from './components/Memo.jsx'


const About = lazy(()=>import("./components/About.jsx"));
const Home = lazy(()=> import("./components/Home.jsx"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home/>
      },
      {
        path:"/book/:id",
        element:<BookDetails/>,

      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path:"/demo",
        element:<Demo/>
      },
      {
        path:"/memo",
        element:<Memo/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)


