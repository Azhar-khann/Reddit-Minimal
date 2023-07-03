import React from "react";
function Home() {

    

    return (
        <div className="Home">

            <div className="Post">
                <h4> Azharuddin</h4>
                <h4 id = "date">12 hours ago</h4>
                <h2> This is where the title of the Post goes</h2>
                <img src="https://i.redd.it/q1e00p08ph9b1.png"/>
                <hr class="grey-line"></hr>
                <div>
                    <h5>8500 Points</h5>
                    <button class="comment-button">
                        <i class="fas fa-comment"></i> Comments
                    </button>
                </div>
            </div>

            <div className="Topics">
                <button class="Topics-button">
                    <h3>Hot</h3>
                </button>

                <button class="Topics-button">
                    <h3>Popular</h3>
                </button>

                <button class="Topics-button">
                    <h3>New</h3>
                 </button>
                
                <button class="Topics-button">
                    <h3>Top</h3>
                </button>
            </div>


        </div>
    )
}

export default Home