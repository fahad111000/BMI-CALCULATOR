
// Weight value
var inputWeight = document.getElementById('weight');

// Height value(Meters)
var inputHeight = document.getElementById('height');

// Button Event
function clicked() {
    var BMI = inputWeight.value / (inputHeight.value * inputHeight.value);

    if(inputHeight.value == '' && inputWeight.value == '') {
        inputHeight.style.border = '1px solid red';
        inputWeight.style.border = '1px solid red';
    }

    console.log(BMI.toFixed(3))
    if (BMI < 18.5) {
        console.log("Underweight")
    }

    else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log("Healthy Weight");
    }

    else if (BMI >= 25.0 && BMI <= 29.9) {
        console.log("Over Weight");
    }

    else {
        console.log("Obesity");
    }

}