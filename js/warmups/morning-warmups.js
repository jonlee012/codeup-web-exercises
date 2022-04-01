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
console.log(palindrome("frank"));
console.log(palindrome("madam"));


//
///
//
//
//

// Write a function that filters out numbers from a list.
//     Example input: [3,g,s,5,j,8,2,d,6,h,9,l,5,s,2,3]
// Expected Output: [a,s,j,d,h,l,s]


var arr = [3,'g','s',5,'j',8,2,'d',6,'h',9,'l',5,'s',2,3];
var numbersOnly = (val)=> {
    if(typeof(val) !== 'number'){
        return val;
    }
}
var number = arr.filter(numbersOnly);
console.log(number);




    var library = [
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title: 'Mockingjay: The Final Book of The Hunger Games',
            readingStatus: false
        }];
function readingStat(readings) {
    var results = [];
    for (var i = 0; i < readings.length; i++){
        results.push(readings[i]);
    }
    return results;
}
console.log(library.readingStatus);
console.log(readingStat());

