//use enter as the return key (use prevent default)
"use strict";
//create an array to hold the konami code
var konamiCode = [38,38,40,40,37,39,37,39,66,65,13];

//create a variable to hold the current index as we read through array
var codeIndex = 0;

function showImageGeneric (id){
    console.log(id);
    // 0 and 1 made the default animation stop
    $(id).show(0);
    $(id).hide(1);
}


$(document).keydown(function(event) {
    //which is the key(the number from the keyboard)
    console.log(event.which);


    if (event.which === 38) {
        showImageGeneric('#redDot-up');
        if (konamiCode[codeIndex] === 38) {
            codeIndex++
        } else {
            codeIndex = 0;
            alert("not quite");
        }
    } else if (event.which === 40) {
        showImageGeneric('#redDot-down');
        if (konamiCode[codeIndex] === 40) {
            codeIndex++;
        } else {
            codeIndex = 0;
            alert("not quite");
        }
    } else if (event.which === 37) {
        showImageGeneric('#redDot-left');
        if (konamiCode[codeIndex] === 37) {
            codeIndex++;
        } else {
            codeIndex = 0;
            alert("not quite");
        }
    } else if (event.which === 39) {
        showImageGeneric('#redDot-right');
        if (konamiCode[codeIndex] === 39) {
            codeIndex++;
        } else {
            codeIndex = 0;
            alert("not quite");
        }
    } else if (event.which === 66) {
        showImageGeneric('#b-button');
        if (konamiCode[codeIndex] === 66) {
            codeIndex++;
        } else {
            codeIndex = 0;
            alert("not quite");
        }
    } else if (event.which === 65) {
        showImageGeneric('#a-button');
        if (konamiCode[codeIndex] === 65) {
            codeIndex++;
        } else {
            codeIndex = 0;
            alert("not quite");
        }
    } else if (event.which === 13) {
        showImageGeneric('#start-button');
        if (konamiCode[codeIndex] === 13) {
            codeIndex++;
        } else {
            codeIndex = 0;
            alert("not quite");
        }
    }
    //reads this when they completed the konami code
    if (codeIndex === konamiCode.length) {
        success();
    }
});
//function that is called when the konami code is done
var audio;
function success() {
    audio = new Audio('../IMG/mixkit-arcade-retro-game-over-213.wav');
    audio.play();

    setTimeout(function(){
        alert("Success, you entered the Konami Code!");
    },1000);
    codeIndex = 0;
}

//
//
//
