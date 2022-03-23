// (function(){
    "use strict";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;
    var planetsArray = planetsString.split("|");

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    console.log(planetsArray.join("\n"));


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