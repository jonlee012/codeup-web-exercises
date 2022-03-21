//multiply 7

// for (var i = 1; i <= 10; i++) {
//     console.log('Show multiplication table 7 * ' + i + ' = '+ (i * 7));
// }

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

//10 random numbers
for (var i = 1; i <= 10; i++) {
    var randomNum = Math.floor(Math.random() * 200) + 20;
    if (randomNum % 2 === 0) {
        console.log(randomNum + 'is even ');
    } else {
        console.log(randomNum + 'is odd');
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
for(var i=1; i<=9; i++){
    var Num='';
    for(var j=0; j<i; j++){
        Num += i;
    }
    console.log(Num) }


//increments of 5

for (i = 100; i >= 0; i-=5) {
    console.log(i);
}

