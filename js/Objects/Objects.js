// //OBJECT LITERALS
// var jonObject = {
//     fullName: "Jon Lee",
//     faveMovies: ["Gladiator", "Troy", 'Training Day'],
//     faveTeam: "Lakers",
//     faveCity: "Los Angeles",
//     faveFood: "Mexican",
//     myAge: 35,
//     newAge: function (){
//         return jonObject.myAge - 10
//     }
// }
// console.log(jonObject);
// console.log("I feel like I am " + jonObject.newAge());
//
// //create a mthod on your you object that returns your age - 10
//
// var newObj = {}; //object
// //creating a ne =w object instance using the Object()
//
// //how to add values to an object
// //dot notation
//
// var anime = {};
//
// anime.definition = "anime is a cool way of story telling";
// anime.characters = ["naruto", "ichigo", "avatar"];
//
// anime.genres = ["shoenen", "shojo", "seinen", "josei", "kodomomuke"];
// anime.numGenres = 5;
// console.log(anime);
// console.log(anime.numGenres);
//
// var car = {
//     year: 2020,
//     make: "honda",
//     model: "fit",
//     has4Wheels: true,
//     leather: true,
//     wheels: 4,
//     doors: 2,
//     stero: false,
//     radioStations: [ 104.5, 95.1,101.1 ,105.3, 96.1]
// }
// /// I drive a ____ and I like to listent to ___ station and ___station
// console.log("I drive a " + car.make  +" " +  car.model + " " +"and I like to listen to " + car.radioStations[2] + " station and " + car.radioStations[3] + " station.")
//
//
// //accessing nested objects
// var states = {
//     texas: {
//         capital: "Austin",
//         weather: "always hot",
//         cities: [{
//             name: "San Antonio",
//             pop: 1.5
//         }, {
//             name: "Austin",
//             pop: 1.2
//         }, {
//             name: "Houston",
//             pop: 2.4
//         }]
//     },
//     illinois: {
//         capital: "Springfield",
//         weather: "always chilly"
//     },
//     kansas: {
//         capital: "topeka",
//         weather: "always tornadoes"
//     }
// }
// console.log(states.texas.cities[2].pop);
//
// // 1. write a function
// // 2. access cities from states object
// // 3. loop through cities array ---> object
// // 4. inside of loop, access 'name'from object we're currently on
// function printCities(statesObj){
//     console.log(statesObj);
//     var txCities = statesObj.texas.cities;
//     txCities.forEach(function(obj){
//         console.log(obj.name);
//     })
// }
// printCities(states)
//
// //adding a functionality to our objects
// var bicycle = {
//     pedals: 2,
//     color: "blue",
//     height:[37, 39, 43],
//     rideBike: function (){
//         return "pedal with your feet in circles and make the bike go."
//     },
//     addsPedals: function (){
//         return bicycle.pedals + 4
//     }
// }
// console.log(bicycle.color);
// console.log(bicycle.rideBike());
// console.log(bicycle.addsPedals());

(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Jon",
        lastName: "Lee",
    }
console.log(person.firstName)
console.log(person.lastName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function() {
        return "Hello from " + person.firstName + " " + person.lastName + "!";
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    // function discountChecker(shoppers) {
    //     shoppers.forEach(function (shopper) {
    //         console.log(shopper);
    //         if (shopper.amount >= 200) {
    //             //They get the discount.
    //             var discount = (shopper.amount * 0.12).toFixed(2);
    //             console.log(shopper.name + " has spent $" + shopper.amount.toFixed(2) + " today. They qualify for a 12% discount of " + discount + ", and therefore have a final total of $" + (shopper.amount - discount) + ".")
    //         } else {
    //             console.log(shopper.name + ", thank you for shopping with us today. Your final total today is: $" + shopper.amount.toFixed(2));
    //         }
    //         return discountChecker()
    //     });
    // }
    // shoppers.forEach(function (shoppers) {
    //     if(shoppers.amount > 200){
    //         var discount = shoppers.amount * .12;
    //         console.log('Your total before discount is ' + shoppers.amount );
    //         console.log('Your discount amount ' + discount);
    //         console.log('Your total after discount ' + (shoppers.amount - discount));
    //     } else {
    //         console.log('your total is ' + shoppers.amount );
    //     }
    // });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
var books = [
        {title: 'Rich Dad Poor Dad', author: {firstName: 'Robert', lastName: 'Kiyosaki'}},
        {title: 'Atomic Habits', author: { firstName: 'James', lastName: 'Clear'}},
        {title: 'Think and Grow Rich', author: { firstName: 'Napoleon', lastName: 'Hill'}},
        {title: 'The Subtle Art of Not Giving a Fuck', author: { firstName: 'Mark', lastName: 'Manson'}},
        {title: 'The Secret', author: { firstName: 'Rhonda', lastName: 'Byrne'}}
            ];
    // console.log(books[0].title)
    // console.log(books[0].author.firstName)
    // console.log(books[0].author.lastName)
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     *
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    function bookList(myBooks) {
        for (var i = 0; i < myBooks.length; i++) {
            var book = myBooks[i];
            console.log(myBooks[i]);
            console.log("Book # " + (i + 1));
            console.log("Title: " + book.title);
            console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        }
    }
    console.log(bookList(books));



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
function createBook(){
    var addBook = {

    }
    }
})();

