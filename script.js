
// Takes single input and automatically moves to next input label
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
taking_inputs();

function processClasses() {
  const validateAndConcatenate = (input) => {
    const digits = input.match(/[0-9]/g);

    if (!digits || digits.length !== new Set(digits).size) {
      //
      // alert("Enter Number Only");
      return 0;
      
    } else {
      return digits.join('');
    }
    // return digits; //.join('');
  }

  try {
    let classValues = '';
    for (let i = 1; i <= 4; i++) {
      const v = `class${i}`;
      const result = validateAndConcatenate(document.getElementById(v).value);
      if (result === 0) {
        // classValues = '';
        clearInputFields();
        break;
      } else {
        classValues += result;
        
      }
    }
    if(classValues.length === 4){
      const f=same_digit(classValues);
      if(f===0)
      {
        return classValues;
      }
      else{
        throw new Error("Have duplicate value ");
        return '';
      }
    }
    else{
      throw new Error("enter valid numbers");
      return '';
    }
    // return classValues;
  } catch (Error) {
    const msg = document.getElementById("errmsg");
    msg.textContent = Error.message;
  }
}


let no=1;
const button = document.querySelector("#btn");
button.addEventListener("click", () => {
  const concatenatedString = processClasses();
  // document.getElementById("slno").textContent=concatenatedString;
  console.log(concatenatedString);
  
  if(concatenatedString!==undefined){
    
    const c=checkNumbers(random4DigitNumber,concatenatedString,no);
    no++;
    // document.getElementById("occ").textContent=checkOccurence(random4DigitNumber,concatenatedString);
    if(c===true || c>10){
      random4DigitNumber = generateRandomNumber();
      console.log(random4DigitNumber);
      console.log(no);
      if(no>11)
      {
        no--;
      }
      while(no>1)
      {
        document.getElementById(`pos${no-1}`).innerText="";
        document.getElementById(`occ${no-1}`).innerHTML="";
        document.getElementById(`slno${no-1}`).innerHTML="";
        no--;
      }
      
    }
  }
  // else{
  //   const msg = document.getElementById("errmsg");
  //   msg.textContent ='enter again';
  // }
  
});

function generateRandomNumber() {
  let uniqueDigits = Array.from({ length: 10 }, (_, i) => i.toString()); // Array with digits 0 to 9
  let randomNumber = '';

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * uniqueDigits.length);
    const digit = uniqueDigits.splice(randomIndex, 1)[0];
    
    // Ensure 0 doesn't come at the beginning
    if (i === 0 && digit === '0') {
      i--; // Decrement i to repeat the loop iteration
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

// Example usage:
let random4DigitNumber = generateRandomNumber();
console.log(random4DigitNumber);



function checkNumbers(random4DigitNumber,concatenatedString,j) {

  if (concatenatedString === random4DigitNumber) {
    
    clearInputFields();
    alert("Congratulations! You've entered the correct number.");
    return true;
    
  } else {
    if(j<=10)
    {
      let counter = 0;
  
    for (let i = 0; i < 4; i++) {
      if (random4DigitNumber[i] == concatenatedString[i]) {
        counter++;
      }
    }
    console.log(counter);

    document.getElementById(`pos${j}`).textContent=counter;
    document.getElementById(`occ${j}`).textContent=checkOccurence(random4DigitNumber,concatenatedString);
    document.getElementById(`slno${j}`).textContent=concatenatedString;
    
    clearInputFields();
    alert("Try again!");                    //necessry
    return counter;
    }
    else{
      alert("You Lose");
      clearInputFields();
      
      return j;
    }
  }
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
  console.log("occ="+occuranceCounter);
  return occuranceCounter;
}

function clearInputFields() {
  document.getElementById('class1').value = "";
  document.getElementById('class2').value = "";
  document.getElementById('class3').value = "";
  document.getElementById('class4').value = "";
}

function same_digit(num) {
  

  if (num[0] === num[1] || num[0] === num[2] || num[0] === num[3] || num[1] === num[2]|| num[1] === num[3] || num[2] === num[3]) {
    // alert("Digits should be unique");
    clearInputFields();
    return 1;
  } else {
    return 0;  // Your logic for the same digit scenario
  }
}