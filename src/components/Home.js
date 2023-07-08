import React from "react";
import Post from "./IndividualPost";
import { useParams} from "react-router-dom";
import data from "./Temporarydata";

export let postsList = [
    {   
        id: 0,
        userName: 'Azhar',
        date: '12 hours ago',
        title: 'This is where the title of the post goes',
        image:  "https://i.redd.it/q1e00p08ph9b1.png",
        points: 8800,
        Comments: ['Great','i love it', 'This is just Amazing']
    
    },
    {
        id:1,
        userName: 'Azhar',
        date: '12 hours ago',
        title: 'This is where the title of the post goes',
        image:  "https://i.redd.it/q1e00p08ph9b1.png",
        points: 8800,
        Comments: [{
                userName: 'Bilal',
                Comment: 'This is great',
                image: 'https://easydrawingguides.com/wp-content/uploads/2022/03/how-to-draw-an-easy-cartoon-lion-featured-image-1200.png'
            },

            {
                userName: 'Ahmed',
                Comment: 'I love it',
                image: 'https://easydrawingguides.com/wp-content/uploads/2022/03/how-to-draw-an-easy-cartoon-lion-featured-image-1200.png'
            },

            {
                userName: 'Ahmed',
                Comment: 'Lol this is so funny!',
                image: 'https://easydrawingguides.com/wp-content/uploads/2022/03/how-to-draw-an-easy-cartoon-lion-featured-image-1200.png'
            },
        
        
        ]
    
    },
    {
        id:2,
        userName: 'Azhar',
        date: '12 hours ago',
        title: 'This is where the title of the post goes',
        image:  "https://i.redd.it/q1e00p08ph9b1.png",
        points: 8800,
        Comments: ['This is Great','i love it, This is just Amazing']
    
    }
]

function Home() {

    const{postsCategory} = useParams();
    postsList = data(postsCategory)

    return (


        <div className="Home">

            {postsList.map(post => 
                <Post userName = {post.userName} 
                date = {post.date} 
                title = {post.title} 
                image = {post.image} 
                video = {post.video}
                points = {post.points}
                Comments = {post.Comments}
                id = {post.id}/>
            )}
            

        </div>
       
    
    )
}
export default Home;