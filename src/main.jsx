//libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//pages
import { ErrorPage, RootLayout, SavedJobs } from './pages';

//components

//css
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainContent } from './components';

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainContent />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'savedjobs',
        element: <SavedJobs />,
        errorElement: <ErrorPage />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
