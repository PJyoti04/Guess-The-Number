function taking_inputs() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input, index) => {
      input.addEventListener('input', (event) => {
        const value = event.target.value;
        if (value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      })
    })
  }
  
  function processClasses() {
    const validateAndConcatenate = (input) => {
      const digits = input.match(/[0-9]/g);
  
      if (!digits || digits.length !== new Set(digits).size) {
        return 0;
      } else {
        return digits.join('');
      }
    }
  
    try {
      let classValues = '';
      for (let i = 1; i <= 4; i++) {
        const v = `class${i}`;
        const result = validateAndConcatenate(document.getElementById(v).value);
        if (result === 0) {
          clearInputFields();
          break;
        } else {
          classValues += result;
        }
      }
      if (classValues.length === 4) {
        const f = same_digit(classValues);
        if (f === 0) {
          return classValues;
        } else {
          throw new Error("Have duplicate value ");
        }
      } else {
        throw new Error("Enter valid numbers");
      }
    } catch (Error) {
      const msg = document.getElementById("errmsg");
      msg.textContent = Error.message;
    }
  }
  
  function generateRandomNumber() {
    let uniqueDigits = Array.from({ length: 10 }, (_, i) => i.toString());
    let randomNumber = '';
  
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * uniqueDigits.length);
      const digit = uniqueDigits.splice(randomIndex, 1)[0];
  
      if (i === 0 && digit === '0') {
        i--;
      } else {
        randomNumber += digit;
      }
    }
  
    for (let i = 1; i <= 4; i++) {
      const digitElement = document.getElementById(`digit${i}`);
      digitElement.textContent = randomNumber[i - 1];
    }
  
    return randomNumber;
  }
  
  function checkNumbers(random4DigitNumber, concatenatedString) {
    let counter = 0;
  
    for (let i = 0; i < 4; i++) {
      if (random4DigitNumber[i] == concatenatedString[i]) {
        counter++;
      }
    }
    console.log(counter);
    return counter;
  }

  function checkOccurence(random4DigitNumber, concatenatedString){
    let occuranceCounter=0;
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(random4DigitNumber[i] == concatenatedString[j]){
                occuranceCounter++;
            }
        }
    }
    console.log(occuranceCounter);
    return occuranceCounter;
  }
  
  function same_digit(num) {
    if (num[0] === num[1] || num[0] === num[2] || num[0] === num[3] ||
        num[1] === num[2] || num[1] === num[3] || num[2] === num[3]) {
      clearInputFields();
      return 1;
    } else {
      return 0;
    }
  }
  
  function clearInputFields() {
    document.getElementById('class1').value = "";
    document.getElementById('class2').value = "";
    document.getElementById('class3').value = "";
    document.getElementById('class4').value = "";
  }
  
  const button = document.querySelector("#btn");
  button.addEventListener("click", () => {
    const concatenatedString = processClasses();
    console.log(concatenatedString);
    const c = checkNumbers(random4DigitNumber, concatenatedString);
    const d = checkOccurence(random4DigitNumber, concatenatedString);
    if (c === 4) {
      random4DigitNumber = generateRandomNumber();
      console.log(random4DigitNumber);
    }
  });
  
//   const button = document.querySelector("#btn");

  // Function to handle button click and Enter key press
//   function handleButtonClick() {
//     const concatenatedString = processClasses();
//     console.log(concatenatedString);
//     const c = checkNumbers(random4DigitNumber, concatenatedString);
//     const d = checkOccurence(random4DigitNumber, concatenatedString);
//     if (c === 4) {
//       random4DigitNumber = generateRandomNumber();
//       console.log(random4DigitNumber);
//     }
//   }
  
//   button.addEventListener("click", handleButtonClick);
  
//   button.addEventListener("keydown","click", (event) => {
//     if (event.key === 'Enter' || event.keyCode === 13) {
//       handleButtonClick();
//     }
//   });

  // Example usage:
  let random4DigitNumber = generateRandomNumber();
  console.log(random4DigitNumber);
  
  // Initial setup
  taking_inputs();
  