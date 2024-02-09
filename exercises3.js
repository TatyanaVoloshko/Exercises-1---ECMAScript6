// Exercise 1
// The following function returns true if the parameter age is greater than 18.

// Otherwise, it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }

// console.log(checkAge(20))

// Rewrite it, to perform the same, but without if...else, and use the arrow function.

// const checkAge = age => {
//    if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }

// console.log(checkAge(15));

// ======================================================================

// Exercise 2
// Write a function pow(x, n) that returns x in power n.
// Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// P.S.In this task, the function should support only the natural values of n:
// integers up from 1.

// let y = 1

// const pow = (x, n) => {
//     for (i = 0; i < n; i++) {
//         y *= x
//     }

//      return y;
// }

// console.log(pow(3, 3));

//===============================================================================
 

// Exercise 3
// Replace Function Expressions with arrow functions in the code:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no()
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed.") },
//   function() { alert("You canceled the execution.") }
// )

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes()
//   else no()
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed.") },
//   function() { alert("You canceled the execution.") }
// )

//=========================================================================


// Exercise 4
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.


// class Calculator {
//     constructor() {
//         this.read = function () {
//             this.num1 = +prompt("Enter the first number?", 0);
//             this.num2 = +prompt("Enter the second number?", 0);
//         };

//         this.sum = function () {
//             return this.num1 + this.num2;
//         };

//         this.mul = function () {
//             return this.num1 * this.num2;
//         };
//     }
// }

// let calculator = new Calculator()

// calculator.read();
// alert( 'Sum: ' + calculator.sum() );
// alert("Mul: " + calculator.mul());
// ========================================================================

// Exercise 5
// Write a function min(a, b) which returns the least of two numbers a and b.
// Use the arrow function along with the question mark operator ?

// const min = (a, b) => {
//     let leastNum = a < b ? a : b
//     return leastNum
// }

// console.log(min(10, 15))