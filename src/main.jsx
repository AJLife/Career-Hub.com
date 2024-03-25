import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Jobs from './components/Jobs/Jobs';
import Applied from './components/Applied Jobs/Applied';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/Job Details/JobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/', 
        element:<Home></Home>

      },
      {
        path:'/jobs',
        element:<Jobs></Jobs>
      },
      {
        path: '/applied',
        element: <Applied></Applied>,
        loader: () =>fetch('/jobs.json')
        
      },
      // {
      //   path: '/statistics',
      //   element: <Statistics></Statistics>
      // },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>, 
        loader: () => fetch('/jobs.json')
      }
    ]
  },
]);







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
