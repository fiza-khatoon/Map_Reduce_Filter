
var arr=[45,67,21,9,78,11];

//we want to find the maximum element inside array.

var res=arr.reduce(function (max,curr){

    if(curr>max)
    {
        max=curr;
    }
    return max;

},0);
console.log(res);  // return single values;