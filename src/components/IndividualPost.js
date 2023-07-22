import React from "react";
import Comments from "./Comments";

import { Link } from "react-router-dom";

function Post(props) {

    let url = '';
    if (props.url.length > 70){
        url = props.url.slice(0,70) + '...'
    } else{
        url = props.url
    }


    return (
        <div className="Post">
                <h4 id = "Username"> {props.userName}</h4>

                <h4 id = "date">{props.date}</h4>

                <h2> {props.title}</h2>

                { (props.url.includes('jpg') || props.url.includes('png')) === true && props.video === null && <img src={props.url} />} {/* images propers link is in props.url */}

                { (props.url.includes('jpg') || props.url.includes('png')) === false && props.video === null && props.image !== undefined  &&  <a className="url" href={props.url}>{url}</a> } 

                {props.video !== null && props.video !== undefined  && <video src={props.video} preload="auto" controls volume="1" />} 

                <hr className="grey-line"></hr>

                <div className="section">

                    <h5>{props.votes} Points</h5>
                    

                    <Link to={`/${props.postsCategory}/comments/${props.id}`} className="comment-button">
                        <i className="fas fa-comment"></i> Comments
                    </Link> 

                </div>
        </div>
    )
}

export default Post