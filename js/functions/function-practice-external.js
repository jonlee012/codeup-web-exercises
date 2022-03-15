//JS FUNCTIONS

//syntax

//function ----> js keyword (notify that we are going to start a function)
//name of the function --> camelcase, totally up to me
// (( ---> potentially hold parameters
// (parameter1, parameter2) --> data required for the function to run
// ---> passed in from outside-of-the-function sources
// {} ---> define our cunction code block
// {code goes here} --> actual code to be run lives inside of the brackets

//example below
// function printsMyName(){
//     console.log("jon Lee")
// };
// printsMyName();


// var myName = "Jon"
// //someFunction(); // call the function someFunction()
// //parseInt("42"); // call the parseInt function with an argument of "42"
//

// function myInfo(name, age) {
//         console.log(name);
//         console.log(age);
// }
//
// myInfo("Jon", 35);
// // myInfo('Mike',29);
//
// function doMathThings(){
//         return 4 + 8 * 5;
// }
// console.log(doMathThings());


// function add (second, fourth) {
//     return second+fourth;
// }
// var sum = add(2, 4);
// alert (sum);

//global scope
// var myNotes = "my notes blah blah blah";
// var temp = 86;
// var isACWorking = false;






//functions
// TODO: wrote a function that takes in the isColdOutside and returns a
//  string that says "you'll need a jacket" if it IS cold outside

// isCOldOutside -- the variable we'll be using to verify whether or
// not to print out you'll need a jacket
// name of the function
// do we need parameters? yes
// // what are parameters?
// // what are we naming the parameters?
// // how do we use parameters inside of a function?
// -pass in variable we're actually going to be using inside of our function
//- return something from function
// // what's being returned? a string
// // where is the string being defined? we can create a variable or
// //return the string directly
// if/else --> if it isColdOutside is true, return string "you'll need a jacket"
// if it's  fakse return --> exit function or return string "you don't need a jacket"

// 1. write a function
// 2. function needs parameters
// 3. call the function
// 4. pass in the arguments (isColdOutside)
// 5. inside of function: check IF isColdOutside == true / else exit
// var isColdOutside = false;
//
// function isCold('jacket'){
//
//         if('jacket' === 'true'){
//                 return console.log "you'll need a jacket";
//         }else(){
//                 return console.log "you don't need a jacket";
//         }
//
// }
//
// isCold(isColdOutside);



//FUNCTIONS

//functions without parameters
//TODO: write a function that adds 4 + 19;
// 1. write a function (addNumbers)
// 2. // code: 4+19;
// 3. call the function

// function addNumbers(){
//         console.log(4 + 19);
// }
// addNumbers();


//function with a return
// function returnSum(){
//
//         //option 1: create a variable that stores the sum and return that variable
//         var sum = 4 + 19;
//         return sum;
//
//         //option 2: return the sum of 4+19 directly
//         // return 4 + 19;
// }
// console.log (returnSum());

//functions with 1 parameter that doesn't return anything
//TODO: write a function that adds num1 to 25;
// 1. write a function (addNumbers)
// 2. add num1 + 25
// 3. call the function
// 4. create a num1 variable globally
// 5. pass in num1 as an argument to the function
// // where do we pass in an argument?
// // what is the argument?
// //
// 6. create a parameter to be used inside of the function
// // what is a parameter? placeholder for the actual value
// // where do parameters get created? right after the name of the fn in parantheses

// var num2 = 20;
// var num1 = 18;
//
// console.log("num1: ",num1);
// console.log("num2: ",num2);
//
// function sumVar(param) {
//         console.log(param + 25);
// }
//
// sumVar(num2);

// var num2 = 20;
// var num1 = 18;
// //var sum = sumVar();
//
// console.log("num1: ",num1);
// console.log("num2: ",num2);
//
// function sumVar(param) {
//         console.log(param + 25);
//         return param + 25;
//
// }
//
// sumVar(num2);

console.log("A) before printCity gets defined")
function printCity(location){
        console.log("B) hey eugene");
        return location;
        console.log("C) hey there delilah");
}
console.log("D) before printCity gets called");
printCity("Dallas");
console.log("E) after printCity gets called");
