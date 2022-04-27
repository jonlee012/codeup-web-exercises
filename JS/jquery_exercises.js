"use strict";

$(document).ready(function() {
// alert("DOM has finished loading")
    // INSERT JAVASCRIPT CODE SAMPLE HERE
    var contents = $('#codeup').html();
    // alert(contents);
    // $('.important').css('background-color', 'yellow');
    $('p').css('font-size', '14px');
    $('.important, p').css('background-color', '#FF0');
    // $('*').css('border', '1px solid #F00');
    $('.backColor').css('background-color', 'lightgray')
    $('.list').css('list-style', 'none')
    $('.list, a').css('display', 'flex')
    $('.list, a').css('text-align', 'center')
    // $('.list, a').css('justify-content', 'space-between')
    $('.welcome').css('text-align', 'center')
    $('.codeUp').css('border', '1px solid red')
    $('li').css('font-size', '20px')
    $('h1, p, li').css('background-color', 'yellow');
    $('*').css('background-color', '#f0f0f0');


    var welcome = $('h1').html();
    alert(welcome);
});