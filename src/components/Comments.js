import React from "react";
import { useParams} from "react-router-dom";
import { postsList } from "./Home";
import Post from "./IndividualPost";

function Comments(){
    const {id} = useParams();
    const post = postsList[id]
    const {userName, date,title,image,points,Comments} = post
    console.log(Comments)

    return (
        <div className="Comments">

            <div className="Post">
                <h4 id = "Username"> {userName}</h4>
                <h4 id = "date">{date}</h4>
                <h2> {title}</h2>
                <img src={image}/>
                <div className="section">
                    <hr className="grey-line"></hr>
                    {Comments.map(comment => (
                    <div>
                        <img className="image" src={comment.image}/> 
                        <span className="userName"> {comment.userName}</span>
                        <span className="comment"> {comment.Comment}</span>
                        <hr className="grey-line"></hr>
                    </div>
                    )
                    )}
                </div>
            </div>

        </div>

    )
}

export default Comments;