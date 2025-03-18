const textbox = document.getElementById('textbox');
const celsiustofarh = document.getElementById('celsiustofarh');
const farhtocelsius = document.getElementById('farhtocelsius');
const output = document.getElementById('submitt');
const result = document.getElementById('result');
let temp;

output.onclick = function() {
    if (celsiustofarh.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.innerHTML = temp.toFixed(2) + " °F";
    } else if (farhtocelsius.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * 5 / 9;
        result.innerHTML = temp.toFixed(2) + " °C";
    } else {
        result.innerHTML = "Select a Unit";
    }
};
