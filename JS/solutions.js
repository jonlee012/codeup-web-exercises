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