// variable : A container that stores a  value

// let fullname = "Srinivas";
// let age = 20;
// let email = 'glsrinivas1111@gmail.com';

// document.getElementById('p11').textContent = `My name is  ${fullname}`;


// // Arthimetic operators

// console.log(30);


// operator precedence
// 1.parenthisis
// 2.exponents
// 3.multiplication or division or modulo
// 4.addition or subraction    


// How to accept user input
// 1. Easy Way:  using window

// let username = window.prompt("what's your name");
// let inputvalue;
//     document.getElementById("tap").onclick = function(){
//     inputvalue = document.getElementById("firstinput").value;
//     document.getElementById("p1").textContent = `My Name is ${inputvalue}`;
// }


// Type conversions : change a datatype of a value to another(Strings,Numbers,Boolean)

// let a = parseInt(prompt("Enter the Number: "));
// a+=4;
// document.writeln(a);      //Number(a)  ---> It is also converts any data type to Number

// document.writeln(a, typeof a);

// let x = "";
// let y = "";
// let z = "";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


// const - a variable 
const PI = 3.146;
let radius;
let circumference;
circumference = 2*PI*radius;

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("output").textContent = circumference;
}

