// var side1 = 4
// var side2 = 4
// var side3 = 4
// var s = (side1 + side2 + side3) / 2; var area = Math
// var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
// console.log(area)


function triangleArea(a, b, c) {
    var sp = (a + b + c) / 2;
    var area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    console.log(area);
}

triangleArea(4, 4, 4);
//
//
//
//
//
function reverseString(name) {
    return name;
}
console.log(reverseString("Frank"));;

//
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString('franklin'));;
// var nameReverse = name.reverse(name);
// console.log(nameReverse);


function palindrome(str) {
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 -i]) {
            return false;
        }
    }
    return true;
}



//
///
//
//
//

// Write a function that filters out numbers from a list.
//     Example input: [3,g,s,5,j,8,2,d,6,h,9,l,5,s,2,3]
// Expected Output: [a,s,j,d,h,l,s]


// var arr = [3,'g','s',5,'j',8,2,'d',6,'h',9,'l',5,'s',2,3];
// var numbersOnly = (val)=> {
//     if(typeof(val) !== 'number'){
//         return val;
//     }
// }
// var number = arr.filter(numbersOnly);
// console.log(number);
//
//
//
//
//     var library = [
//         {
//             author: 'Bill Gates',
//             title: 'The Road Ahead',
//             readingStatus: true
//         },
//         {
//             author: 'Steve Jobs',
//             title: 'Walter Isaacson',
//             readingStatus: true
//         },
//         {
//             author: 'Suzanne Collins',
//             title: 'Mockingjay: The Final Book of The Hunger Games',
//             readingStatus: false
//         }];
// function readingStat(readings) {
//     var results = [];
//     for (var i = 0; i < readings.length; i++){
//         results.push(readings[i]);
//     }
//     return results;
// }
// console.log(library.readingStatus);
// console.log(readingStat());


// Write a JS code to return an array of only the  Even numbers from the  given array
// example input: [12,2,3,4,5,6,7,8,9]
// expected output: [2,2,4,6,8]

// var getEvenNumbers = () => {
//     var arr = [12,2,3,4,5,6,7,8,9];
//     var evenNums = arr.filter(number => {
//         return number % 2 == 0;
//     });
//     console.log('Even Numbers: ' + evenNums);
// }
//
// getEvenNumbers();

var array1 = [12,2,3,4,5,6,7,8,9];

var evenNum = [];

array1.forEach(number => {
    if (number % 2 === 0) {
        evenNum.push(number);
    }
});

// console.log(evenNum);


// example input: [1,2,3,4,5];
// expected output: 15
// some possible test cases to think about:
//     function should be called ‘sumArr’
// function should return a number
// function should accept an array
// function should return “sum not available” if array is empty
// function should handle non-numbers

// var sum = [1,2,3,4,5].reduce(sumArray, 0); // with initial value to avoid when the array is empty
//
// function sumArray(accumulator, a) {
//     return accumulator + a;
// }
//
// console.log(sum);

// var sumArr = [1,2,3,4,5];
// var sum1 = 0;
// var result;
// for (let i = 0; i < sumArr.length; i++) {
//     result = (sum1 += sumArr[i]);
// }if(sumArr == '0' || sumArr == isNaN(sumArr)){
//     console.log("sum not available");
// }
// console.log(result);

// example input: [5,8,2,6,9,3,2];
// expected output: [2,2,3,5,6,8,9] // length: 7

// var sortArr = [5,8,2,6,9,3,2];
// var numOrder = sortArr.slice().sort((a,b)=>a-b)
// console.log(numOrder)

// var sortArr = [5,8,2,6,9,3,2];
// sortArr.sort(function(a, b) {
//     return a - b;
// });
//
// console.log(sortArr);


// example input: [“b”, “a”, “n”, “a”, “n”, “a”];
// expected output: { b: 1, a: 3, n: 2 }
// var arr = ['b', 'a', 'n', 'a', 'n', 'a'];
//
// const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
//
// console.info([...map.keys()]) // to get unique elements
// console.info([...map.values()]) // to get the occurrences
// console.info([...map.entries()]) // to get the pairs [element, frequency]

// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calcualted 50 primes.
// https://en.wikipedia.org/wiki/Prime_number

// var lowerNumber = 1;
// var higherNumber = 50;
// // looping from lowerNumber to higherNumber
// for (var i = lowerNumber; i <= higherNumber; i++) {
//     var flag = 0;
    // looping through 2 to user input number
    // for (var j = 2; j < i; j++) {
    //     if (i % j == 0) {
    //         flag = 1;
    //         break;
    //     }
    // }
    // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

// example input: [1, 2, 3], [3, 4, 5]
// expected output:
//     [ 1, 2, 3, 4, 5 ]
// var arr1 = [1, 2, 3];
// var arr2 = [3, 4, 5];
// var arr3 = arr1.concat(arr2);

// console.log(arr3);
function combineArrays(x, y){
    z = x.concat(y)
    return z;
}
// console.log(combineArrays([1, 2, 3],[3, 4, 5]));

// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

// example input: [{a:1,b:2},{a:5,b:4}]
// expected output: [{a:1,b:2},{a:5,b:4}]

// Rewrite the following using a for-loop:
// var i = 20;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }
// var
//     for (var i = 20; i <= 0; i--) {
//         console.log(i);
//     }


// 2. Write a function that takes an object (a) as argument and returns an array with all object keys
// example input: {a:1,b:2,c:3}
// expected output: ['a','b','c']
// ------------------------
//     example input:{j:9,i:2,x:3,z:4}
// expected output: ['j','i','x','z']

// var keys = {
//     a:1,b:2,c:3
// };
//
// console.log(Object.keys(keys));




// var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//
// for(var i = 0; i < numbers.length; i++) {
//     if(i % 3 === 0){
//         console.log(numbers[i]);
//     }
// }

// var output = ""
//
// for(var i = 0; i <= 15; i++) {
//     if(i % 3 == 0) {
//     }
// }
// console.log(output)


// (hint hint hint: learn how to use a modulus)
// Write a function that iterates through numbers 1 and 15 and returns the numbers
// that are divisible by 3 (hint hint hint: learn how to use a modulus)
// for(var i=1;i<=15;i++) {
//     // if iteration number divisible to 3, block works.
//     if(i%3==0)
//     {
//         console.log(i);
//     }
// }
// 2. Extra Challenging - Set likely won’t be covered but it’s a useful tool in JS
// Write a function that takes a Set and an array as arguments.
// If not already existing, add each element in the array to the Set. Return the modified Set

// example input: new Set([1, 2, 3]), [4, 5, 6]
// expected output: new Set([1, 2, 3, 4, 5, 6 ])
// -------------------------
// example input:new Set([1, 2, 3]), [2, 3]
// expected output: new Set([1, 2, 3])
//
// new Set ([1, 2, 3]), [4, 5, 6])

// var trucks = ['🚚', '🚛'];

// Method 1: Concat
// var val1 = ([1, 2, 3])
// var val2 = ([4, 5, 6])
// var combined1 = [].concat(val1, val2);
// console.log(combined1);
// // Method 2: Spread
// var combined2 = [...val1, ...val2];
// console.log(combined2);

// var val1 = ([1, 2, 3])
// var val2 = ([2, 3])
// var combined1 = [].concat(val1, val2);
// console.log(combined1);
// // Method 2: Spread
// var combined2 = [...val1, ...val2];
// console.log(combined2);

// 1. list primitive data types in javascript
// null
// boolean
// undefined
// string(
// number
// symbol

// 2. swap keys for values
// Write a function that takes an object as argument
// Swap the Javascript object's key with its values and return the resulting object

//     example input: {z:'a',y:'b',x:'c',w:'d'}
// expected output: {a:'z',b:'y',c:'x',d:'w'}
// -------------------------
//     example input:{2:'a',4:'b',6:'c',8:'d'}
// expected output: {a:'2',b:'4',c:'6',d:'8'}

// function swapKeysAndValues(obj) {
//     var swap = Object.entries(obj).map(
//         ([key, value]) => [value, key]);
//     return Object.fromEntries(swap);
// }
// console.log(swapKeysAndValues({z:'a',y:'b',x:'c',w:'d'}));
//

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

// example input: [{ city: 'Tokyo', country: 'Japan' },
// { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' },
// { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
// var faveCity = [{
//     city: 'Tokyo',
//     country: 'Japan',
// },
//     {
//     city: 'Bangkok',
//     country: 'Thailand',
//     }]
// console.log(faveCity)
// function addCont (obj, str){
//     for(let i = 0; i < obj.length; i++){
//         console.log(obj[i]);
//         obj[i].continent = str;
//         console.log(obj[i]);
//     }
// }
// addCont([{ city: 'Tokyo', country: 'Japan'}, { city: 'Bangkok', country: 'Thailand'}], 'Asia');


// 2. How can you add “strawberry” to the beggining, middle, and end of the following array?
// beginning
// var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];
// fruits.splice(0, 0, 'strawberries');
//
// console.log(fruits)
//
// //middle
// var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];
// fruits.splice(2, 0, 'strawberries');
//
// console.log(fruits)
// //end
// var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];
// fruits.splice(6, 0, 'strawberries');
//
// console.log(fruits)



// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

// var arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// function yourArray(arr5){
// for( var i = 0; i < yourArray.length; i++) {
//     return
//         yourArray.splice(i, 3);
//
// }
// }
//
// console.log(yourArray());
// var arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// for( var i = 0; i < arr5.length; i++) {
//
//     arr5.splice(i, 3);
// }
// console.log(arr5);
// yourArray([1, 2, 3, 4, 5, 6]);
// Write an object that describes which brands own which cereals (you can be creative here) . After the object has been declared …
// A) add properties and values to the existing object
// B) re-assign 2 properties’ values


// for(var i = 0; i > 10; i++) {
//     console.log(i);
// }
// for(var i = 0; i <= 10; i++) {
//     console.log(i);
// }
//
//
// var array = ['John', 'Paul', 'George', 'Ringo'];
// // array.splice(array.indexOf('Ringo'), 0, 'Yoko');
// array.push('Yoko');
//
// console.log(array);


// Write a function that takes an array of numbers as argument and
// returns the number of negative values in the array
// example Input: [1,-2,2,-4]
// expected output: 2

// function numOfNeg (input){
//     var answer = [];
//     var negNum = 0;
//     if(input && input.length){
//     for(let i = 0; i < input.length; i++){
//         console.log(input[i]);
//             if (input[i] < 0){
//             negNum += 1 }
//             console.log(input[i]);
//       }
//     return answer;
//     }
// }
// numOfNeg(-1, 1, 2, -2, 3);

function countPositivesSumNegatives(input) {
    const answer = [];
    let positiveSum = 0;
    let negativeSum = 0;

    if(input && input.length) {
        for(let i = 0; i < input.length; i++) {
            if(input[i] > 0) {
                positiveSum += 1
            } else {
                negativeSum += input[i]
            }
        }
        answer.push(positiveSum);
        answer.push(negativeSum);
    }
    return answer;
    console.log(answer);
}
countPositivesSumNegatives(1, 2, 3, -1, -2, -3);
console.log(countPositivesSumNegatives());

function makPos(arry) {
    return arry = arry.map( s => Math.abs(s));
}

console.log(makPos([1, -2, 2, -4]));


// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

// example input: new Date('2020-06-11'), new Date('2020-06-01')
// expected output: 10

// function getDate(input1, input2){
//     var newTime1 = new Date(input1.getTime()
//     var newTime2 = input2.getTime()
//     return newTime;
// }
//
// console.log(getDate(new Date(7/ 14 / 2021), new Date(7 / 20 / 2021)));

function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}

console.log(datediff(parseDate(1/1/2020), parseDate(1/15/2020)));


// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

// example input: [1, 2, 3, 4, 5, 6, 7], 2
// expected output: 25

// // Write a function that takes an array (a) and a value (n) as arguments
// // Save every nth element in a new array
// // Return the new array
//
// example input: [1,2,3,4,5,6,7,8,9,10],3
// expected output: [3,6,9]

function nthArray(arr, val){

}
nthArray([1,2,3,4,5,6,7,8,9,10], 3)