$ = jQuery;

$(document).ready(function(){
    $('.btn-popup').click(function(){
        $('.popup').addClass('show-popup'),$('.black-background').addClass('active');
    });
    $('.close').click(function(){
        $('.popup').removeClass('show-popup'),$('.black-background').removeClass('active');
    });
    $('.p1').click(function(){
        $('.popup-child-1').addClass('show-1');
    });
    $('.p2').click(function(){
        $('.popup-child-2').addClass('show-2');
    });
    $('.p3').click(function(){
        $('.popup-child-3').addClass('show-3');
    });
    $('.close-1').click(function(){
        $('.popup-child-1').removeClass('show-1');
    });
    $('.close-2').click(function(){
        $('.popup-child-2').removeClass('show-2');
    });
    $('.close-3').click(function(){
        $('.popup-child-3').removeClass('show-3');
    });
});