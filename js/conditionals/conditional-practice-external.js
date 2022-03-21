//conditional JS KEYWORDS
// if
// else
// else if
// switch
// case
// break
// continue
// default

//IF STATEMENT
//conditional statemetn - return booolean
//meet a specific requirement (temp > 80) -- boolean
// if (conditional statement){
//     //code block -- your logic
//     //this code only runs if the condition is met
// }

// var temp = 87;
//
// if (temp > 80){
//     console.log("wear sunglasses and sunscreen!");
// }

// //add in else
// var temp = 62;
// console.log("the temp is: " + temp + " degrees");
// if (temp > 80){
//     console.log("wear sunglasses and sunscreen!");
// } else {
//     console.log("wear a jacket");
// }

//3 conditions
//<50, 51 - 70, 70>
// var temp = 62;
// console.log("the temp is: " + temp + " degrees");
// if (temp < 50){
//     console.log("bring a jacket");
// } else if (temp >= 51 && temp <= 70){
//     console.log("great temp");
// } else (temp < 70)
// {
//     console.log("wear sunglasses!");
// }

// TODO: write a conditional that prints "hey, she's my instructor" to the
//  console if the name provided is "Laura", but if the name provided
//  is "Kenneth", print out "oh, he's my instructor too!", if the name
//  is neither Laura nor Kenneth, print out "um I don't know them"

// var myInst = prompt("who is your instructor?")
// var inst1 = "laura";
// var inst2 = "kenneth";
// if (myInst === inst1){
//     console.log("hey, she's my instructor");
// } else if(myInst === inst2){
//     console.log("oh, he's my instructor too");
// } else {
//     console.log("um i dont know them");
// }
// var grade = 82;
// if(grade > 70 && grade < 100){
//     console.log("you passed!");
// }

// todo: write a function that accepts a student's grade and return
//  whether or not that student is passing or failing. 70+ is passing
// 1. write a function
// 2. create a parameter for the student grade
// 3. return "pasing" or "failing"
// if student grade > 70 print passing
// if student grade < 70 pring failing
//4. call the function pass in the argument (grade)

// var isPassing =
//

// var grade = prompt("what is your grade?")

//function - js keyword
//isPassing - name of the function (we made up)
//student grade - parameter (we made up)
// function isPassing(studentGrade){
// // putting in var result that does not have a value assigned just yet
//     //the variable is sitting insde functions scope
//     var result;
//
//     //if - js keyword // (studentGrade > 70) - conditional
//     //checks to see if its true or not//
//     //open up another code block for our if statement to
//     //run if the conditional is met
//     if (studentGrade > 70){
//         result = "passing";
//     } else {
//         result = "failing";
//     }
//     return result;
// }
//
// //alert () --> create a pop up in a the browser displaying what
// //passed in into the
// console.log(isPassing(78));


//TERNARY OPERATORS

// var message;
// var success = confirm("is the operation successful");
// console.log(success);
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);
// the above if/else can be re-written as:
// var message = (success) ? "Operation was successful." : "Oops, something went wrong.";
// console.log(message);

//SWITCH CASES
// var pizzaPreference = prompt("What kind of pizza do you like?"); // global scope
// console.log(pizzaPreference);
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce": // is pizzaPreference === "pineapple & hotsauce"
//         console.log("1. first case --- ");
//         alert("What a coincidence, that's my favorite!"); // if it is, then print out alert
//         break; // if it isn't then move on to next case
//         console.log("1. first case --- AFTER BREAK");
//     case "cheese": //is is pizzaPreference === "cheese"
//         console.log("2. 2nd case --- ");
//         alert("Just plain cheese? Okay...");
//         break;
//         console.log("2. 2ND case --- AFTER BREAK");
//     default:
//         console.log("3. default --- ");
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
//         console.log("3. 3RD case --- AFTER BREAK");
//
// }
// console.log("OUTER SWITCH STATEMENT");

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// var myColor = prompt("what color?")
// var analyzeColor1 = "red";
// var analyzeColor2 = "blue";
// var analyzeColor3 = "yellow";
// var analyzeColor4 = "green";
//
// if (myColor === analyzeColor1){
//     console.log("red like roses");
//     console.log(analyzeColor1);
// } else if(myColor === analyzeColor2){
//     console.log("blue like the sky");
//     console.log(analyzeColor2);
// } else if(myColor === analyzeColor3){
//     console.log("yellow like lemons");
//     console.log(analyzeColor3);
// } else if(myColor === analyzeColor4){
//     console.log("green like grass");
//     console.log(analyzeColor4);
// } else {
//     console.log("i dont know anything about " + myColor);
// }


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)


/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// var myColor = randomColor
// var analyzeColor1 = "red";
// var analyzeColor2 = "blue";
// var analyzeColor3 = "yellow";
// var analyzeColor4 = "green";
//
// if (myColor === analyzeColor1){
//     console.log("red like roses");
//     console.log(analyzeColor1);
// } else if(myColor === analyzeColor2){
//     console.log("blue like the sky");
//     console.log(analyzeColor2);
// } else if(myColor === analyzeColor3){
//     console.log("yellow like lemons");
//     console.log(analyzeColor3);
// } else if(myColor === analyzeColor4){
//     console.log("green like grass");
//     console.log(analyzeColor4);
// } else {
//     console.log("i dont know anything about " + myColor);
// }

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// var myColor = randomColor
// console.log(randomColor);
//
// switch(randomColor) {
//     case "blue":
//         console.log("blue like the sky");
//         break;
//     case "red":
//         console.log("red like roses");
//         break;
//     case "yellow":
//         console.log("yellow like lemons");
//         break;
//     case "green":
//         console.log("green like grass");
//         break;
//     default:
//         console.log("i dont know anything about " + myColor);
//         break;
//
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var randomColor = prompt("what's your fave color?")
// var myColor = randomColor
// console.log(randomColor);
//
// switch(randomColor) {
//     case "blue":
//         alert("blue like the sky");
//         break;
//     case "red":
//         alert("red like roses");
//         break;
//     case "yellow":
//         alert("yellow like lemons");
//         break;
//     case "green":
//         alert("green like grass");
//         break;
//     default:
//         alert("i dont know anything about " + myColor);
//         break;
//
// }

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// var number = [0, .1, .25, .35, .5, 1];
// var randomNumber = number[Math.floor(Math.random() * number.length)];
// // var myNumber = randomNumber
// console.log(randomNumber);
// // var zero = 0;
// // var one = .1;
// // var two = .25;
// // var three = .35;
// // var four = .5;
// // var five = 1;
// var totalBill = 100
// function calculateTotal(x, y) {
//     return (1 - x) * y
// }
// console.log(calculateTotal(randomNumber, totalBill ));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// // // Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// // var myNumber = luckyNumber
// console.log(luckyNumber);
// var totalBill = prompt("how much was your bill?")
// function calculateTotal(x, y){
//
//     var discountPrice;
//     // var priceAfterDiscount = (totalBill - discountPrice);
//     switch(x) {
//         case 0:
//             discountPrice = y;
//             alert("your lucky number was " + x);
//             alert("your price before discount was " + y);
//             alert("your price after discount was " + (discountPrice));
//             break;
//         case 1:
//             discountPrice = (1 - .1) * y;
//             alert("your lucky number was " + x);
//             alert("your price before discount was " + y);
//             alert("your price after discount was " + (discountPrice));
//             break;
//         case 2:
//             discountPrice = (1 - .25) * y;
//             alert("your lucky number was " + x);
//             alert("your price before discount was " + y);
//             alert("your price after discount was " + (discountPrice));
//             break;
//         case 3:
//             discountPrice = (1 - .35) * y;
//             alert("your lucky number was " + x);
//             alert("your price before discount was " + y);
//             alert("your price after discount was " + (discountPrice));
//             break;
//         case 4:
//             discountPrice = (1 - .5) * y;
//             alert("your lucky number was " + x);
//             alert("your price before discount was " + y);
//             alert("your price after discount was " + (discountPrice));
//             break;
//         case 5:
//             discountPrice = (1 - 1) * y;
//             alert("your lucky number was " + x);
//             alert("your price before discount was " + y);
//             alert("your price after discount is free");
//             break;
//         default:
//             alert("No discount");
//             break;
//     }
//     return discountPrice;
//
// }
//
// console.log(calculateTotal(luckyNumber, totalBill));


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// let text;
// if (confirm("Would you like to enter a number?") == true) {
//     text = "You pressed OK!";
//     var yourNum = prompt("pick a number between 1 - 100");
// } else {
//     text = "You canceled!";
// }
//     function notANum(yourNum) {
//             var isNumber = !isNaN(userNum);
//             alert("your input is not a number")
//         }
//     }
//
//
// console.log(text);

// var confirmUser = confirm("Would you like to enter a number?");
// // var notConUser = (confirmUser !== true)
// if(confirmUser == true) {
//     var userNum = prompt("Enter a number: ");
//     console.log("you have entered: " + userNum);
//     var isNumber = !isNaN(userNum);
// }else if(confirmUser == false){
//     alert("See you next time!")
// }
// console.log(isNumber);
// if (isNumber) {
//     var userNumber = Number(userNum);
//     var isEven = userNumber % 2 === 0;
//     console.log("The user's number is even: " + isEven);
//     var evenAlert = (isEven) ? "Your number is even!" : "Your number is odd!";
//     alert(evenAlert);
//     alert(userNumber + 100);
//     var posNegAlert = (userNumber >= 0) ? "Your number is positive" : "Your number is negative";
//     alert(posNegAlert);
// } else if(isNumber = isNaN(userNum) && confirmUser == true) {
//         alert("Please enter a numerical value")
// }

















