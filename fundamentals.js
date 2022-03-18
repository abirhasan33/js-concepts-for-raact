// 1. How to declare a veribele using let and const 
const fatherName = 'Arnold';
let sejon = 'rainy';
sejon = 'winter';

//2. condeiton
// 6 bashick conition: <,>, ===, !==, <=, >=
// munltiple condeiton : &&, ||

if(fatherName === 'Arnold' || sejon === 'raine'){
}else if(fatherName === 'aronid'){
}else{
}

// 3. array declare
// indexedDB,
// length, push, 
const number = [90, 40, 10, 59];
number[0] = 56;
// 4. for loop 
for(let i = 0; i < number.length; i++){
    const numbers = number[i];
    // console.log(numbers);
};

// 5. function 
function munltiple(num1, num2){
    const result = num1 * num2;
    return result;
}
const output = munltiple(11,10);
// console.log(output);

// 6. object 
// 3 ways to access propety by name 
const student = {
    name: 'abir hasan',
    age: 18,
    class: ['new 10', 'and exam debo']
}
const myClass = student.class;
console.log(student.class);
console.log(student['class'])
console.log(myClass);