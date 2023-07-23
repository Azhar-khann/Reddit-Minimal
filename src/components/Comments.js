import {React,useEffect,useRef,useState} from "react";
import { useParams } from "react-router-dom";
import LoadingComponent from "./Loading";

import { useDispatch, useSelector } from "react-redux";
import {selectdata } from "../data/homeSlice";
import { selectSearch } from "../data/SearchSlice";
import {  loadComments,selectComments,isLoadingComments } from '../data/commentsSlice';


function Comments(){

    const dispatch = useDispatch();
    const {id} = useParams();

    window.history.replaceState({}, document.title, '/');     {/* clear url after getiing id */}

    useEffect(() => {
        dispatch(loadComments(id));

    }, []); 

    const Comments = useSelector(selectComments);
    const isLoading = useSelector(isLoadingComments);
    
    const HomepostList = useSelector(selectdata);

    const searchPostList = useSelector(selectSearch);

    let post  = HomepostList.find(post => post.hasOwnProperty(id))
     
    if (post === undefined) {
        post = searchPostList.find(post => post.hasOwnProperty(id))
    }

    const { userName, date, title, image, video, url } = post?.[id] || {'userName':'username', 'date':'date', 'title':'title', 'image':'img', 'video':'vid', 'url':'url'};
    
    

 
    
    
    return (

    
        <div className="Comments">

            <div className="Post"> 
                <h4 id = "Username"> {userName}</h4>

                <h4 id = "date">{date}</h4>

                <h2> {title}</h2>

                { (url.includes('jpg') || url.includes('png')) === true && video === null && <img src={url} />}  

                {video !== null && video !== undefined  && <video src={video} preload="auto" controls volume="1" />} 

                { (url.includes('jpg') || url.includes('png')) === false && video === null && image !== undefined  &&  <a className="url" href={url}>{url.slice(0,70)}</a> }
            

                <div className="section">

                    <hr className="grey-line" id ='line'></hr>
                    
                    <div className="LoadingComments">
                        {isLoading && <LoadingComponent/>}
                    </div>

                    {!isLoading &&
                        Comments.map((comment) =>
                        !comment.comment.includes('https') ? (
                        <div key={comment.id}>
                            
                            <span className="userName">{comment.userName}</span>
                            <span className="comment">{comment.comment}</span>
                            <hr className="grey-line" />
                        </div>
                    ) : null)
                    }                  
                </div>
            </div>
            

        </div>
    )

    
}   
export default Comments; 