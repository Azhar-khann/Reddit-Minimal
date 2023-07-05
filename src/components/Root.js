import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
        <Nav/>
        <div className="main_container">
            <Sidebar/>
            <div className="main_content">
                <Outlet/>
            </div>
        </div>
   
    </>
  );
}

export default Root;