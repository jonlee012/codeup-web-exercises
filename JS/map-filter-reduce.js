var num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var even1 = [];
for (var i = 0; i < num1.length; i += 1) {
    if (num1[i] % 2 === 0) {
        even1.push(num1[i]);
    }
}
console.log(even1);

var even1 = num1.filter(function(n) {
    return n % 2 === 0;
});
console.log(even1);

var increm = num1.map(function(n) {
    return n + 1;
});
console.log(increm);
// Use .filter to create an array of user objects where each user
// object has at least 3 languages in the languages array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

const incremented = numbers.map(n => n + 1);
console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const num2 = [1, 2, 3, 4, 5];

const sum = num2.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0);
console.log(sum);

const salesPeople = [
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150},
];

const totalSales = salesPeople.reduce((total, person) => {
    return total + person.sales;
}, 0);
console.log(totalSales);


function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}

console.log(countWords('Mary had a little lamb little lamb little lamb'));;
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}





const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//use .filter to create an array of user objects where each user object has at least 3 languages in the lang array
const languages = users.filter(user =>  user.languages.length >= 3);
console.log(languages);

// Use .map to create an array of strings
// where each element is a user's email address

const newArr = users.map((emails) => emails.email);
console.log(newArr);

// Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.

const totalExp = users.reduce((total, person) => {
    return total + person.yearsOfExperience;
}, 0);
console.log('the total experience is: ', totalExp); //35
//how many employees
let counter = [];
for (let i = 0; i < users.length; i++) {
    counter++;
}
console.log('there are ', counter , ' employees working'); // 5
//average experience
function aveExp(){
    return totalExp / counter;
}
console.log('the average experience is: ' ,aveExp());

// Use .reduce to get the longest email from the list of users.

const longestEmail  = users.reduce(function (longest, currentEmail) {
    if(currentEmail.email.length > longest.length) {
        return currentEmail.email;
    } else {
        return longest;
    }
}, "");

console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.

const instructors = users.reduce((total, person) => {
    return total + person.name +',' ;
}, "");
console.log('Your instructors are: ' ,instructors);