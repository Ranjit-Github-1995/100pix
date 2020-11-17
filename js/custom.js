//main navigation
jQuery(".navbar-nav li").click(function() {
    if (jQuery(this).parent('li').parent('ul').hasClass('sub-menu')) {
        jQuery(this).toggleClass("toggled");
    } else if (jQuery(this).hasClass("toggled")) {
        jQuery(this).removeClass('toggled');
    } else if (jQuery('.navbar-nav li .clickD').hasClass('toggled')) {
        jQuery('.navbar-nav li .clickD').removeClass('toggled');
        jQuery(this).toggleClass("toggled");
    } else {
        jQuery(this).toggleClass("toggled");
    }
});
//Wow js 
new WOW().init();


//Toggle Button

$(document).ready(function() {
    $(".navbar-toggler").click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('open');
        $('body').toggleClass('_overHidden');
        if ($('.navbar-collapse').hasClass("show")) {
            $('.navbar-collapse').removeClass("show");
        } else {
            $('.navbar-collapse').addClass("show");
        }
    });
    $(document).on('click', function(e) {
        var menu_opened = $('.navbar-collapse').hasClass('show');
        if (!$(e.target).closest('.navbar-collapse').length &&
            !$(e.target).is('.navbar-collapse') &&
            menu_opened === true) {
            $('.navbar-collapse').collapse('toggle');
            $('.navbar-toggler').removeClass('open');
            $('body').toggleClass('_overHidden');
        }
    });
});


/********** Slider 1 *********/
var owl = $('._slider-1');
owl.owlCarousel({
    loop: true,
    nav: true,
    navText: ["<img src='images/left-arrow.png' alt='' class='_left' />", "<img src='images/right-arrow.png' alt='' class='_right' />"],
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 1
        },
        1200: {
            items: 1,
            slideBy: 1
        }
    }
});


/********** Slider 1 *********/
var owl = $('._testSlider');
owl.owlCarousel({
    loop: true,
    nav: true,
    navText: ["<img src='images/left-arrow.png' alt='' class='_left' />", "<img src='images/right-arrow.png' alt='' class='_right' />"],
    margin: 0,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        992: {
            items: 3
        },
        1200: {
            items: 3,
            slideBy: 1
        }
    }
});

//Scroll to top jaqury 

$(document).ready(function() {
    var scrollBtn = $('._scrollTop');
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scrollBtn).css('opacity', '1');
        } else {
            $(scrollBtn).css('opacity', '0');
        }
    });
    $(scrollBtn).on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    });

});

// Active isotope with jQuery code
$('.iso-content').isotope({
    itemSelector: '.single-project',
    layoutMode: 'fitRows'
});

// Isotope click function
$('.iso-nav ul li').click(function() {
    $('.iso-nav ul li').removeClass('gallery-active');
    $(this).addClass('gallery-active');
    var selector = $(this).attr('data-filter');
    $('.iso-content').isotope({
        filter: selector
    });
    return false;
});



$('._inputMsgDiv a[data-toggle="modal"]').on('click', function() {
    // $(this).parents('.modal').removeClass('show');
});
// Owlcar example 1 start
// var owl = $('#bannerSlider');
// owl.owlCarousel({
//     loop: true,
//     nav: true,
//     navText: ["prev..", "next.."],
//     margin: 15,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 2
//         },
//         960: {
//             items: 2
//         },
//         1200: {
//             items: 1,
//             slideBy: 1
//         }
//     }
// });
// Owlcar example 1 end