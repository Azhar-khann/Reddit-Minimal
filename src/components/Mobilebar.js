import React from "react";
import { Link, useLocation } from "react-router-dom";


function Mobilebar() {

    const location = useLocation();


    return (

        <div className="Mobilebar">
            <Link to= {`/`} id="Hot_button" className={`Mobilebar-button ${location.pathname === '/' ? 'active' : ''}`}>
                <h3>Home</h3>
            </Link>

            <Link to= {`/Popular`}  className={`Mobilebar-button ${location.pathname === '/Popular' ? 'active' : ''}`}>
                <h3>Popular</h3>
            </Link>

            <Link to= {`/New`}  className={`Mobilebar-button ${location.pathname === '/New' ? 'active' : ''}`}>
                <h3>New</h3>
            </Link>

            <Link to= {`/Top`}  className={`Mobilebar-button ${location.pathname === '/Top' ? 'active' : ''}`}>
                <h3>Top</h3>
            </Link> 
        </div> 


    )
} 


export default Mobilebar;