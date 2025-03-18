let submitbtn = document.getElementById('submitbtn');
let output = document.getElementById('imge');

submitbtn.onclick = function(){
    let rollno = document.getElementById('rollno').value;
    output.innerHTML = `<img src="https://info.aec.edu.in/AEC/StudentPhotos/${rollno}.jpg">`;
}
