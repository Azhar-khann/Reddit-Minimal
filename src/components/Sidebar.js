import React from "react";
import { Link, useLocation } from "react-router-dom";


function Sidebar() {

    const location = useLocation();


    return (

        <div className="Sidebar">
            <Link to= {`/`} id="Hot_button" className={`Sidebar-button ${location.pathname === '/' ? 'active' : ''}`}>
                <h3>Home</h3>
            </Link>

            <Link to= {`/Popular`}  className={`Sidebar-button ${location.pathname === '/Popular' ? 'active' : ''}`}>
                <h3>Popular</h3>
            </Link>

            <Link to= {`/New`} id="Sidebar_button_new"  className={`Sidebar-button ${location.pathname === '/New' ? 'active' : ''}`}>
                <h3>New</h3>
            </Link>

            <Link to= {`/Top`}  className={`Sidebar-button ${location.pathname === '/Top' ? 'active' : ''}`}>
                <h3>Top</h3>
            </Link> 
        </div> 


    )
} 


export default Sidebar;