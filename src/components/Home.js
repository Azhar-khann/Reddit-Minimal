import React from "react";
import Post from "./IndividualPost";


export const postsList = [
    {   
        id: 1,
        userName: 'Azhar',
        date: '12 hours ago',
        title: 'This is where the title of the post goes',
        image:  "https://i.redd.it/q1e00p08ph9b1.png",
        points: 8800
    
    },
    {
        id:2,
        userName: 'Azhar',
        date: '12 hours ago',
        title: 'This is where the title of the post goes',
        image:  "https://i.redd.it/q1e00p08ph9b1.png",
        points: 8800
    
    },
    {
        id:3,
        userName: 'Azhar',
        date: '12 hours ago',
        title: 'This is where the title of the post goes',
        image:  "https://i.redd.it/q1e00p08ph9b1.png",
        points: 8800
    
    }
]

function Home() {

    return (


        <div className="Home">

            {postsList.map(post => 
                <Post userName = {post.userName} 
                date = {post.date} 
                title = {post.title} 
                image = {post.image} 
                points = {post.points}
                id = {post.id}/>
            )}
            

        </div>
       
    
    )
}
export default Home;