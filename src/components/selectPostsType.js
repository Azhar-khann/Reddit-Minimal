import React from "react";

function PostsType() {

    function handleClick(){
        const remove_red_from_Hot = document.querySelector(".Topics-button.active")
        if (remove_red_from_Hot) {
            remove_red_from_Hot.classList.remove("active");
        }
        
    }

    return (
        <div className="Topics">
            <button className="Topics-button active">
                <h3>Hot</h3>
            </button>
           

            <button onClick={handleClick} className="Topics-button">
                 <h3>Popular</h3>
            </button>
            

            <button onClick={handleClick} className="Topics-button">
                <h3>New</h3>
            </button>
            
                
            <button onClick={handleClick} className="Topics-button">
                <h3>Top</h3>
            </button>
        </div>

    )
} 


export default PostsType;