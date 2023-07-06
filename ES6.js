// 1. In this exercise, you’ll refactor some ES5 code into ES2015.
// ES5 Global Constants
// var PI = 3.14;
// PI = 42; // stop me from doing this!
// ES2015 Global Constants
/* Write an ES2015 Version */

const PI = 3.14;
// cannot redeclare or reassign a const variable
// const is appropriate here because PI is a mathematical constant

// 2. Quiz
// •	What is the difference between var and let?
 - you can reassign and redeclare with var, but you cannot redeclare with let. You can access a hoisted variable with var. Let creates block scope. 

// •	What is the difference between var and const?
You cannot reassign or redeclare with const because it is constant. Const variables are not 'hoisted' (lifted to the top of the function) like var variables.

// •	What is the difference between let and const?
You can reassign let, but not const.

// •	What is hoisting?
Hoisting describes how the JS compiler works. Variables or functions can be hoisted or lifted to the top of the script, so they can be used `before` they are declared.

// 3. ES5 Map Callback
// function double(arr) {
//   return arr.map(function(val) {
//     return val * 2;
//   });
// }
// ES2015 Arrow Functions Shorthand
// Refactor the above code to use two arrow functions. Turn it into a one-liner.

const double = arr => arr.map(val => val*2);

// 4. Refactor the following function to use arrow functions:
// Replace ALL functions with arrow functions:

// function squareAndFindEvens(numbers){
// 	var squares = numbers.map(function(num){
// 	  return num ** 2;
// 	});
// 	var evens = squares.filter(function(square){
// 	  return square % 2 === 0;
// 	});
// 	return evens;
//   }

const squareAndFindEvens = squares => squares.map(num => num*2).filter(square => square%2 ===0);


