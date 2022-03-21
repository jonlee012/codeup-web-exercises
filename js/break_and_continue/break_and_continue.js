//break and continue
// number 2
var userInput = prompt('enter a number')
for (var i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log('Here is an odd number: ' + i);
        continue;
    } if ((i % 2 == 0) != userInput) {
        break;
    }
}


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

// let i = 0;
// while (i < 50) {
//     i++;
//     if ((i >= 26 && i <= 28)) {
//         console.log("we are skipping this number" + 27)
//         continue;
//     } else if (i % 2 === 0){
//         continue;
//     }
//     console.log(i);
// }