

var doggos= ["boxer", 'great dane', 'schnauzer', "husky", 'gsp']
console.log("doggos length: " ,  doggos.length)
for (var i = 0; i < doggos.length; i++){
    console.log("i: " + i);
    console.log("my fave dog is: " + doggos[i]);
}

var seasons = ["spring", 'summer', 'fall', "winter"]
for (var i = 0; i < seasons.length; i++) {
    console.log("One of the four seasons: " + seasons[i]);
}

var groceryList = ["bananas", "milk", "cereal", "steak", "coffee"];

groceryList.forEach(function (groceryItem){
    console.log(groceryItem);
})
// console.log(groceryItem);

var faveGame = ["handball", "football", "basketball", "tetherball"];
faveGame.forEach(function (gameName){
    console.log(gameName);
})



// (function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ["jake", "judy", "jane", "john"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("doggos length: " , names.length)

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for (var i = 0; i < names.length; i++){
    console.log(names[i]);
}

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (eachName){
        console.log(eachName);
    })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    var food = ["burger", "taco", "pizza", "salad"];
    console.log("my fave food is: " + food[0]);

    var bev = ["soda", "tea", "beer", "juice"];
    console.log("my fave beverage is: " + bev[1]);

    var place = ["home", "park", "beach", "restaurant"];
    console.log("my fave place is: " + place[3]);

// })();