// Scrolling to sections
$(function() {
    $(".hrs").on('click', function(){
        $("html, body").animate ({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
});

// Scroll to Top
$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        }else {
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function(){
        $('html, body').animate({scrollTop:0}, 500);
    });
});