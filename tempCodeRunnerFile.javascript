
const id = '20'
const id_2= '30'
const data = [
    {
    [id]:{
        name: 'azhar',
        last: 'Khan'
    }
},  
{
    [id_2]:{
        name: 'ahmaed',
        last: 'Khan'
    },
},
{
    [id]:{
        name: 'rizwan',
        last: 'Khanjjaja'
    }
}
]

//console.log(data);
data.map(post =>{
    const obj = Object.values(post)[0];
    //console.log(obj)
    const idValue = Object.keys(post)[0];
    console.log(idValue);
})

const objectWithId2 = data.find(obj => obj.hasOwnProperty(id_2));
console.log(objectWithId2[id]);