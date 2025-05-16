/*
  Constructors = special methos it will initiliaze while we creating the objects
*/

/* function Car(name,color,price){
    this.name = name,   
    this.color = color,
    this.price = price
}

const car1 = new Car('fortuner','white',10000000);
const car2 = new Car('Audi','black',20000000);
const car3 = new Car('BMW','red',89348239834);

console.log(car2.name);
console.log(car3['price']);
console.log(car1.name);
*/

/* Class = (Es-6) feature provides a more structured and cleaner way to work with objects compared to
            traditional constructor functions
            ex: static keyword, encapsulation, inheritence          


class product{
    constructor(price,name,brand){
        this.price = price,
        this.name = name,
        this.brand = brand
   }   
   display(){
         console.log(`price: ${this.price}`);
         console.log(`name: ${this.name}`);
   }
}
const p1 = new product(9404,'jsjsd','ailalia');
const p2 = new product(89398,'skjs','boaijwj');
const p3 = new product(843094,'jaihe','josaj');

p1.display();
*/

/* Static = keyword that defines properities or methods that belong to a class itself
            rather than the objects created from that calss(class owns anything Static,
              not the objects)*/


/* destrucuturing = extract values from arrays and objects,
                    then assign them to variables in a conveninent way 
                [] = to perform array destructuring
                {} = to perform object destructuring
 

// ---------------Example 1--------
// swap 2 elements
let a = 10;
let b = 20;
[a,b] = [b,a];
console.log(a,b);

// swap elements in array 
const colors = ["Red","Green","Yellow","Orange","green"];
[colors[0],colors[4]] = [colors[4],colors[0]];
console.log(colors);

// Assign Array elemens to variables
const color = ["Red","Green","Yellow","Orange","green"];

const [firstcolor,secondcolor,...remainingcolors] = color;
console.log(firstcolor);
console.log(secondcolor);
console.log(remainingcolors);

// Extract valus from objects

const person1 = {
  firstname : "Srinivas",
  lastname : "Goru",
  age : 20,
  job : "Student"
}

const person2 = {
  firstname : "arvind",
  lastname : "reddu+y",
  age : 30,
  job : "Employee"
}

const {firstname,lastname,age,job} = person1;

console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);

// Destructure in function parameters

function displayperson({firstname,lastname,age,job}){
    console.log(`name : ${firstname} ${lastname}`);
    console.log(`age: ${age} and job: ${job}`);
}

displayperson(person1);

*/

/*
  nested objects = Objects inside of other objects.
         Allows you to represent more complex data structures 
         Child object is enclosed by a Parent object.


const  person = {
  fullName : "Subbu",
  age : 20,
  isStudent : true,
  hobbies : ["Karrate","jellyfishing",'Cooking'],
  address : {
    street : 'Parsill vari veedi',
    city : 'Pandalapaka',
    country : 'India'
  }
}

console.log(person.address);
console.log(person.address.country);

for(const property in person.address){
  console.log(person.address[property]);
}



class p{
  constructor(name,age,...address){
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street,city,country){
       this.street = street;
       this.city = city;
       this.country = country;
  }
}

const per1 = new p("anthony", 30, "post office","vizag", "India");

console.log(per1.name);
console.log(per1.address.street);

*/



/* Arrays of Objects


const fruits = [{name:"apple",color:"Red",calaroies:93},
                {name:"Orange",color:"orange",calaroies:45},
                {name:"Banana",color:"Yellow",calaroies:105},
                {name:"coconut",color:"white",calaroies:159}];


console.log(fruits[1].name);
// we can push fruits into it

fruits.push({name:'Pineapple',color:"Yellow",calaroies:'37'});
fruits.pop();
console.log(fruits);

// -----------forEach loop----------

fruits.forEach(fruit => console.log(fruit.name));

*/







/*sort() = Method used to sort elements of an array in place
           sort elements as strings in lexicographic order, not alphabetical
           lexicographic = {alphabet + numbers + symbols}  as strings



let fruits = ["irheihr","jfdioe",'aliue9iewo','fjiwjfiwo'];

fruits.sort();
console.log(fruits); 

let num = [1,4,64,44,10,8494,222,22];
num.sort()
console.log(num);  //output = [1, 10, 22, 222, 4, 44, 64, 8494]

num.sort((a,b) => a-b)  //sort numbers in ascending order
console.log(num);       // [1, 4, 10, 22, 44, 64, 222, 8494]

num.sort((a,b) => b-a)  //sort numbers in descending order
console.log(num);       //[8494, 222, 64, 44, 22, 10, 4, 1]

const people = [{name: 'commander',age: 50},{name : 'solider',age:30},
                {name:'colonel',age: 49},{name:'Lueitient',age: 60}];

people.sort((a,b) => a.age - b.age);   // sort people array of objects according to age
console.log(people);

people.sort((a,b) => a.name.localeCompare(b.name)); //This line compares strings
console.log(people);

*/



/* 
Shuffle an array

Fisher-Yates Algorithm


const cards = [1,2,3,4,5,6,7,8,9,'A','J'];

shuffle(cards);
console.log(cards);

function shuffle(arr){
   for(let i=arr.length-1; i>=0; i--){
     const random = Math.floor(Math.random() * (i+1));
     [arr[i],arr[random]] = [arr[random],arr[i]]
   }

}

*/


/*
  Date concept


const date = new Date();
console.log(date.getMinutes());
console.log(date.getFullYear());

date.setFullYear(2002);
console.log(date);

*/



/*

closure = A function defined inside another function,
          the inner function has access to the variables  and 
          scope of the outer function.
          Allow for private variables and state maintanance
          used frequently in Js frameworks: React, Vue, Angular.

         

function outer(){
  let message  = "This message have in the inner funcion";
  function inner(){
      console.log(message);
  }
  inner();  // Here we send this message to the inner funciton
}
outer();


function game(){
  let score = 0;

  function increasescore(points){
     score += points;
     console.log(`+${points}pts`);
  }
  
  function decreasescore(points){
    score -= points;
    console.log(`-${points}pts`);
  }
  
  function getScore(){
    return score;
  }
  return {increasescore,decreasescore,getScore};
}

const g = game();
g.increasescore(5);
g.increasescore(6);
g.decreasescore(3);
console.log(`The final score is ${g.getScore()}`);


 */

/* setTimeOut  

  setTimeout() = function in Javascript that allows you to schedule the
                 execution of a function after an amount of time(milliseconds)
                 Times are approximate(varies based on the workload of Javascript runtime env.)
                 setTimeout(callback, delay);
                



function sayHello(){
  window.alert("Hell0");

}
setTimeout(sayHello,3000);


setTimeout(()=>window.alert('Good morning'),4000);

let timer;
function starter(){
    timer = setTimeout( ()=> window.alert('Started'),4000);
}

function closer(){
    clearTimeout(timer);
}
*/


/*

synchronous  = Executes line by line consecutively in a sequential manner
               code that waits for an operation to complete.

asynchronous = Allows multiple operations to be performed concurrently without
               waiting Doesn't block the execution flow and allows the program to continue
               (I/O Operations, network requests, fetching data)
               Handled with: Callbacks, promises, Async/Await.



function f1(){
   setTimeout(() => {console.log("Task 1"); 
                    cancelIdleCallback()},3000);
}
function f2(){
     console.log("Task 2");
     console.log("Task 3");
     console.log("Task 4");
}
  
*/

/* 
    DOM(DOCUMENT OBJECT MODEL)
       object{} that represents the page you see in the web browser and provides
       you with an API to interact with it.
       web browser constructs the DOM when it loads an HTML document, and structures
       all the elements in a tree-like representation.
       Javascript can access the DOM to dynamically change the content, structure, and style of
       a web page.

*/

/* 
   Element Selectors = Methods used to target and manipulate HTML elements They allow you to
                   to select one or manipulate HTML elements from the DOM(DOCUMENT OBJECT MODEL).
    

   1. document.getElementById()         Element or Null
   2. document.getElementsByClassName()   HTML Collection
   3. document.getElementByTagName()    HTML collection
   4. document.querySelector()          Element OR NUll
   5. document.querySelectorAll         Nodelist
*/

/*
1. document.getElementById() 
const myHeading = document.getElementById('first');
myHeading.style.backgroundColor = "Orange";
myHeading.style.textAlign = "center";
*/


/*
2. document.getElementsByClassName()
const fruits = document.getElementsByClassName('fruits');
// for(let fruit of fruits){
//    fruit.style.backgroundColor = "yellow";
// }

Array.from(fruits).forEach(fruit =>{
    fruit.style.backgroundColor = "green";
});

*/

/*
  DOM Navigation  = The process of navigating through the structure of an
                    HTML document using Javascript.

                    .firstElementChild
                    .lastElementChild
                    .nextElementSibling
                    .previousElementSibling
                    .parentElement
                    .childern
*/

/*
 -------------firstElementChid-------------

const element = document.getElementById('fruits');

const firstchild = element.firstElementChild;

firstchild.style.backgroundColor = "Green";


const ulElements = document.querySelectorAll('ul');

ulElements.forEach(ulElement =>{
     const firstChild = ulElement.firstElementChild;
     firstChild.style.background = "red";
});
-----lastElementChild is similar to the firstElementChild---

*/


/*

-----------------nextElementSibiling-------------------

const element = document.getElementById('fruits');
const nextsibling = element.nextElementSibling;
nextsibling.style.color = "violet";

---previousElementSibling is also similar to the nextElemntSibling
*/



/*
   ---------------parentElement--------------

const element = document.getElementById('Apple');
const parent = element.parentElement;
parent.style.backgroundColor = 'orange';
parent.style.fontSize = '1.2em';

----childrenElement is also same as parentElement. In parentElement we need to find the
                  parent class through children. But in childrenElement we need to find 
                  the children elements using parent class.

*/


// Add & Change Html Elements

const b1 = document.getElementById('box1');
b1.style.border = '2px solid red';
b1.style.textAlign = 'center';
b1.style.height = '100px';
b1.style.margin = '10px';

const b2 = document.getElementById('box2');
b2.style.border = '2px solid red';
b2.style.textAlign = 'center';
b2.style.height = '100px';
b2.style.margin = '10px';

const b3 = document.getElementById('box3');
b3.style.border = '2px solid red';
b3.style.textAlign = 'center';
b3.style.height = '100px';
b3.style.margin = '10px';

const b4 = document.getElementById('box4');
b4.style.border = '2px solid red';
b4.style.textAlign = 'center';
b4.style.height = '100px';
b4.style.margin = '10px';




