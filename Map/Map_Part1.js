/*A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
Calls a defined callback function on each element of an array, and returns an array that contains the results.*/


// Take an array
var arr=[1,2,3,4,6,5];

//You want to get array with double its value like this----[2,4,6,8,12,10]

  
//writing a function to double the array elements
// function double(x) 
// {
//     return x*2;
// }

// var result=arr.map(double);    //passing a function or we can write arrow function here.

var result=arr.map((x)=>x*2);     // x is index value in array like arr[x]*2;

console.log(result);

//for finding triple of these array values

var res=arr.map((x)=> x*3);
console.log(res);
