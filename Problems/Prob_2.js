/*Given an array of Objects with a numerical property, implement a function to sort the objects based on that property .
Additionally add a ranking to each object based on its position in the sorted array */



//array of Objects.

const prices=
[
    {id: 1, name: "John Doe",  Marks:60},
    {id: 2, name: "Jane Smith", Marks:35},
    {id: 3, name: "Bob Johnson", Marks:50},
    {id: 4, name: "Nick jonas", Marks:20},
    {id: 6, name: "Indrew sam", Marks:32},
    {id: 7, name: "Veronica", Marks:90}
]


//rank them according to theire marks in ascending order

var result1= [...prices].sort((a,b)=> a.Marks-b.Marks).map((items,index) => ({...items,rank:index+1}));
console.log(result1);

var result= [...prices].sort((a,b)=> a.Marks-b.Marks).map((value,index)=> ({name: value.name, rank: index + 1}));
console.log(result);
                        //[...prices] we use this because sort operation work on original array so we dont  want to disturb original array so we make its duplicate.
                        




// console.log(prices);