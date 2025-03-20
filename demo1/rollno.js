let submitbtn = document.getElementById('submitbtn');
let output = document.getElementById('imge');
const aec = document.getElementById('aec');
const acet = document.getElementById('acet');

submitbtn.onclick = function(){
    let rollno = document.getElementById('rollno').value;
    if(aec.checked){
       output.innerHTML = `<img src="https://info.aec.edu.in/AEC/StudentPhotos/${rollno}.jpg">`;
    }
    else if(acet.checked){
        output.innerHTML = `<img src="https://info.aec.edu.in/ACET/StudentPhotos/${rollno}.jpg">`;
    }
    else{
        alert("select the collage")
    }
}
