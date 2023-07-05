import React from "react";

function Sidebar() {

    function handleClick(){
        const remove_red_from_Hot = document.querySelector(".Sidebar-button.active")
        if (remove_red_from_Hot) {
            remove_red_from_Hot.classList.remove("active");
        }
        
    }

    return (
        <div className="Sidebar">
            <button className="Sidebar-button active" id="Hot_button">
                <h3>Hot</h3>
            </button>
           

            <button onClick={handleClick} className="Sidebar-button">
                 <h3>Popular</h3>
            </button>
            

            <button onClick={handleClick} className="Sidebar-button">
                <h3>New</h3>
            </button>
            
                
            <button onClick={handleClick} className="Sidebar-button">
                <h3>Top</h3>
            </button>
        </div>

    )
} 


export default Sidebar;