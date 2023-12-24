                                      // Chapter-5 Project

                                      // Create a recursive function
/*Create a recursive function that counts up to 10. Invoke the function with different 
start numbers as the arguments that are passed into the function. The function 
should run until the value is greater than 10.*/

// Answer:
const countUpToTen = (currentNumber) => {
    if (currentNumber > 10) {
      return;
    }
    // Output the current value
    console.log(currentNumber);
    // Recursive call with the next number
    countUpToTen(currentNumber + 1);
  };
  // Invoke the function with different start numbers
  console.log("Counting from 1:");
  countUpToTen(1);
  
  console.log("\nCounting from 5:");
  countUpToTen(5);
  
  console.log("\nCounting from 8:");
  countUpToTen(8);
  

                                      // Set timeout order
/*Use the arrow format to create functions that output the values one and two to the 
console. Create a third function that outputs the value three to the console, and then 
invokes the first two functions.
Create a fourth function that outputs the word four to the console and also use 
setTimeout() to invoke the first function immediately and then the third function.
What does your output look like in the console? Try to get the console to output:
Four
Three
One
Two
One*/

// Answer:
// First function
const outputOne = () => {
    console.log("One");
  };
  
  // Second function
  const outputTwo = () => {
    console.log("Two");
  };
  
  // Third function
  const outputThree = () => {
    console.log("Three");
    outputOne(); 
    outputTwo(); 
  };
  
  // Fourth function
  const outputFour = () => {
    console.log("Four");
  };
  setTimeout(() => {
    outputOne();
  }, 0);
  setTimeout(() => {
    outputThree();
  }, 0);
 outputFour();
  
                                       // Self-check quiz
//1. What value is output into the console?
let val = 10;
function tester(val){
 val += 10;
 if(val < 100){
 return tester(val);
 }
 return val;
}
tester(val);
console.log(val);

// Answer:10

//2. What will be output into the console by the below code?
let testFunction = function(){
 console.log("Hello");
}();

// Answer:Hello

//3. What will be output to the console?
(function () {
 console.log("Welcome");
})();
(function () {
 let firstName = "Laurence";
})();
let result = (function () {
 let firstName = "Laurence";
 return firstName;
})();
console.log(result);
(function (firstName) {
 console.log("My Name is " + firstName);
})("Laurence"); 
/* Answer:
Welcome
Laurence
My Name is Laurence*/

//4. What will be output to the console?
let test2 = (num) => num + 5;
console.log(test2(14)); 
// Answer:19

//5. What will be output to the console?
var addFive1 = function addFive1(num) {
return num + 2;
};
let addFive2 = (num) => num + 2;
console.log(addFive1(14)); 
// Answer:16