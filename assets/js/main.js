$ = jQuery;

$(document).ready(function(){
    $('.btn-popup').click(function(){
        $('.popup').toggleClass('show-popup');
    });
    $('.close').click(function(){
        $('.popup').removeClass('show-popup');
    })
});