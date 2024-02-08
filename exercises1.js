// Exercise 1
// We have a simple object:

// let user = {
//   name: "John",
//   years: 30
// }
// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)

// let user = {
//   name: "John",
//   years: 30
// }

// let { name, years: age, isAdmin = false } = user

// console.log(name, age, isAdmin)
//===============================================================


// Exercise 2
// Give the right name:

// Create the variable with the name of our planet.
// How would you name such a variable ?
// Create the variable to store the name of the current visitor.
// How would you name that variable ?

// const planet = 'Earth'
// const user = 'Max'

//================================================================


// Exercise 3
// Look at the code. What will be the result of the call at the last
// line and why ?

// let phrase = "Hello"

// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`)
//   }
// }

// sayHi()//Hello John

//we use template string, where return string with variables phrase and user.

//==============================================================

// Exercise 4
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// let user = {}
// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'Pete'
// delete user.name
// console.log(user)

//==================================================================

// Exercise 5
// Is it possible to change an object declared with const,
// how do you think and why ?
// Yes, if a constant is an object, its properties can be added,
// updated, or removed.

// const user = {
//   name: "John"
// }

// does it work?
// user.name = "Pete"

//===================================================================

// Exercise 6
// We have an object storing the salaries of our team:

// let salaries = {
//   Fred: 100,
//   Ted: 160,
//   Ghaith: 130
// }
// Write a code to sum all salaries and store in the variable sum.
//If salaries is empty, then the result must be 0.

// let total = 0

// for (let key in salaries) {

//     total +=salaries[key]
// }

// console.log(total)

//====================================================================

// Exercise 7
// Rewrite this if using the ternary operator '?':

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// let result = (a + b < 4) ? console.log("Below") : console.log("Over");
// ====================================================================

// Exercise 8
// Rewrite if..else using multiple ternary operators '?'.

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let message =
//   login == "Employee"
//     ? "Hello"
//     : login == "Director"
//     ? "Greetings"
//     : login == ""
//     ? "No login"
//     : ""