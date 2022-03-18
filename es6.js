const number = [90, 40, 10, 59];
const student = {
  name: "abir hasan",
  age: 18,
  class: ["new 10", "and exam debo"],
};

const about = `my Name is ${student.name} and age ${student.age} has number: ${number[3]} aloso ${student.class[1]}`;
// console.log(about);

// 2. array function
const getFiftyFive = () => 55;
const addSixtyFive = (num) => num + 45;
const isEvent = (x) => x % 2 == 0;
const addTheree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// spread operator

const newMumber = [...number];
// crect a new array forem an older array and an Element
const currenNumber = [...number, 55];

number.push(99);
number.push(99);
number.push(99);

console.log(number);
console.log(newMumber);
console.log(currenNumber);
