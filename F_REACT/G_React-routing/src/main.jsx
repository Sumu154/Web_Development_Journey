import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Header from './Components/Header.jsx'
import Users from './Components/Users.jsx'
import UserDetails from './Components/UserDetails.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home> </Home>,
    errorElement: <ErrorPage> </ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About> </About>
      },
      {
        path: '/Contact',
        element: <Contact> </Contact>
      },
      {
        path: '/users',
        id: 'usersLoader',
        loader: () =>  fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/users/:userId', //dynamic routing
        id: 'userLoader',
        // params ekta object -> jar ektai man userId -> : er por ja thakbe
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
