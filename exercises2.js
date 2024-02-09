// Exercise 1
// Write a function filterRange(arr, a, b) that gets an array arr, l
// ooks for elements between a and b in it and returns an array of them.

// The function should not modify the array.
// It should return the new array.For instance:
// let arr = [5, 3, 8, 1]

// let filtered = filterRange(arr, 1, 4)

// alert( filtered )  // 3,1 (matching values)

// alert( arr )      // 5,3,8,1 (not modified)


// let arr = [5, 3, 8, 1];

// const filterRange = (arr, a, b) => {
//     let newArr = [];

//     const num = arr.filter(index => {
//       if (index >= a && index <= b) {
//         return index;
//       }
//     });

//     newArr.push(num[0], num[num.length - 1]);
//  return newArr


// }

// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// =========================================================


// Exercises 2
// You have an array of user objects, each one has user.name.
// Write the code that converts it into an array of names.


// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 }
// let mary = { name: "Mary", age: 28 }

// let users = [ john, pete, mary ]

// let names = users.map(user => user.name)

// console.log(names)
// =============================================================


// Exercises 3
// Write the function getAverageAge(users) that gets an array 
// of objects with property age and gets the average.

// The formula for the average is (age1 + age2 + ... + ageN) / N. 

// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 }
// let mary = { name: "Mary", age: 29 }

// let arr = [john, pete, mary]

// const getAverageAge = users => {
//     let averAge = 0;

//     users.map( ages => {
//       averAge += ages.age / arr.length;
//     });

//     console.log(averAge);

// }

// getAverageAge(arr)




