import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home/Home';
import Productss from './pages/Productss/Productss';
import Product from './pages/Product/Product';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';


const Layout =()=>{
  return(
    <div className='app'>
    <Navbar/>
    <Outlet/>
    <Footer/>
   </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products/:id",
        element: <Productss/>
      },
      {
        path: "/product/:id",
        element: <Product/>
      },
    ]
  },

])

function App() {
  return (
      <div>
      <RouterProvider router={router} />
      </div>
  )
}

export default App
