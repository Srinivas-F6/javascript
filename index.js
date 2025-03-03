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
let inputvalue;
    document.getElementById("tap").onclick = function(){
    inputvalue = document.getElementById("firstinput").value;
    document.getElementById("p1").textContent = `My Name is ${inputvalue}`;
}


