/*Make an array of Objects representing items, filters the items based on the specific condition 
(e.g., items with certain property value) and transform the filteres data into a new format.*/



//Array of objects
const students = [
    {id: 1, name: "John Doe", age: 21, grade: "A",},
    {id: 2, name: "Jane Smith", age: 22, grade: "B",},
    {id: 3, name: "Bob Johnson", age: 19, grade: "C",},
    {id: 4, name: "Nick jonas", age: 10, grade: "B"},
    {id: 6, name: "Indrew sam", age: 17, grade: "A"},
    {id: 7, name: "Veronica", age: 20, grade: "A"}
   
  ];

  //we use first filter for filter the data for specific condition and then use map for mapping.

  //we are printing Only Grade a student names.

  var result=students.filter((x)=>x.grade==="A").map((x)=> x.name);  // first filter out grade A value then use map for mapping its corresponding names and print it in array.
  

  console.log(result);