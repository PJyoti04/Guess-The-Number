// Takes single input and automtically moves to next input label
function taking_inputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input, index) => {
        input.addEventListener('input', (event) => {
            const value = event.target.value;
            if (value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });
    });
}
taking_inputs();

function check_inputs() {
    const num1 = parseInt(document.querySelector(".num1").value, 10);
    const num2 = parseInt(document.querySelector(".num2").value, 10);
    const num3 = parseInt(document.querySelector(".num3").value, 10);
    const num4 = parseInt(document.querySelector(".num4").value, 10);

    if (num1 <= 0 || num1 > 9 || num2 <= 0 || num2 > 9 || num3 <= 0 || num3 > 9 || num4 <= 0 || num4 > 9) {
        alert("Number must be between 1-9");
    } else {
        input_to_number();
    }
}


// Converts the input value into number
function input_to_number() {
    const num1 = document.querySelector(".num1").value;
    const num2 = document.querySelector(".num2").value;
    const num3 = document.querySelector(".num3").value;
    const num4 = document.querySelector(".num4").value;

    const number = num1 + num2 + num3 + num4;
    console.log(number);
}


const button = document.querySelector("#btn");
button.addEventListener("click", () => {
    check_inputs();
    same_digit();
});

function same_digit() {
    const num1 = document.querySelector(".num1").value;
    const num2 = document.querySelector(".num2").value;
    const num3 = document.querySelector(".num3").value;
    const num4 = document.querySelector(".num4").value;

    if (num1 === num2 || num1 === num3 || num1 === num4 || num2 === num3 || num2 === num4 || num3 === num4) {
        alert("Digits should be unique");
    } else {
        // Your logic for the same digit scenario
    }
}
