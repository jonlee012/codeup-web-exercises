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

console.log(evenNum);


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

var sumArr = [1,2,3,4,5];
var sum1 = 0;
var result;
for (let i = 0; i < sumArr.length; i++) {
    result = (sum1 += sumArr[i]);
}if(sumArr == '0' || sumArr == isNaN(sumArr)){
    console.log("sum not available");
}
console.log(result);

// example input: [5,8,2,6,9,3,2];
// expected output: [2,2,3,5,6,8,9] // length: 7

// var sortArr = [5,8,2,6,9,3,2];
// var numOrder = sortArr.slice().sort((a,b)=>a-b)
// console.log(numOrder)

var sortArr = [5,8,2,6,9,3,2];
sortArr.sort(function(a, b) {
    return a - b;
});

console.log(sortArr);


// example input: [“b”, “a”, “n”, “a”, “n”, “a”];
// expected output: { b: 1, a: 3, n: 2 }
var arr = ['b', 'a', 'n', 'a', 'n', 'a'];

const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

console.info([...map.keys()]) // to get unique elements
console.info([...map.values()]) // to get the occurrences
console.info([...map.entries()]) // to get the pairs [element, frequency]

// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calcualted 50 primes.
// https://en.wikipedia.org/wiki/Prime_number

var lowerNumber = 1;
var higherNumber = 50;
// looping from lowerNumber to higherNumber
for (var i = lowerNumber; i <= higherNumber; i++) {
    var flag = 0;
    // looping through 2 to user input number
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

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
console.log(combineArrays([1, 2, 3],[3, 4, 5]));

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

var keys = {
    a:1,b:2,c:3
};

console.log(Object.keys(keys));




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
for(var i=1;i<=15;i++) {
    // if iteration number divisible to 3, block works.
    if(i%3==0)
    {
        console.log(i);
    }
}
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

var val1 = ([1, 2, 3])
var val2 = ([2, 3])
var combined1 = [].concat(val1, val2);
console.log(combined1);
// Method 2: Spread
var combined2 = [...val1, ...val2];
console.log(combined2);