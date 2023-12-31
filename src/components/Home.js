import {React, useEffect, useState} from "react";
import Post from "./IndividualPost";
import LoadingComponent from "./Loading";

import { useParams} from "react-router-dom";
import data, { postsList } from "./Temporarydata";
import { useDispatch, useSelector } from "react-redux";
import {  load,selectdata,isLoadingData } from "../data/homeSlice";




function Home() {

    const dispatch = useDispatch();
    const{postsCategory} = useParams();
    const postsList = useSelector(selectdata);
    const isLoading = useSelector(isLoadingData);


    useEffect(() => {
        dispatch(load(postsCategory));
    }, 
    [postsCategory]);
    

    return (

        <div className="Home">
            

            {isLoading && <LoadingComponent/>}

            {!isLoading &&
            postsList.map(element =>{
                const post = Object.values(element)[0]; 
                const id = Object.keys(element)[0];
                return <Post userName = {post.userName} 
                date = {post.date} 
                title = {post.title} 
                image = {post.image} 
                video = {post.video}
                url = {post.url}
                votes = {post.votes}
                postsCategory = {postsCategory}
                id = {id}/>}
            )}   
            
        </div> 
         
    )
}

export default Home;
