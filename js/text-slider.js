$(document).ready(function () {
    //rotation speed and timer
    function initSlider() {
        var container = $('.intro-para ul');
        var slides = $('.intro-para li');
        var item_width;
        function setSizes() {
            //get the width from the parent parent because this
            //is not changed by the script. We need this for
            //when we call setSizes after window resize
            item_width = container.parent().parent().width();
            slides.width(item_width); //set the slides to the correct pixel width
            container.parent().width(item_width);
            container.width(slides.length * item_width); //set the slides container to the correct total width
        }

        setSizes();
        // adjust the container so current is in the frame
        function resetSlides() {
            container.css({
                'left': -1 * item_width
            });
        }


        var currentSlide = 0;
        function next() {
            container.stop().animate({
                'left': item_width * -2
            }, 1500, function () {
                container.find('li:last').after(container.find('li:first'));
                resetSlides();
            });
        }
        resetSlides();
        var speed = 20000;
        setInterval(next, speed);
        slides.removeClass("hidden");

        $(window).resize(function(){
            setSizes();
            resetSlides();
        });
    }

    initSlider();

});
