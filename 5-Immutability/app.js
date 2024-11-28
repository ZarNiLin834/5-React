// add
// remove
// 
const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      stock: 50,
      rating: 4.5
    },
    {
      id: 2,
      name: "Smartphone",
      price: 599.99,
      stock: 100,
      rating: 4.7
    },
    {
      id: 3,
      name: "Headphones",
      price: 199.99,
      stock: 200,
      rating: 4.2
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 299.99,
      stock: 150,
      rating: 4.3
    },
    {
      id: 5,
      name: "Tablet",
      price: 399.99,
      stock: 80,
      rating: 4.6
    }
  ];


  // add
//   const newProducts ={
//     id: 6,
//     name: "Keypad",
//     price: 399.99,
//     stock: 80,
//     rating: 4.6
//   }
//   const arr = [...products,newProducts];

 // remove
//  const arr = products.filter(el => el.id !== 3)

//update
// const arr = products.map(el => {
//     if (el.id === 3) {
//         return{ ...el, stock : el.stock + 50}
//     }
//     return el;
// });

const arr = products.map ((el) => {
    return {...el, price : el.price +100}
})

  console.table(arr);
console.table(products);
  

// const macbook = {
//     name: "MacBook Air",
//     price: 999,
//     color: "Silver",
//     storage : "215 SSD",
// };

// add
// const obj = {...macbook,year : "2023"};
// console.log(obj)

// remove
// const {storage,...obj1} = macbook;
// console.log(obj1);

// update 
// const obj2 = {...macbook, price : 2000};
// console.log(obj2);
// console.log(macbook);


// const fruits = ["apple","grape","lime","dates"];
// console.log(fruits);

// add 
// fruits.push = "kiwi";
// const arr = [...fruits,"kiwi"];
// console.log(arr);

// remove
// const arr1 = fruits.filter (el => el !== "dates");
// console.log(arr1);
 
// update 
// const arr2 = fruits.map (el => el === "lime" ? "orange" : el);
// console.log(arr2);