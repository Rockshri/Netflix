import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Errorpage from './Errorpage';

const Body = () => {
     


 



    const appRouter = createBrowserRouter([{
      path: "/",
      element:<Login/>,
    },
    {
      path: "/browse",
      element:<Browse/>,
    },
    {
      path: "*",
      element:<Errorpage/>,
    }
  ])


  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
