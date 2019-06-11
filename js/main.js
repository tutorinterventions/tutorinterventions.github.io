$(function () {


    var focusOut = false;
    $('.navbar-top .btn-search').click(function (ev) {
        ev.preventDefault();
        $('.search-form .search-container').addClass('search-active');
        if (!focusOut) {
            focusOut = true;
            $('.gsc-input').focusout(function (ev) {
                $('.search-form .search-container').removeClass('search-active');
            });
        }
    });

    $('.testimonials-wrapper').on('init', function () {
        $(this).removeClass("fh");
    });

    $('.testimonials-wrapper').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 30000,
        dots: true
    });


});