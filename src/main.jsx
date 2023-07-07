import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookService from './Components/Pages/BookService/BookService.jsx';
import PrivateRoute from './Components/Routes/PrivateRoute.jsx';
import Bookings from './Components/Pages/Bookings/Bookings.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },

  {
    path:"book/:id",
    element:<BookService></BookService>,
    loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)

  },
  {
    path:'/bookings',
    element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
  }

 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


