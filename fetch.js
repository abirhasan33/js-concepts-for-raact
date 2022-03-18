
// 1. JSON
const student = {
    name: "abir hasan",
    age: 18,
    class: ["new 10", "and exam debo"],
  };
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2. fetch 
fetch('uel')
    .then(res => res.json())
    .then(data => console.log(data));

// keys value 
const keys = Object.keys(student);
const value = Object.values(student);

// for 
const numbers = [3, 45, 66, 11, 88, 39];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on Array like Object
// loop or remove forem an array 

// add or remove forem an array 
const product = [
    {name: 'leptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'pihone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sungals', price: 300, brand: 'pibon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}
];

const newProduct = {name: 'webcam', price: 700, brand: 'lel'};

//  copy product array add then add newProduct 
const newProduct = [...product, newProduct];

// cerate a new array withhoth one array withhoth item 
// remove phone menns ceeat a new array without the phone 
const remaing = product.filter(p => p.name !== 'phone');