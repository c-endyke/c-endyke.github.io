    $(document).ready(function(){
    $("#waterfront-title").hide().slideDown(2000);
    });


    $(document).ready(function(){
    $("#home-about").hide().fadeIn(2000);
    });


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


$('nav#main a').removeClass('active');
         $(this).addClass('active')

