import {React, useEffect, useState} from "react";
import Post from "./IndividualPost";
import LoadingComponent from "./Loading";

import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loadSearch, selectSearch, isLoadingData } from "../data/SearchSlice";

function SearchResults() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('name');

    const dispatch = useDispatch();
    const postsList = useSelector(selectSearch);
    const isLoading = useSelector(isLoadingData);

    useEffect(() => {
        dispatch(loadSearch(query));
    }, 
    [query]);
    

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
                urlThumbnail = {post.urlThumbnail}
                votes = {post.votes}
                id = {id}/>}
            )}
            
        </div>
         
    )
}

export default SearchResults;