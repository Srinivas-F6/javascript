const decreasebtn = document.getElementById('decreasebtn');
const resetbtn = document.getElementById('resetbtn');
const increasebtn = document.getElementById('increasebtn');
let labelcount = document.getElementById('countLabel');
let count = 0;
decreasebtn.onclick = function(){
    count--;
    labelcount.textContent = count;
}
increasebtn.onclick = function(){
    count++;
    labelcount.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    labelcount.innerHTML = count;
}