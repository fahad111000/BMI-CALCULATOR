
// Inputs
var inputWeight = document.getElementById('weight');
var inputHeight = document.getElementById('height');

// Error mesages
var heightSpan = document.getElementById('heightMissing');
var weightSpan = document.getElementById('weightMissing');

// Table Values
var tableHeight = document.getElementById('tableHeight');
var tableWeight = document.getElementById('tableWeight');
var tableBmi = document.getElementById('tableBmi');
var tableStatus = document.getElementById('tableStatus');
var tableBlock = document.getElementById('tableBlock');


// Button Event

function clicked() {
    inputHeight.style.border = '1px solid var(--secondary-color)';
    inputWeight.style.border = '1px solid var(--secondary-color)';
    heightSpan.style.display = 'none';
    weightSpan.style.display = 'none';


    // BMI Value
    var BMI = inputWeight.value / (inputHeight.value * inputHeight.value);
    BMI = BMI.toFixed(2);


    if (BMI <= 18.5) {
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
    tableHeight.innerText = `${inputHeight.value}`;
    tableWeight.innerText = `${inputWeight.value}`;
    tableBmi.innerText = `${BMI}`;

    // Input Field Checking
    checkingField(inputHeight, inputWeight);


}

function checkingField(height, weight) {
    if (height.value === '' && weight.value === '') {
        height.style.border = '1px solid red';
        weight.style.border = '1px solid red';
        weightSpan.style.display = 'block';
        heightSpan.style.display = 'block';
        tableBlock.style.display = 'none';

    }

    else if (height.value) {
        if (weight.value === '') {
            weight.style.border = '1px solid red';
            weightSpan.style.display = 'block';
            tableBlock.style.display = 'none';
        }
    }

    else {
        height.style.border = '1px solid red';
        heightSpan.style.display = 'block';
        tableBlock.style.display = 'none';


    }


}

function restart() {
    tableBlock.style.display = 'none';
    heightSpan.style.display = 'none';
    weightSpan.style.display = 'none';
    inputHeight.style.border = '1px solid var(--secondary-color)';
    inputWeight.style.border = '1px solid var(--secondary-color)';
    inputHeight.value = '';
    inputWeight.value = '';
}
