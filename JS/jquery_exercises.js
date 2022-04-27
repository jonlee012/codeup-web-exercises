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
    $('*').css('background-color', '#f0f0f0');
    $('h1, p.codeUp, li').css('background-color', 'yellow');


    // var welcome = $('h1').html();
    // alert(welcome);
    // alert($('h1').html());

    // var ele = document.getElementById('my-element');
    // ele.addEventListener('click', function(e) {
    //     alert('My element was clicked!');
    // });
    $('#my-element').click( function (){
        alert('text with id "my-element" was clicked');
    });
    $('.important').click( function (){
        alert('text with class important was clicked');
    });
    $('.not-important').hover(
        function() {
            $(this).css('background-color', '#FF0');
        },
        function() {
            $(this).css('background-color', '#FFF');
        }
    );
    $('h1').click( function () {
        $('h1').css('background-color', 'lightgray')
    });
    $('p').dblclick( function (){
        $('p').css('font-size', '18px')
    });
    $('li').hover(
        function() {
            $('li').css('color', 'red');
        },
        function() {
            $('li').css('color', 'blue');
        }
    );
    $('#textfield').keydown(
        function() {
        alert('A key was pushed down!');
    });
    $('#textfield1').keyup(function() {
        alert('a key was released!');
    });

});