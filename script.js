
// Table Values
var tableHeight = document.getElementById('tableHeight');
var tableWeight = document.getElementById('tableWeight');
var tableBmi = document.getElementById('tableBmi');
var tableStatus = document.getElementById('tableStatus');
var tableBlock = document.getElementById('tableBlock');


// Button Event
function clicked() {
    // Inputs
    var inputWeight = document.getElementById('weight').value;
    var inputHeight = document.getElementById('height').value;

    // BMI Value
    var BMI = inputWeight / (inputHeight * inputHeight);
    BMI = BMI.toFixed(2);

    if (BMI < 18.5) {
        tableStatus.innerHTML = ` <strong> Underweight </strong>`;
    }

    else if (BMI >= 18.5 && BMI <= 24.9) {
        tableStatus.innerHTML = ` <strong> Healthy </strong>`;

    }

    else if (BMI >= 25.0 && BMI <= 29.9) {
        tableStatus.innerHTML = ` <strong> Overweight </strong>`;
    }

    else {
        tableStatus.innerHTML = ` <strong> Obesity </strong>`;
    }

    tableBlock.style.display = 'block';
    tableHeight.innerText = `${inputHeight}`;
    tableWeight.innerText = `${inputWeight}`;
    tableBmi.innerText = `${BMI}`;


}

function restart() {
    tableBlock.style.display = 'none';
    inputHeight = '';
    inputWeight = '';
}