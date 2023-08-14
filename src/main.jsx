import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Register from './pages/Register';
import Login from './pages/Login';
import ProductView from './components/ProductView';
import Menu from './components/Menu';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ContextState from './context/ContextState';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/about",
    element: <AboutUs/>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/menu/:title",
    element: <ProductView/>,
  },
  {
    path: "/menu",
    element: <Menu/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ContextState>
      <RouterProvider router={router} />
    </ContextState>
  </React.StrictMode>,
)
