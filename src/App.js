import React from "react";
import Root from "./components/Root";
import Comments from "./components/Comments";
import Home from "./components/Home";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root/> }>

    <Route index element = {<Home/>}/>
    <Route path="/:postsCategory" element={<Home/>}/>
    <Route path="comments/:id" element={<Comments/>}/>

  </Route>
  
))

function App() {

  return (
    <>
      <RouterProvider router ={router}/>
    </>
  );
}

export default App;
