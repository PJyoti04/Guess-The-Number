// // Takes single input and automtically moves to next input label
// function taking_inputs() {
//   const inputs = document.querySelectorAll('input');
//   inputs.forEach((input, index) => {
//       input.addEventListener('input', (event) => {
//           const value = event.target.value;
//           if (value.length === 1 && index < inputs.length - 1) {
//               inputs[index + 1].focus();
//           }
//       });
//   });
// }
// taking_inputs();

// function processClasses() {
//   const validateAndConcatenate = (input) => {
//     const digits = input.match(/[0-9]/g);

//     if (!digits || digits.length !== new Set(digits).size) {
//       // 
//       alert("Enter Number Only");
//       return 0;
//       // document.getElementById('class1').value="";
//       // document.getElementById('class2').value="";
//       // document.getElementById('class3').value="";
//       // document.getElementById('class4').value="";
//     }
//     else{
//       return digits;//.join('');
//     }
//     // return digits;//.join('');
//   };

//   try {
//     const class1 = document.getElementById('class1').value;
//     const class2 = document.getElementById('class2').value;
//     const class3 = document.getElementById('class3').value;
//     const class4 = document.getElementById('class4').value;
//     let i=1;s="";
  
//     while(i<=4){
//       const v="class"+i;
//       const j=v;
//       const result=validateAndConcatenate(v);
//       if(result === 0)
//       {
//         document.getElementById('class1').value="";
//         document.getElementById('class2').value="";
//         document.getElementById('class3').value="";
//         document.getElementById('class4').value="";
//       }
//       else{
//         s+=result;
//         i++;
//       }
//     }
    
//     // else{
//     //   document.getElementById('class1').value="";
//     //   document.getElementById('class2').value="";
//     //   document.getElementById('class3').value="";
//     //   document.getElementById('class4').value="";
//     // }
//     // const result1 = validateAndConcatenate(class1);
//     // const result2 = validateAndConcatenate(class2);
//     // const result3 = validateAndConcatenate(class3);
//     // const result4 = validateAndConcatenate(class4);
//     return s;
//     // return result1 + result2 + result3 + result4;
//   } catch (Error) {
//       const msg = document.getElementById("errmsg");
//       msg.textContent = Error.message;
//   }
// }

//   // const concatenatedString = processClasses();
//   // console.log(concatenatedString);
//   const button = document.querySelector("#btn");
// button.addEventListener("click", () => {
//  // check_inputs();
// //    processClasses();
// const concatenatedString = processClasses();
// console.log(concatenatedString);
//   // same_digit();
// });



// // Converts the input value into number
// // function input_to_number() {
// //     const num1 = document.querySelector(".num1").value;
// //     const num2 = document.querySelector(".num2").value;
// //     const num3 = document.querySelector(".num3").value;
// //     const num4 = document.querySelector(".num4").value;

// //     const number = num1 + num2 + num3 + num4;
// //     console.log(number);
// // }



// function same_digit() {
//   const num1 = document.querySelector(".num1").value;
//   const num2 = document.querySelector(".num2").value;
//   const num3 = document.querySelector(".num3").value;
//   const num4 = document.querySelector(".num4").value;

//   if (num1 === num2 || num1 === num3 || num1 === num4 || num2 === num3 || num2 === num4 || num3 === num4) {
//       alert("Digits should be unique");
//   } else {
//       // Your logic for the same digit scenario
//   }
// }
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
        // document.getElementById('class1').value="";
        // document.getElementById('class2').value="";
        // document.getElementById('class3').value="";
        // document.getElementById('class4').value="";
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
          document.getElementById('class1').value="";
          document.getElementById('class2').value="";
          document.getElementById('class3').value="";
          document.getElementById('class4').value="";
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
  
  const button = document.querySelector("#btn");
  button.addEventListener("click", () => {
    const concatenatedString = processClasses();
    console.log(concatenatedString);
    const c=checkNumbers(random4DigitNumber,concatenatedString);
    if(c===1){
      random4DigitNumber = generateRandomNumber();
      console.log(random4DigitNumber);
    }
    // same_digit();
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
  
    return randomNumber;
  }
  
  // Example usage:
  let random4DigitNumber = generateRandomNumber();
  console.log(random4DigitNumber);
  
  function checkNumbers(random4DigitNumber,concatenatedString) {
    // const num1 = parseInt(document.querySelector(".num1").value, 10);
    // const num2 = parseInt(document.querySelector(".num2").value, 10);
    // const num3 = parseInt(document.querySelector(".num3").value, 10);
    // const num4 = parseInt(document.querySelector(".num4").value, 10);
  
    // const userInput = `${num1}${num2}${num3}${num4}`;
  
    if (concatenatedString === random4DigitNumber) {
      // alert("Congratulations! You've entered the correct number.");
      document.getElementById('class1').value = "";
      document.getElementById('class2').value = "";
      document.getElementById('class3').value = "";
      document.getElementById('class4').value = "";
      alert("Congratulations! You've entered the correct number.");
      return 1;
      // random4DigitNumber = generateRandomNumber();
      // console.log(random4DigitNumber);
  
      // checkNumbers(random4DigitNumber,concatenatedString)
    } else {
      document.getElementById('class1').value = "";
      document.getElementById('class2').value = "";
      document.getElementById('class3').value = "";
      document.getElementById('class4').value = "";
      alert("Try again!");
    }
  }
  
  function same_digit(num) {
    // const num1 = parseInt(document.querySelector(".num1").value, 10);
    // const num2 = parseInt(document.querySelector(".num2").value, 10);
    // const num3 = parseInt(document.querySelector(".num3").value, 10);
    // const num4 = parseInt(document.querySelector(".num4").value, 10);
  
    if (num[1] === num[2] || num[1] === num[3] || num[1] === num[4] || num[2] === num[3]|| num[2] === num[4] || num[3] === num[4]) {
      // alert("Digits should be unique");
      document.getElementById('class1').value="";
      document.getElementById('class2').value="";
      document.getElementById('class3').value="";
      document.getElementById('class4').value="";
      return 1;
    } else {
      return 0;  // Your logic for the same digit scenario
    }
  }