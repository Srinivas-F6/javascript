// String methods - allow you to work and manipulate the strings
let username = 'Hello worlld';

console.log(username.indexOf(' '));  // 5

console.log(username.startsWith('Hel'));  //true

console.log(username.toUpperCase());  //HELLO WORLLD

console.log(username.toLowerCase());  //hello worlld

console.log(username.repeat(2));     //Hello worlldHello worlld

let num = '820329-893=382-3';

console.log(num.replaceAll(/[^0-9]/g,""));   //8203298933823

console.log(num.padStart(19,"0"));       //000820329-893=382-3


// String sllicing == creating a substring from a  string    string.slice(start,end);

let namee = 'Slicing string';
console.log(namee.slice(0,7));


// === is a strict equality(used for values and data types

// const PI = 3.14;
// if(PI == '3.14'){
//     console.log('this is correct');   //it gives this is correct because == operator chooses value irrespective of the data type
// }                                      // if you use === operator it gives this is not pi
// else{
//     console.log('this is not pi');
// }
// const minNum = 1;
// const maxNum = 1000;
// const ans = Math.floor(Math.random()*(maxNum - minNum+1) + minNum);

// console.log(ans);


// Functions in java script
// A section of reusable code Declare code once, use it whenever we want call the function to execute that function


// function Coding(lang,prog){
//     console.log('I was doing problems in Leetcode');
//     console.log('I have been doing problems in GFG');
//     console.log(`I have been doing in ${lang}`);
//     console.log(`Iam using ${prog} as my first language`);
// }
// Coding('Codechef','java');


// function add(a,b){
//     let res = a+b;
//     return res;
// }
// console.log(add(5,6));


// Arrays in javascript -- A variable that can hold more than one vaule

// let games = ["Volley Ball",'Kabbadi','Cricket','Football'];

// games.push('BasketBall');    //push used for add element element at the last of the array
// games.pop();   //pop the element at the last of the array.
// games.unshift('Basketball') //push the element at the starting position of the array
// games.shift();  //used to pop the elements at the starting position of the array.

// console.log(games);
// console.log(games.length);
// console.log(games.indexOf('Kabbadi'));

// // Enhanced for loop
// for(let game of games){
//     console.log(game);
// }

// games.sort();      //games.sort().reverse();
// console.log(games);





// Spread operator =  ...allows an itearable such an array or string expanded into seperate elements

// let numbers = [1,6,43,3,2,232,234]
// console.log(Math.max(numbers));    //output is :NaN
// console.log(Math.max(...numbers));  //234--here spread operator is used for expanded the array into seperate elements.

// let nameq = 'Srinivas';
// console.log([...nameq].join("->"));

// let nums = [1,2,4,3,5,6,7,8,9];
// let chars = ['a','b','c','d','e','f'];

// let isdigitchar = [...nums,...chars];
// console.log(isdigitchar);



// Rest parameters = (...rest) allow a function work with a variable number of arguments by budling them into an array
//      spread = expands an array into seperate elements
//      rest = bundles seperate elements into array


function addGuns(...guns){
    console.log(guns);
}
let gun1 = 'M416';
let gun2 = 'AKM';
let gun3 = 'AWM';
let gun4 = 'MG3';

addGuns(gun1,gun2,gun3,gun4);


function combineStr(...string){
    return string.join(" ");
}

let s1 = 'I am';
let s2 = 'Srinivas';
let s3 = 'From';
let s4 = 'Erangel';

const output = combineStr(s1,s2,s3,s4);
console.log(output);


