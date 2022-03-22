
//number2
var i = 2;
while(i < 65537) {
    console.log(i);
    i = i * 2;
}

// icecream cone
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
do {
    console.log("Ice cream cones in stock: " + allCones);
    var soldCones = Math.floor(Math.random() * 5) + 1;
    console.log("You ordered: " + soldCones)
    if (allCones >= soldCones) {
        console.log(soldCones + " cones sold");
        allCones = allCones - soldCones;
    }
    else{
        console.log("I can't sell you " + soldCones + ", I only have " + allCones + " left.");
    }
} while (allCones >= soldCones );

console.log("Sold out!");





// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log("----------------");
// }