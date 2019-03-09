/* 
 Author : Azhar Hussain Masum
 Email: azharhussain4647@gmail.com
 Website:http://www.azharmasum.com
 Facebook: https://www.facebook.com/azhar.hussainmasum
 */

// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
// 
// 


// 
// Smooth Scroll and Scrollspy
!function (e) {
    "use strict";
    e('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = e(this.hash);
            if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length)
                return e("html, body").animate({
                    scrollTop: t.offset().top - 48
                },1e3, "easeInOutExpo"), !1;
        }
    }), e("a").click(function () {
        e(".navbar-collapse").collapse("hide");
    }), e("body").scrollspy({
        target: ".navbar",
        offset: 54
    });
    var t = function () {
        e(".navbar").offset().top > 100 ? e(".navbar").addClass("navbar-shrink") : e(".navbar").removeClass("navbar-shrink")
    };
    t(), e(window).scroll(t)
}(jQuery);


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
        $(".menubar").addClass("navbar-fixed-top");
    } else {
        $(".menubar").removeClass("navbar-fixed-top");
        $(".menubar").addClass("main-menu");
    }
    ;
}); // Smooth Scroll and Scrollspy



//MixiTup Filter
 $(function () {
                var containerEl = document.querySelector('.project');

                var mixer = mixitup(containerEl, {
                    animation: {
                        effects: 'fade scale stagger(50ms)' // Set a 'stagger' effect for the loading animation
                    },
                    load: {
                        filter: 'none' // Ensure all targets start from hidden (i.e. display: none;)
                    }
                });

                // Add a class to the container to remove 'visibility: hidden;' from targets. This
                // prevents any flickr of content before the page's JavaScript has loaded.

                containerEl.classList.add('mixitup-ready');

                // Show all targets in the container

                mixer.show()
                        .then(function () {
                            // Remove the stagger effect for any subsequent operations

                            mixer.configure({
                                animation: {
                                    effects: 'fade scale',
                                    duration: 500
                                }
                            });
                        });
            });



//baguetteBox intregration
 $(function (){
      baguetteBox.run('.project', {
           animation: 'fadeIn'
            });
 });


//Wow js 
$(function (){
     new WOW().init();
});

/*-------Client-partt slider-----------*/
   $(function () {
                $("#basic .owl-carousel").owlCarousel({
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 4000,
                    smartSpeed: 500,
                    margin: 0,
                    items: 1,
                    nav: true,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    animateIn: 'zoomIn',
                    animateOut: 'zoomOut',
                    //For more animation effect : https://daneden.github.io/animate.css/,
                    touchDrag: false,
                    mouseDrag: false

                });
            }); /*-------Client-partt slider-----------*/

/*-------Team member slide start-----------*/
$(function () {
    $("#multiple .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        smartSpeed: 400,
        margin: 10,
        center: false,
        dotsEach: true,
        items: 5,
        nav: false,

        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                autoplay: true

            },
            600: {
                items: 2,
                loop: true,
                autoplay: true,
                center: false
            },
            767: {
                items: 3

            },
            1000: {
                items: 3

            },
            1200: {
                items: 4

            }
        }

    });
}); /*-------Team member slide En-----------*/

//Parallax plugin js 
$("#parallax").parallax("70%",0.3);


// Stats Count To Parallax Section
//-----------------------------------------------
/*  */
$(function () {
    if ($(".stats [data-to]").length > 0) {
        $(".stats [data-to]").each(function () {
            var stat_item = $(this),
                    offset = stat_item.offset().top;
            if ($(window).scrollTop() > (offset - 1500) && !(stat_item.hasClass('counting'))) {
                stat_item.addClass('counting');
                stat_item.countTo();
            }
            ;
            $(window).scroll(function () {
                if ($(window).scrollTop() > (offset - 1500) && !(stat_item.hasClass('counting'))) {
                    stat_item.addClass('counting');
                    stat_item.countTo();
                }
            });
        });
    }
    ;
});