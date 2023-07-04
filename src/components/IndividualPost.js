import React from "react";

function Post(props) {

    return (
        <div className="Post">
                <h4 id = "Username"> {props.userName}</h4>
                <h4 id = "date">{props.date}</h4>
                <h2> {props.title}</h2>
                <img src={props.image}/>
                <hr class="grey-line"></hr>
                <div>
                    <h5>{props.points} Points</h5>
                    <button class="comment-button">
                        <i class="fas fa-comment"></i> Comments
                    </button>
                </div>
        </div>
    )
}

export default Post