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

function processClasses() {
    const validateAndConcatenate = (input) => {
      const digits = input.match(/[0-9]/g);

      if (!digits || digits.length !== new Set(digits).size) {
        throw new Error('Invalid input');
      }

      return digits.join('');
    };

    try {
      const class1 = document.getElementById('class1').value;
      const class2 = document.getElementById('class2').value;
      const class3 = document.getElementById('class3').value;
      const class4 = document.getElementById('class4').value;

      const result1 = validateAndConcatenate(class1);
      const result2 = validateAndConcatenate(class2);
      const result3 = validateAndConcatenate(class3);
      const result4 = validateAndConcatenate(class4);

      return result1 + result2 + result3 + result4;
    } catch (Error) {
        const msg = document.getElementById("errmsg");
        msg.textContent = Error.message;
    }
}

    const concatenatedString = processClasses();
    console.log(concatenatedString);
    const button = document.querySelector("#btn");
button.addEventListener("click", () => {
   // check_inputs();
//    processClasses();
const concatenatedString = processClasses();
console.log(concatenatedString);
    same_digit();
});



// Converts the input value into number
// function input_to_number() {
//     const num1 = document.querySelector(".num1").value;
//     const num2 = document.querySelector(".num2").value;
//     const num3 = document.querySelector(".num3").value;
//     const num4 = document.querySelector(".num4").value;

//     const number = num1 + num2 + num3 + num4;
//     console.log(number);
// }



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

