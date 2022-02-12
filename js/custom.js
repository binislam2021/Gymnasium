$(document).ready(function(){
    'use strict';

    // Slick Slider on the Banner
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
    });

    // VenoBox on the About
    new VenoBox({
        selector: '.abt-vdo'
    });

    // VenoBox on the Gallery
    new VenoBox({
        selector: '.gall-pop',
        numeration: true,
        share: true,
        spinner: 'wave',
        spinColor: '#e23e38'
    });

    // Slick Slider on the Testimonial
    $('.feedback-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        autoplay: true,
        pauseOnHover: false,
    });


    // Counter Up on the Funfact
    $('.counter').counterUp({
        delay: 1,
        time: 800,
    });

    // Slick Slider on the Brand
    $('.brand-slider').slick({
        slidesToShow: 5,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        
        prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',
    });
    
});