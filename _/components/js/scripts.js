$(document).ready(function() {
    $('.slides').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.slick-dots').wrap('<div class="center-content"></div>');
    //mobile menu
    var mobileMenu = function() {
        $('#global-header .hamburger').click(function() {
            $(this).toggleClass('is-active');
            $('#global-header nav').fadeToggle("slow", "linear");
            $('body').toggleClass('body-fix');
        });

    };
    mobileMenu();


});
