
// chack any truthy
// let myVar = 5;
// if(myVar){
//     myVar = myVar * 100;
// }else{
//     myVar = 0;
// }

// you chach negative or false anthing 
let myVar = 50;
if(!myVar){

}


const money = 80;
let food;
if(money > 100){
    food = 'birani khabo';
}else{
    food = 'cha bisute'
}

// truthy
let food1 = money > 100 ? 'biryany' : 'cha bisicute';
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter eater';
console.log(drink); 


// number to string conversion 
const num1 = 52;
const numStr = num1 + '';
console.log(num1);
console.log(numStr);

// string to number 
const input = '400';
const inputNum = + input;
console.log(input);
console.log(inputNum);

// 
const isActive = true;
const showUser = () => console.log('disply User');
const hideUser = () => console.log('hide User');
// isActive ? showUser() : hideUser();
isActive && showUser();

// user || if the side false is then right side will be executed 
isActive || showUser();