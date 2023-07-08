import React from "react";
import Comments from "./Comments";

import { Link } from "react-router-dom";

function Post(props) {

    return (
        <div className="Post">
                <h4 id = "Username"> {props.userName}</h4>
                <h4 id = "date">{props.date}</h4>
                <h2> {props.title}</h2>
                {props.image !== "" && <img src={props.image} />}
                {props.video !== "" && <video src={props.video} controls />} 
                <div className="section">
                    <hr className="grey-line"></hr>
                    <h5>{props.points} Points</h5>
                    <Link to={`/comments/${props.id}`} className="comment-button">
                        <i className="fas fa-comment"></i> Comments
                    </Link>
                </div>
        </div>
    )
}

export default Post