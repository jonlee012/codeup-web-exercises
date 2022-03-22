//break and continue
// number 2
// var userInput = prompt('enter an odd number')
// for (var i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log('Here is an odd number: ' + i);
//         continue;
//     } if ((userInput % 2 !== 0)) {
//         break;
//     }
// }

// var i = prompt("Please enter an odd number between 1 and 50")
// var minimum = 0;
// var maximum = 50;
// do {
//     if (i > minimum && i < maximum && i % 2 === 0)
//         // console.log(alert("you chose a valid number"))
//         // break;
//      else
//         (window.prompt("Invalid input, please enter an odd number between 1 and 50 "));
//     }
// }
// while (i < minimum || i > maximum);

// i = prompt("Please enter an odd number between 1 and 50", 0);
// // window.prompt("Please enter a number between 1 and 50");
// do {
//     var minimum = 1;
//     var maximum = 50;
//
//     if (i % 2 !== 0)
//         break;
//     else(window.prompt("Invalid input, please enter a number between 1 and 50 "));
// }
// while (i >= minimum && i <= maximum);


// correct number 2
// do {
//     var i = prompt("Enter an odd number between 1 and 50.");
// } while (i % 2 === 0 || i < 1 || i > 50 || isNaN(i));
// alert('the number you entered is: ' + i + ' and is valid')
//
// number 3

// for (var i = 1; i <= 50; i++) {
//
//     if (i % 2 == 0 && i !== 27) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//     console.log('Here is an odd number: ' + i);
// }

/// this one works number 3
// var i = 0;
// while (i < 50) {
//     i++;
//     if ((i >= 26 && i <= 28)) {
//         console.log("yikes! we are skipping this number " + 27)
//         continue;
//     } else if (i % 2 === 0){
//         console.log("this is an odd number: " + i)
//         continue;
//     }
//     console.log(i);
// }