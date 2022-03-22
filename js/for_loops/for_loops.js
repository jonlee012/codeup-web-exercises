//multiply 7

for (var a = 1; a <= 10; a++) {
    console.log('Show multiplication table 7 * ' + a + ' = '+ (a * 7));
}

//10nums between 2- and 200
// for (var i = 20; i <= 200; ) {
//
//     if (i % 2 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a lovely even number: ' + i);
// }

// //10 random numbers
// //this one works
for (var b = 1; b <= 10; b++) {
    var randomNum = Math.floor(Math.random() * 200) + 20;
    if (randomNum % 2 === 0) {
        console.log(randomNum + ' is even');
    } else {
        console.log(randomNum + ' is odd');
    }
}

//pyramid
// for (var i = "1"; i <= 10; i++) {
//     var j = i;
//     console.log(i + j);
// }

// function generateNumberTriangle(v) {
//     for (var i = 1; i <= v; i++) {
//         var chars = " ";
//         for (var j = 1; j <= v; j++) {
//             if (j <= i) { chars += j + "  "; }
//         }
//         console.log(chars);
//     }
// }
// generateNumberTriangle(10);
// let count = 1;
// let x = "1 ";
// for (i = 0; i <=10; i += 1){
//     console.log(x.repeat(count));
//     count +=1;
// }

// //this one works
// //
for(var c = 1; c < 10; c++){
    var Num = '';
    for(var d = 0; d < c; d++){
        Num += c;
    }
    console.log(Num)
}

//
//
// //increments of 5
//
for (e = 100; e >= 0; e-=5) {
    console.log(e);
}

