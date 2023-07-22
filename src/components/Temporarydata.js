
export let postsList = [
    {   
        id: 0,
        userName: 'Azhar',
        date: '12 hours ago',
        title: 'This is where the title of the post goes',
        video: '',
        image:  "https://i.redd.it/q1e00p08ph9b1.png",
        points: 8800,
        Comments: []
    
    },
    {
        id:1,
        userName: 'Azhar',
        date: '12 hours ago',
        title: 'This is where the title of the post goes',
        video: '',
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
        video:'',
        image:  "",
        points: 8800,
        Comments: []
    
    }
]

const New = [
    {   
        id: 0,
        userName: 'Newdata',
        date: '12 hours ago',
        title: 'This is where the title of the post goes',
        image:  "https://i.redd.it/q1e00p08ph9b1.png",
        video: '',
        points: 8800,
        Comments: ['Great','i love it', 'This is just Amazing']
    
    },

    {
        id:2,
        userName: 'Newdata',
        date: '12 hours ago',
        title: 'This is where the title of the post goes',
        image:  "https://i.redd.it/q1e00p08ph9b1.png",
        video:'',
        points: 8800,
        Comments: ['This is Great','i love it, This is just Amazing']
    
    }
]

const Top = [

    {   
        id: 0,
        userName: 'Newdata',
        date: '12 hours ago',
        title: 'This is where the title of the post goes',
        video: "https://www.youtube.com/watch?v=Etzm-nV9OUQ",
        points: 8800,
        Comments: ['Great','i love it', 'This is just Amazing']
    
    },

    {
        id:2,
        userName: 'Newdata',
        date: '12 hours ago',
        title: 'This is where the title of the post goes',
        image:  "https://i.redd.it/q1e00p08ph9b1.png",
        points: 8800,
        Comments: ['This is Great','i love it, This is just Amazing']
    
    },

    {
        id:2,
        userName: 'Newdata',
        date: '12 hours ago',
        title: 'This is where the title of the post goes',
        points: 8800,
        Comments: ['This is Great','i love it, This is just Amazing']
    
    }


]

function data(type){
    if (type === 'Popular') {
        return postsList
    }
    if (type === 'New'){
        return New
    }

    if (type == "Top"){
        return Top
    }

    else {
        return postsList
    }
}

export default data

