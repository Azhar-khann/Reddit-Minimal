const Comments =  [{
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
}]

Comments.map(comment => {

    console.log(comment.userName)
})