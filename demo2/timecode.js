/* DIGITAL CLOCK PROGRAM
function updateTime(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const meridian = hours >=12 ? "PM" : "AM";
    let textcontent = `${hours} : ${minutes} : ${seconds} ${meridian}`;
    document.getElementById('clock').innerHTML = textcontent;
}
updateTime();
setInterval(updateTime,500);

*/

// Stop Watch Program


const display = document.getElementById('display');

function atd(input){
    display.value += input;
}

function cleartheScreen(){
    display.value = "";
}
function  calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}