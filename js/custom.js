$(document).ready(function(){
    'use strict';

    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
    });

    new VenoBox({
        selector: '.abt-vdo'
    });
    
});