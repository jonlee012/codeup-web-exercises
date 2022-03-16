// "use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
//TODO: write a function called sayhello and add param name;
// 1. write a function (sayhello)
// 2. add param name
// 3. call the function
// 4. create a name1 variable globally
// 5. pass in name1 as an argument to the function
// // where do we pass in an argument?
// // what is the argument?
// //
// 6. create a parameter to be used inside of the function
// // what is a parameter? placeholder for the actual value
// // where do parameters get created? right after the name of the fn in parantheses

// var name1 = "Codeup!"

// function sayHello(param) {
//     // console.log("Hello, " + param);
//     return "Hello, " + param
// }
// console.log("Hello, " + name1)

//below is correct
// function sayHello(name) {
//     return "Hello, " + name
// }
// console.log(sayHello("Jon"));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
// 1. write a function (sayhello)
// 2. pass name as string literal arguemnt
// 3. store result of function in a variable 'helloMessage'
// 4. console.log 'helloMessage' to check your work

// var name1 = "Jon"
// var helloMessage = sayHello(name1)
// function sayHello(helloMessage) {
//     return "Hello, " + helloMessage
//
// }
// console.log(helloMessage)

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// 1. write a function ()
// 2. store name aas a string var myName
// 3. pass myName to sayHello function
// 4. console.log 'helloMessage' to check your work

// var myName = "Jon"
// function sayHello(helloMessage) {
//     return "Hello, " + helloMessage
// }
//
// console.log(sayHello(myName))

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

//create a function called isTwo
//takes number as a param
//return boolean value true if value is 2

// var isItTwo = isTwo(random);
// function isTwo(num) {
//     if (random == 2) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(random);
// console.log(isItTwo(3));

// var random = Math.floor((Math.random() * 3) + 1);
// function isTwo(num) {
//         // var (result === 2);
//         console.log(num);
//         isTwo(random);
//         return num === 2;
// }
// console.log(random);

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// var a = "tip";
// var b = "bill";
// function calculateTip(a, b) {
//   return a * b;
//
// }
//
// console.log(calculateTip(.18, 100));

// function calculateTip(tipPerc, totalBill){
//     var amountToTip = tipPerc * totalBill;
//     return amountToTip;
// }
//
// console.log(calculateTip(.2, 100));
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// var a = prompt("what percent tip");
// var b = prompt("enter your bill total");
// function calculateTip(a, b) {
//  return a * b;
//
// }
//
// console.log(calculateTip(a, b));

// var perc = prompt("what percent tip");
// var total = prompt("enter your bill total");
//
// function calculateTip(tipPerc, totalBill) {
//  return tipPerc * totalBill;
// }
//
// console.log(calculateTip(Number(perc),Number(total)));

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// var a = "price";
// var b = "discount";
// function applyDiscount(discount, price) {
//   // var result = ((1 - discount) * price);
//   // return result;
//   //or you can omit the var and just do return
//   return result = ((1 - discount) * price);
// }
// console.log(applyDiscount(.2,100));

