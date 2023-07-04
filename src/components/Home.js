import React from "react";
import Post from "./IndividualPost";
import PostsType from "./selectPostsType";

function Home() {

    const postsList = [
        {
            userName: 'Azhar',
            date: '12 hours ago',
            title: 'This is where the title of the post goes',
            image:  "https://i.redd.it/q1e00p08ph9b1.png",
            points: 8800
        
        },
        {
            userName: 'Azhar',
            date: '12 hours ago',
            title: 'This is where the title of the post goes',
            image:  "https://i.redd.it/q1e00p08ph9b1.png",
            points: 8800
        
        },
        {
            userName: 'Azhar',
            date: '12 hours ago',
            title: 'This is where the title of the post goes',
            image:  "https://i.redd.it/q1e00p08ph9b1.png",
            points: 8800
        
        }
    ]


    return (

        <div className="Home">

            {postsList.map(post => 
                <Post userName = {post.userName} 
                date = {post.date} 
                title = {post.title} 
                image = {post.image} 
                points = {post.points}/>
            )}
            
            <PostsType/>

        </div>
        
    
    )
}

export default Home