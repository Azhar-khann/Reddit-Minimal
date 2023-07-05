import React from "react";
import { useParams} from "react-router-dom";
import { postsList } from "./Home";

function Comments(){
    const {id} = useParams();
    const post = postsList[id]
    const {userName, date,title,image,points} = post

    return (
    
        <div className="Comments">
            <div className="Post">
                <h4 id = "Username"> {userName}</h4>
                <h4 id = "date">{date}</h4>
                <h2> {title}</h2>
                <img src={image}/>
                <hr className="grey-line"></hr>
                <div>
                    <h5>{points} Points</h5>
                </div>
            </div>
        </div> 
    )
}

export default Comments;