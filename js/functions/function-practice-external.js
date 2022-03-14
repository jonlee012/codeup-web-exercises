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

function myInfo(name, age) {
        console.log(name);
        console.log(age);
}

myInfo("Jon", 35);
// myInfo('Mike',29);

function doMathThings(){
        return 4 + 8 * 5;
}
console.log(doMathThings());


// function add (second, fourth) {
//     return second+fourth;
// }
// var sum = add(2, 4);
// alert (sum);

