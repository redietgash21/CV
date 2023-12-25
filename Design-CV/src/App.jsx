





import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
import './App.css'

import Designs from './components/Designs.jsx'

import MainInterface from "./components/MainInterface.jsx"
import TheForm from "./components/TheForm.jsx"
import Login from "./components/Login.jsx"
import ErrorPage from "./components/ErrorPage.jsx"

const router = createBrowserRouter([
  {
    path:"/",
    element:   <MainInterface/>,
  },
  {
    path:"/design",
    element: <TheForm/>,
  },
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path:"*",
    element: <ErrorPage/>
  }
])

function App() {


  return (
    <>
    <RouterProvider router={router}/>
   
    </>
  )
}

export default App
