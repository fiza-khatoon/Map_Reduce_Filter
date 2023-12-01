
const students = [
    {id: 1, name: "John Doe", age: 21, grade: "A",},
    {id: 2, name: "Jane Smith", age: 22, grade: "B",},
    {id: 3, name: "Bob Johnson", age: 19, grade: "C",},
    {id: 4, name: "Nick jonas", age: 10, grade: "B"},
    {id: 6, name: "Indrew sam", age: 17, grade: "A"},
    {id: 7, name: "Veronica", age: 20, grade: "A"}
   
  ];
  //console.log(students);
  
  //return age which is greater than 20;

//   var result=students.filter((x)=> {return x.age>20});
//   console.log(result);

  //return data whose grade is A;
  
  var res=students.filter((x)=> x.grade=== "A");
  console.log(res);

  