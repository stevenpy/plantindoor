/*
* ----------------------------------------------------------------------------------------
Author       : Onepageboss
Template Name: AISHA Material Design HTML5 Agency Template
Version      : 1.0

   ____                   _____                             ____     ____     _____    _____ 
  / __ \                 |  __ \                           |  _ \   / __ \   / ____|  / ____|
 | |  | |  _ __     ___  | |__) |   __ _    __ _    ___    | |_) | | |  | | | (___   | (___  
 | |  | | | '_ \   / _ \ |  ___/   / _` |  / _` |  / _ \   |  _ <  | |  | |  \___ \   \___ \ 
 | |__| | | | | | |  __/ | |      | (_| | | (_| | |  __/   | |_) | | |__| |  ____) |  ____) |
  \____/  |_| |_|  \___| |_|       \__,_|  \__, |  \___|   |____/   \____/  |_____/  |_____/ 
                                            __/ |                                            
                                           |___/                                             
* ----------------------------------------------------------------------------------------
*/

(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER
         * ----------------------------------------------------------------------------------------
         */
        $(window).load(function () {
            $('.preloader').fadeOut();
            $('.preloader-area').delay(350).fadeOut('slow');
        });



        /*
         * ----------------------------------------------------------------------------------------
         *  CHANGE MENU BACKGROUND
         * ----------------------------------------------------------------------------------------
         */
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('menu-bg');
            } else {
                $('.header-top-area').removeClass('menu-bg');
            }
        });


        /*
         * ----------------------------------------------------------------------------------------
         *  SMOTH SCROOL
         * ----------------------------------------------------------------------------------------
         */
        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  WORK JS
         * ----------------------------------------------------------------------------------------
         */

        $('.work-inner').mixItUp();


        /*
         * ----------------------------------------------------------------------------------------
         *  TESTIMONIAL
         * ----------------------------------------------------------------------------------------
         */
        $(".testimonial-list").owlCarousel({
            items: 1,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: false,
            autoHeight: true,
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  GOOGLE MAP
         * ----------------------------------------------------------------------------------------
         */
        var contact = {
            "lat": "-37.7622470161679",
            "lon": "145.06004333496094"
        }; //Change a map coordinate here!
        try {
            $('.map').gmap3({
                action: 'addMarker',
                latLng: [contact.lat, contact.lon],
                map: {
                    center: [contact.lat, contact.lon],
                    zoom: 5
                },
            }, {
                action: 'setOptions',
                args: [{
                    scrollwheel: false
						}]
            });
        } catch (err) {

        }

        /*
         * ----------------------------------------------------------------------------------------
         *  EXTRA JS
         * ----------------------------------------------------------------------------------------
         */
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  SCROOL TO UP JS
         * ----------------------------------------------------------------------------------------
         */
        $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').on("click", function () {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });

    });

})(jQuery);