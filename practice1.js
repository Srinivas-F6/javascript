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

let s = 'iam a human being    uuuu';
let words = s.split(" ");
console.log(words);
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

// let numss = [1,2,4,3,5,6,7,8,9];
// let chars = ['a','b','c','d','e','f'];

// let isdigitchar = [...numss,...chars];
//   document.writeln(isdigitchar);



// Rest parameters = (...rest) allow a function work with a variable number of arguments by budling them into an array
//      spread = expands an array into seperate elements
//      rest = bundles seperate elements into array


// function addGuns(...guns){
//       document.writeln(guns);
// }
// let gun1 = 'M416';
// let gun2 = 'AKM';
// let gun3 = 'AWM';
// let gun4 = 'MG3';
// let gun5 = 'MG3';
// addGuns(gun1,gun2,gun3,gun4);



// function combineStr(...string){
//     return string.join(" ");
// }

// let s1 = 'I am';
// let s2 = 'Srinivas';
// let s3 = 'From';
// let s4 = 'Erangel';

// const output = combineStr(s1,s2,s3,s4);
// console.log(output);


// call backs in javascript
// call back = a function that is passed as an arguement to another function
            
    //  used to handle asynchrous operations       
    //  1.reading a file
    //  2.Network requests
    //  3.interacting with databases


// summ(display,10,82);
// function summ(callback, x, y){
//     let res = x+y;
//     callback(res);
// }
// function display(result){
//     console.log(result);
// }



// for each Loop...
// array.forEach(callback)   -->element , index, array are provided

// let nums = [1,4,3,5,432,343,23];
// nums.forEach(square);
// nums.forEach(addingNum);

// function addingNum(element){
//     console.log(element);
// }


// function square(ele,index,array){
//   array[index] = ele*ele;
// }



// map()  = accepts a callback and applies that function to each element of an array, then return a new array

// const  nums = [1,2,3,4,5];
// const output = nums.map(square);
// console.log(output);

// function square(num){
//     return Math.pow(num,2);
// }



// const students = ['sisis','canvvis','lanuien','ulemina'];
// const output = students.map(upperCase);
// console.log(output);

// function upperCase(strg){
//     return strg.charAt(0).toUpperCase()+strg.slice(1);
// }

// const dates = ['2022-9-22','2024-8-28','2019-7-28'];
// const newdateformat = dates.map(newdates);
// console.log(newdateformat);
// function newdates(date){
//     const d = date.split("-");
//     return `${d[2]}/${d[1]}/${d[0]}`
// }


// filter() = creates a new array by filtering out elements

// let nums = [1,2,3,4,5,6,7,778];

// const evennums = nums.filter(evenNums);
// console.log(evennums);    //2,4,6,778

// function evenNums(nums){
//     return nums%2===0
// }


// let ages = [18,38,47,9,17,6]
// const castvotes = ages.filter(above);
// const notcast = ages.filter(below);

// console.log(castvotes);
// console.log(notcast);

// function above(age){
//      return age>17;
// }
// function below(age){
//     return age<18;
// }


// Reduce() = reduce the elements of an array to a single value

// const prices = [10,49,28,929];
// const tsum = prices.reduce(sum);
// console.log(tsum);

// function sum(previous,next){          //sum(10,49)      sum(59,28)
//     return previous+next;             // 10+49          //59+28
// }


// const marks = [93,84,92,93,84,99];
// const highestmarks = marks.reduce(function (prev,next){
//     return prev+next;
// }
// );
// console.log(highestmarks);


// funciton expression = a way to define functions as values or variables
// function declaration = define a reusable block of code that perform a specific task

// setTimeout(function(){
//     console.log('Helllo');
// },3000);

// const nums = [33,328,3,5,5,7,8,9,10];

// const squares = nums.map(function (ele){
//     return ele*ele;
// });
// console.log(squares);


// let nums = [10,9,4,23,56,7,687,9,543,35,243,8534];

// const evennums = nums.filter(function(numse){
//       return numse%2==0;
// });
// console.log(evennums);


// Arrow Functions: A concise way to write function expressions good for simple functions that you use only once
            // (parameters)=>block of code

/* let names = ['patrick','joe','dia','santer','misse'];

const change = names.map((ele) => ele.charAt(0).toUpperCase());

console.log(change)

let nums = [933,933,494,5,394,932];

const outut = nums.reduce(function(prev,next){
    return next+prev;
});

const outut = nums.map((ele) => ele*3);
const even = nums.filter((ele)=>ele%2==0);
console.log(even);   */

let nums = [20,30,50,60];
let output = nums.reduce((prev,next)=>{
    return prev+next;
})
console.log(output)

/*
   Objects  = A collection of related properities and/or methods Can represent 
   real world objects like(people, car, bus)
   object = {key: value} 
*/

// const person = {
//    firstname :"Goru",
//    lastname : "srinivas",
//    age : 20,
//    phn_num : "9505691379"
// };

// console.log(person.firstname);
// console.log(person["age"]);

// const person1 = {
//     firstname : 'Mike',
//     lastname : 'TYson',
//     age : 50,
//     fullname : function(){
//         return this.firstname+" "+this.lastname;
//     }
// };

// console.log(person1.fullname());
















