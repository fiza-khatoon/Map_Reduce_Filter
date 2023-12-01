
//taking an array of an object 
var Emp = [
    { id: 20, name: 'Captain Piett', city:'surat' },
    { id: 24, name: 'General Veers', city:'indore'},
    { id: 56, name: 'Admiral Ozzel', city:'bhopal' },
    { id: 88, name: 'Commander Jerjerrod', city:'patna' }
  ];

  //task---your output should contain name with city like this [Captain Piett ,surat]

  var res=Emp.map((x)=> x.name+","+x.city); // we are mapping values like anme with city.
  console.log(res);
