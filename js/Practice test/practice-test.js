//
//
// 1. Create a function named `calcAge` that takes the age and return the age in days.
// If input is not numeric, calcAge should return false.
//
// function calcAge(aa){
//     if(typeof(aa) !== isNaN(aa)){
//         var ageDays = (aa * 365)
//     } else{
//         return false
//     }
//     return ageDays
// }
// console.log(calcAge('two'));
//
function calcAge(aa) {
    if (typeof(aa) === 'number') {
        var ageDays = (aa * 365);
    } else {
        return false
    }
    return ageDays;
}
console.log(calcAge(2));
//
// 2. Create a function named `increment` that takes a number as an argument, increments
// the number by +1 and returns the result. If input is not numeric, increment should return false.
//
function increment(bb) {
    if (typeof(bb) === 'number') {
        // var addOne = (++bb);
        var addOne = bb +1;
    } else {
        return false
    }
    return addOne;
}
console.log(increment(2));
//
// function increment(bb){


//
// 3. Define a function named `isOdd` that takes in a number, return true is that number is odd.
// Return false if the number is either not a number or even.
//
function isOdd(cc) {
    if (typeof(cc) === 'number' && cc % 3) {
        return true
    } else {
        return false
    }
}
console.log(isOdd(1));
//
// 4. Write a function named `oddArr`. Given the array of
// var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] return the odd numbers.
//
function oddArr(num) {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return num % 2;
}
// oddArr.forEach(number => {
//     if (number % 3 == 0) {
//         oddNum.push(number);
//     }
// });

console.log(num);


// 5. Define a function named `creditCard` that takes a credit card number and
// only displays the last four characters. The rest of the card number must be replaced by ************.
//
//
// 6. create a function named `AlphabetSoup` that takes a string and returns a
// string with its letters in alphabetical order. Return false if string is empty or null
//
//
// 7. create a function named `reverse` that takes in and reverses an array.
// # regulus-second-js-reassessment-review


// Your solutions will go here :)

// Problem 1
// Define a function named lowerCase that takes in an input and returns that
// input as a string in all lower case letters.
// Returns false if the input passed is not a string.

function lowerCase(aa){
    if (typeof aa !== 'string'){
        return false;
    }
    else{
        return aa.toLowerCase();
    }
}
console.log(aa);

//     function lowerCase(input) {
//         console.log(typeof input)
// //    object boolean undefined number
//         if (typeof input === "object" || typeof input === "boolean" || typeof input === "undefined" || typeof input === "number") {
//             return false;
//         }
// //     if (typeof input !== "string") {
// //         return false;
// //     }
//         else {
//             // lowercases input, does not check for other inputs
//             return input.toLowerCase();
//         }
//     }

// Problem 2
// Define a function named isAllLowerCase that takes in a string and returns true
// if all characters in the string are lowercase otherwise it should return false.

// function isAllLowerCase(bb){
//     if (typeof bb === "" && bb.toLowerCase() !== bb){
//         return bb.toLowerCase();
//     }
//     else{
//         return false;
//     }
// }


function isAllLowerCase(bb){
    if (typeof bb == 'string'){
        return String(bb).toLowerCase() === bb;
    }
    else{
        return false;
    }
}



// function isAllLowerCase(ee){
//
// if (ee.toLowerCase() === ee && ee !== ee.toUpperCase()) {
//     return true;
// } else if (typeof bb == "" && bb.toLowerCase()){
//     return bb.toLowerCase("");
// } else{
//     return false;
// }
// }


// Problem 3
// Define a function named isAllUpperCase that takes in a string and returns true
// if all characters in the string are uppercase otherwise it should return false.

function isAllUpperCase(cc){
    if (typeof cc == 'string'){
        return String(cc).toUpperCase() === cc;
    }
    else{
        return false;
    }
}
// Problem 4
// Define a function named isNotPalindrome that takes in a string and returns true
// if that string is not palindrome, if the string is palindrome should return false.
function isNotPalindrome(dd) {
    for (var i = 0; i < dd.length / 2; i++) {
        if (dd[i] == dd[dd.length - 1 -i] && dd == '') {
            return false;
        }else{
        }
    }
    return true;
}


// function isNotPalindrome(str) {
//     if ()
//     return true;
// } else{
//     return false;
// }
// isNotPalindrome("eye");

// Problem 5
// Define a function named multiplyBy2 that takes in an input and multiplies it by 2
// if the input is numeric. If the input is Not A Number, then return false.

// function multiplyBy2(ff){
//     //get input to change to number if possible
//     var num1 = Number(ff);
//     console.log(ff);
//     console.log(typeof num1);
//     if (num1 !== 'number'){
//         return false;
//     }
//     var solution = num1 * 2;
//     console.log(solution);
//     return solution;
//     return num1 * 2;
// }
// console.log(multiplyBy2());
// function multiplyBy2(ff){
//     //get input to change to number if possible
//     var num1 = Number(ff);
//     console.log(ff);
//     console.log(typeof num1);
//     if (typeof num1 !== 'number' || !ff || ff == 'boolean'){
//         return false;
//     } else{
//         return num1 * 2;
//     }
//     // var solution = num1 * 2;
//     // console.log(solution);
//     // return solution;
//     // return num1 * 2;
// }
// console.log(multiplyBy2());

function multiplyBy2(ff) {
    var num2 = parseFloat(ff);
    if (isNaN(num2)) {
        return false;
    } else {
        return num2 * 2;
    }
}

console.log(multiplyBy2());

// function multiplyBy2(ff){
//     if (isNaN(parseFloat(ff))) {
//         return false;
//     } else if (parseFloat(ff) < 0) {
//         return false;
//     } else {
//         return (ff * 2)
//     }
// }
// console.log(multiplyBy2());

// Problem 6
// Define a function named convertHourToSec that takes in one input Hours.
// Return the conversation of the number of hours into total seconds.
// If the input is not numeric or a numeric string, convertHourToSec, should return false.

// function convertHourToSec(gg){
//     if (typeof gg == 'number'){
//         return gg * 3600
//     } else{
//         return false;
//     }
// }
// console.log(convertHourToSec());

function convertHourToSec(gg) {
    if (isNaN(parseFloat(gg))) {
        return false;
    } else if (parseFloat(gg) < 0) {
        return false;
    } else {
        return gg * 3600
    }
}
console.log(convertHourToSec());

// Problem 7
// Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number.
// If any of the 3 inputs is missing or non-numeric, then return false.

function getLowestNumber(hh,ii,jj){
    if (typeof hh === 'number' && typeof ii === 'number' && typeof jj === 'number'){
        return Math.min(hh, ii, jj);
    } else{
        return false;
    }
}
Math.min(getLowestNumber());


//is there an easier way to group arguments?

// Problem 8
// Write a function named addStringLengths that takes in two inputs.
// If both inputs provided are strings, addStringLengths returns
// the sum after adding the length (number of characters) of both strings.
// If either or both inputs are not strings, return false.

function addStringLengths(a, b){
    if (typeof a === 'string' && b === 'string'){
        var txt = (a + b);
        // var len =
        return txt.length;
    } else{
        return false;
    }
}
console.log(addStringLengths("mom", "dad"));

// Problem 9
// Write a function named subtract that takes in two inputs.
// If both inputs provided are numeric or numeric strings, subtract will
// return the difference when the second input is subtracted from the first input.
// If one or both inputs is not numeric or numeric strings, subtract should return false.
// var result;


// function subtract(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return parseInt(a) - parseInt(b);
//     } else{
//         return false;
//     }
// }

function subtract(a, b) {
    var num3 = parseFloat(a);
    var num4 = parseFloat(b);
    if (isNaN(num3) || isNaN(num4)) {
        return false;
    } else {
        return num3 - num4;
    }
}

console.log(subtract());

// var isNumber;
// function subtract(x, y){
//     if (isNumber(x, y) === )
// }

// Problem 10
// Write a function named calculateChange that takes in two inputs, totalPaid and totalCost.
// If both inputs are numeric or numeric strings, calculateChange should return the change after subtracting the cost from the amount paid.
// The return should be in $x.xx format as a string Note: it should return with two decial places.
// If either or both inputs are not numeric or numeric strings, calculateChange should return false.


// var num;
// function calculateChange(c, d) {
//     if (typeof c == 'number' && typeof d == 'number') {
//         return num = "$" + "parseInt(c) - parseInt(d)";
//     } else{
//         return false;
//     }
// }
// calculateChange();
function calculateChange(c, d) {
    var num5 = parseFloat(c);
    var num6 = parseFloat(d);
    if (isNaN(num5) || isNaN(num6)) {
        return false;
    } else {
        return "$" + num3 - num4;
    }
}


// if ( !(/[0-9]/.test(input))

// // 1. Make a function named isOdd(number)
// function isOdd(e) {
//     if (typeof(e) === 'number' && e % 3) {
//         return false;
//     } else {
//         return true;
//     }
// }
// console.log(isOdd(2));
// //
// // 2. Make a function named isEven(number)
// function isEven(f) {
//     if (typeof f === 'number' && f % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isEven(2));
// //
// // 3. Make a function named isMultipleOfFive(input)
// function isMultipleOfFive(h){
//     var remainder = h % 5;
//     if (remainder == 0){
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(isMultipleOfFive(2));
// //
// // 4. Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
// function isMultipleOf(x, y){
//     var remain = x % y;
//     if (remain == 0){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isMultipleOf(2, 2));
// //
// // 5. Make a function named isVowel(letter)
// function isVowel(char) {
//     if (char.length == 1) {
//         var vowels = new Array("a", "e", "i", "o", "u");
//         var isVowel = false;
//         for (e in vowels) {
//             if (vowels[e] == char) {
//                 isVowel = true;
//             }
//         }
//         return isVowel;
//     }
// }
// console.log(isVowel("b"));

// function isVowel(letter){
//     if (( !(/[aeiou]/.test(letter)))){
//         return false;
//     }
// }
// console.log(isVowel("a"));

// 6. Write a function called first(input) that returns the first character in the provided string.
//
// 7* Create a function that takes in two string inputs.
// -- If the second string input is present in the first, return the first input string with the second input string removed from it.
// -- If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
// -- If the second string input is not present in the first, return the first string as entered in the function.
//
// 8. Make a function named isSpace(letter) that returns if a character is a space character
//
// 9. Write a function named squareRoot(n) that returns the square root of the input
//
// 10* create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
//
// 11. Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
//
// 12. Write a function named getRandomQuote().
// //   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
// //   getRandomQuote should generate a random number between 0 and the array's length minus 1
// //   use the randomly generated number as your index
// //   return a random quote.
//
// 13. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers