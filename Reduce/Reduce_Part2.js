
const shoppingCart = [
  {itemName: "Laptop", brand: "Apple", price: 1299.99},
  {itemName: "Smartphone", brand: "Samsung", price: 799.99},
  {itemName: "Headphones", brand: "Sony", price: 149.99},
  {itemName: "Camera", brand: "Canon", price: 499.99}

];

// console.log(shoppingCart);


//return sum of all prices in the shopping cart;

var res=shoppingCart.reduce((acc,curr) =>  acc+curr.price,0 );

console.log(res);