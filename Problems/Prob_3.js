/*There are two arrays one each of users and other is of cities they live in, 
make a new array which contains the unified(basically add them according to some common data) data*/


const users=[
    {id:1, name:"John", age:21},
    {id:2, name:"Param", age:21},
    {id:3, name:"Karan", age:21},
    {id:4, name:"Prince", age:21}
];

const cities=[
    {id:1, city:"Surat"},
    {id:6, city:"indore"},
    {id:3, city:"Patna"},
    {id:2, city:"Delhi"}
];

var data=users.map(item1=> ({...item1,...cities.find(item2=> item1.id===item2.id)}))
//             [print all data in users, if match then print data of cities ]

console.log(data);
