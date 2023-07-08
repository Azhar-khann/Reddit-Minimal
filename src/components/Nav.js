import React from "react";
import Search from "./Search";

function Nav() {
    return (
        <div className ="Nav">
            <i className="reddit-icon fab fa-reddit"></i>
            <h2>Reddit Minimal</h2>
            <Search/>
        </div>
    )
}

export default Nav