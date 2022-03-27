// (function(){
    "use strict";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    console.log(planetsArray);

    // TODO:
// Create a string with <br> tags between each planet. console.log() your
// results. Why might this be useful?
//

// var newArray = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
// console.log(newArray);

var  newArray1 = Mercury + " - " + Venus + " <br /> " + Earth + " - " + Mars + " <br /> " + Jupiter + " - " + Saturn + " <br /> " + Uranus + " - " + Neptune;
console.log(newArray1);

console.log(planetsArray.join("\n"));

// BONUS:
// Create another string that would display your planets in an undordered list.
// You will need an opening AND closing <ul> tags around the entire
// string, and <li> tags around each planet.



// var brBuffer="";
// planetsArray.forEach(function(planet){
//     brBuffer+=planet+"</br>\n"
// });
//
//
// var ulBuffer="<ul>\n";
// planetsArray.forEach(function(planet){
//     ulBuffer+= "<li>"+planet+"</li>\n"
// });
// ulBuffer+="</ul>";
// document.body.innerHTML+=ulBuffer;
// console.log(ulBuffer);



// })();

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("unshuffled array " + array);
var shuffledArray = array.sort((a, b) => 0.5 - Math.random());
console.log("shuffled array " + shuffledArray)