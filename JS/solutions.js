// TODO Create a function named getFirstValue that takes an array
//  containing only numbers and return the first element
function getFirstValue(numArr){
    return numArr[0]; //access first element
}
console.log(getFirstValue([4, 2, 3, 4]));
//
// console.log(getFirstValue(numArr[0,1,2]));
// function getFirstValue(myArr){
//     for (let i =  0; i > myArr.length; i++){
//         if (myArr[i] !== NaN){
//     }
//         return myArr.shift()
//     }
// }
// console.log(getFirstValue(myArr[1, 2, 3, 4, 5]));


// const arrayElements = [];
// const firstElement = arrayElements.find(function firstValue(arr){
//
// });
// console.log(firstElement(arr([1,2,3,4,5])));
// TODO Create a function named getVoteCount that takes an object as
//  an argument. Given an object containing counts of both upvotes
//  and downvotes, return what vote count should be displayed. T
//  his is calculated by subtracting the number of downvotes from upvotes.
function getVoteCount(obj){
    return obj.downVotes - obj.upVotes
}
vote = {
    downVotes: 6,
    upVotes: 4
}
console.log(getVoteCount(vote));

//     TODO Define a function named incrementItems that takes in an array,
//      add 1 to every element in the array.

function incrementItems(arr) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 1);
    }
    return newArr;
}
console.log(incrementItems([1, 2, 3, 4]));
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var incremented = numbers.map(function incremented(arr) {
//     return arr + 1
// });
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
//
// function incrementItems(arr){
//     for (let i = 0; i < arr.length; i++){
//         return arr[i] + 1;
//     }
// }
// console.log(incrementItems([1, 2, 3, 4]));
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// var incremented = numbers.map(n => n + 1);
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
//     TODO Create a function named parseArray that takes an array of integers
//       and strings. Convert integers to strings and return the new array.


//both work
function parseArray(arr){
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toString())
    }
    return newArr;
}
console.log(parseArray([1, 'yes', 'si', 5, 5, true]));
//
//below is easier method

function parseArray(arr){
    return arr.map(String)
}
console.log(parseArray([1, 'yes', 'si', 5, 5, true]));
// TODO Create a function named newWord that takes a word and returns the
//  new word without including the first character.
//both work
function newWord(word){
    return word.substring(1, word.length)
}
console.log(newWord('finger'));

//
//
function newWord(word){
    return word.slice(1)
}
console.log(newWord('finger'));
//    TODO Create a function named doubleChar that takes a string and returns
//     a string in which each character is repeated once.
function doubleChar(string){
    var newStr = "";
    for (let i = 0; i < string.length; i++){
        newStr += string[i] + string[i];
    }
    return newStr
}
console.log(doubleChar('hello'));

//   TODO  You work for a manufacturer, and have been asked to calculate the
//     total profit made on the sales of a product. You are given an object
//     containing the cost price per unit (in dollars), sell price per unit
//     (in dollars), and the starting inventory. Return the total profit made,
//      rounded to the nearest dollar.

function profit(product){
    var netPrice = product.sellPrice - product.costPrice;
    var prof = product.inventory * netPrice
    return Math.round(prof)
}
toy = {
    sellPrice: 10,
    costPrice: 5,
    inventory: 50
}
console.log(profit(toy));




"use strict";

/**
 * Write your solutions here
 *
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// TODO Write a function named isNegative that accepts a number and
//  returns true or false based on whether the input is negative.
function isNegative(num) {
    if (typeof(num) === 'number' && num < 0) {
        return true
    } else {
        return false
    }
}
console.log(isNegative(1));

// TODO Write a function named isTen that accepts a number and returns a
//  boolean that indicates whether or not that number is equal to 10.
function isTen(num) {
    if (typeof(num) === 'number' && num === 10) {
        return true
    } else {
        return false
    }
}
console.log(isTen(1));
// TODO Write a function named double that accepts a number and returns
//  the number doubled.
function double(num) {
    if (typeof(num) === 'number') {
        return num * 2
    }
}
console.log(double(1));
// TODO Write a function named remove9s that accepts an array of numbers
//  and returns an array with all the same numbers except for 9.
function remove9s(arr) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === 9) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}
// Usage
console.log(remove9s([2,5,9,1,5,8,5], ))


// TODO Write a function named average that accepts an array of numbers and
//  returns the average of those numbers.
function average(numArr){
    var total = 0;
    var count = 0;

    numArr.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}
console.log(average([2, 3, 4, 5]));
// TODO Write a function named countOdds that accepts an array of numbers and
//  returns the number of odd numbers in the array.
// function countOdds(numArr) {
//     var count = 0;
//     for (var i = 0; i < numArr.length; i++) {
//
//         if (typeof (i) === 'number' && num % 2 !== 0) {
//             count++;
//         }
//         return count;
//     }
// }
// console.log(countOdds(1));
function countOdds(arr) {
    // var myArray = []
    var counter = 0
    for(var i = 0; i < arr.length; i++) {

        if(arr[i] % 2 !== 0) {
            counter++ }
    }
    return counter
}
console.log(countOdds(1));

// TODO Write a function named averageSales that accepts an array of objects where
//  each object represents a person, and has a sales property.
//  The function should return the average of every object's sales property.
// function averageSales(arr){
//     var arrObj = person([
//         {name: 'Jim Halpert', sales: 100},
//         {name: 'Dwight Schrute', sales: 50},
//         {name: 'Andy Bernard', sales: 150},
//     ])
//     var salesTotal = arrObj[0].sales +;
//     var prof = product.inventory * netPrice
//     return Math.round(prof)
//
// }
// console.log(averageSales(arr));
function averageSales(list) {
    var sum = 0;
    var personCount = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].name == "") {
            personCount++;
        } else if (list[i].sales == 'number'){
            sum += list[i].sales;
        }
    }
    var avg = sum / personCount;
    return avg;
}

console.log(averageSales([
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150},
]));

// TODO Write a function named convertNameToObject that accepts a string that contains
//  a first name and last name separated by a space character, and
//  returns an object with properties firstName and lastName.
function convertNameToObject(string){
    var newStr = "";
    for (let i = 0; i < string.length; i++){
        newStr = JSON.parse(string[i]) + JSON.parse(string[i]);
    }
    return newStr
}
console.log(convertNameToObject('hello world'));


// TODO Write a function named countVowels that accepts a string and returns the
//  number of vowels in that string. (Don't worry about or count
//  "y" as a vowel)
// function countVowels(str) {
//     var count = 0;
//     for (let i = 0; i < str.length; i++){
//         if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
//             count++;
//         }
//         return count;
//     }
//     // if (arr.length == 1) {
//     //     var vowels = new Array("a", "e", "i", "o", "u");
//     //     var isVowel = false;
//     //     for (e in vowels) {
//     //         if (vowels[e] == arr) {
//     //             isVowel = true;
//     //         }
//     //     }
//     //     return isVowel;
//     // }
// }
// console.log(countVowels("bruisd"));
// var count = 0;
// function countVowels(str) {
//
//     // find the count of vowels
//     var count = str.match(/[aeiou]/gi).length;
//
//     // return number of vowels
//     return count;
// }
//
// console.log(countVowels("vsda"));;

// defining vowels
function countVowels(str) {
    var vowels = ["a", "e", "i", "o", "u"]
    var count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels());


// TODO Write a function named analyzeWord. It should take in a string and return an
//  object with information about the input word. The object returned should
//  have the following properties:
//  word: the original word that was passed into the function
//  numberOfLetters: the number of letters in the word
//  numberOfVowels: the number of vowels in the word


// TODO Write a function named capitalizeName that accepts a string that is a first and
//  last name separated by a space, and returns a string that that has the first and
//  last names capitalized.
//  For this problem, you may assume that the function will only ever be called with a string that has two words separated by a single space.

function capitalizeName (str){
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    var str = arr.join(" ");
    return str;
}
console.log(capitalizeName("hello world"));
