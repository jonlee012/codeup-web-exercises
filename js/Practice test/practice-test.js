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


