// // 1. array destructuring 
/* const numbers = [42, 62];
const x = numbers[0];
const y = numbers[1];

const [x, y] = [42, 62];
const [x, y]= numbers; */

function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}
// console.log(boxify(42, 62));

const student = {
  name: "abir hasan",
  age: 18,
  class: ["new 10", "and exam debo"],
};

const [fistCalss, secondCalss] = student.class;
// console.log(fistCalss, secondCalss);

// Object destruring 
// const {name, age} = {name: 'alu', age: '14'}
// const {name, age} = {id: 12, name: 'alu', salari: 2000, age: '14'};

const employee = {
    ide: 'VS Code',
    desingnation: 'deviloper',
    langush: ['html', 'css', 'js'],
    machiges: 'mac',
    specigcation: {
        heght: 66,
        weight: 67,
        address: 'Dhaka',
        drink: 'wather',
        watch: {
            color: 'black',
            price: 500,
            brand: 'apple',
        },
    }
}

const {machiges, ide} = employee;
const {weight, address} = employee.specigcation;
const {brand, price} = employee.specigcation.watch;

console.log(brand, price);