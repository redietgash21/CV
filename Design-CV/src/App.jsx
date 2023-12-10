





import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
import './App.css'

import Designs from './components/Designs.jsx'

import MainInterface from "./components/MainInterface.jsx"

const router = createBrowserRouter([
  {
    path:"/",
    element:   <MainInterface/>,
  },
  {
    path:"/design",
    element: <Designs/>,
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
