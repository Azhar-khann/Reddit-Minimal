/* async function getavatar(userName){
   // console.log(userName)
    const image = await fetch(`https://cors-anywhere.herokuapp.com/https://www.reddit.com/user/${userName}/about.json`,{})
    .then(async response => await response.json())
    .then(data => {
        return data.data.icon_img
    })
    return image
} */

async function Comments(id){

    const comments = await fetch(`https://www.reddit.com/r/all/comments/${id}.json`,{})

    .then(async response => {
        const commentsData =  await response.json();
        return commentsData;
    })
    .then(commentsData => {
        const comment_dict = Promise.all( commentsData[1].data.children.slice(0,-1).map(async comment => {
            const { body, author } = comment.data;
            //const avatar = await getavatar(author)
            return {userName: author, comment: body}

        })
        )
        return comment_dict;
    
    })

    return comments
}


async function loadData(type){
    let url;

    if (type === 'Popular') {
        url = 'https://www.reddit.com/r/popular.json';
    } else if (type === 'New') {
        url = 'https://www.reddit.com/new.json';
    } else if (type === 'Top') {
        url = 'https://www.reddit.com/top.json';
    } else {
        url = 'https://www.reddit.com/.json';
    }


    const postsList = await fetch(url, {})
    .then(async response => {
        const data =  await response.json();
        //console.log('data=',data.data.children[0].data)
        //console.log('data=',data.data.children[1].data.thumbnail)
      
        const posts = await Promise.all( data.data.children.map(async post=> {
            const {id, author, title, created_utc, ups ,downs} = post.data;

            const image = post.data.preview && post.data.preview.images[0].source.url;
            const video = post.data.media && post.data.media.reddit_video && post.data.media.reddit_video.fallback_url;
            const url = post.data.url;
            const urlThumbnail = post.data.thumbnail

            const date = new Date(created_utc * 1000);
            const formattedDate = date.toLocaleDateString();

            const votes = parseInt(ups) + parseInt(downs);
        
            //return {id: id, userName: author, date:formattedDate, title: title, image: image, video: video, url: url, urlThumbnail: urlThumbnail,votes: votes,}
            return {
                [id]:{ 
                    userName: author, 
                    date:formattedDate, title: 
                    title, image: image, 
                    video: video, url: url, 
                    urlThumbnail: urlThumbnail,
                    votes: votes
                }
            }
        }))
        return posts
        
    })
    console.log(postsList)
    return postsList
}

async function Search(query){
    const results  = await fetch(`https://www.reddit.com/search.json?q=${query}`,{})

    .then(async response => {
        const data =  await response.json();
      
        const posts = await data.data.children.map(post=> {
            const {id, author, title, created_utc, ups ,downs} = post.data;

            const image = post.data.preview && post.data.preview.images[0].source.url;
            const video = post.data.media && post.data.media.reddit_video && post.data.media.reddit_video.fallback_url;
            const url = post.data.url;

            const date = new Date(created_utc * 1000);
            const formattedDate = date.toLocaleDateString();

            const votes = parseInt(ups) + parseInt(downs);
        
            return {
                [id]:{ 
                    userName: author, 
                    date:formattedDate, title: 
                    title, image: image, 
                    video: video, url: url, 
                    votes: votes
                }
            }
        })
        return posts
        
    })
    console.log(results)
    return results
}

//loadData('Top')
//Comments('14ycbs4')
//Comments('14e8m5n')
//Search('cake recipes')
export { loadData, Comments, Search }



