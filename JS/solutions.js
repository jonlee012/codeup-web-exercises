// TODO Create a function named getFirstValue that takes an array
//  containing only numbers and return the first element
let myArr = [];
function getFirstValue(myArr){
    for (let i =  0; i > myArr.length; i++){
        if (myArr[i] !== NaN){
        }
        return myArr.shift()
    }
}
console.log(getFirstValue(myArr[1, 2, 3, 4, 5]));


// const arrayElements = [];
// const firstElement = arrayElements.find(function firstValue(arr){
//
// });
// console.log(firstElement(arr([1,2,3,4,5])));
// TODO Create a function named getVoteCount that takes an object as
//  an argument. Given an object containing counts of both upvotes
//  and downvotes, return what vote count should be displayed. T
//  his is calculated by subtracting the number of downvotes from upvotes.


//     TODO Define a function named incrementItems that takes in an array,
//      add 1 to every element in the array.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var incremented = numbers.map(function incremented(arr) {
    return arr + 1
});
console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function incrementItems(arr){
    for (let i = 0; i < arr.length; i++){
        return arr[i] + 1;
    }
}
console.log(incrementItems([1, 2, 3, 4]));
//     TODO Create a function named parseArray that takes an array of integers
//       and strings. Convert integers to strings and return the new array.

// TODO Create a function named newWord that takes a word and returns the
//  new word without including the first character.

//    TODO Create a function named doubleChar that takes a string and returns
//     a string in which each character is repeated once.


//   TODO  You work for a manufacturer, and have been asked to calculate the
//     total profit made on the sales of a product. You are given an object
//     containing the cost price per unit (in dollars), sell price per unit
//     (in dollars), and the starting inventory. Return the total profit made,
//     rounded to the nearest dollar.