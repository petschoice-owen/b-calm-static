var $ = jQuery;

// top navigation function
var windowScrolled = () => {
    function checkScroll() {
        if ($(window).scrollTop() >= 50) {
            $(".top-navigation").addClass("scrolled");
        } else {
            $(".top-navigation").removeClass("scrolled");
        }
    }

    $(document).ready(function() {
        checkScroll();
        $(window).scroll(checkScroll);
    });
}
  
// slider function
var customSlider = () => {
    if ($(".custom-slider")) {
        $('.custom-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            infinite: true,
            speed: 1500,
            dots: false,
            prevArrow: false,
            nextArrow: false,
            swipe: false,
            // fade: true,
            // cssEase: 'linear'
        });
    }  
}
  
// main element - auto padding-top
var mainAutoPadding = () => {
    if ($(".top-navigation")) {
        var topNavHeight = $(".top-navigation").height();
    
        $(".top-navigation + main").css("padding-top", topNavHeight+"px");
        
        var footerHeight = $(".footer-section").outerHeight();
        var heroHeight = topNavHeight + footerHeight;
        
        $(".hero").css("height", "calc(100vh - " + heroHeight + "px)");
    
        var contentHeight = $(".hero .wrapper").outerHeight();
        var heroHeight = contentHeight + 200;
        var heroHeightMobile = contentHeight + 100;
    
        if ($(window).width() <= 767) {
            $(".hero").css("min-height", heroHeightMobile);
        }
        else {
            $(".hero").css("min-height", heroHeight);
        }
    }
}

// footer functions
var footerFunctions = () => {
    if ($(".footer-section .phone-number").length) {
        var phoneNumber = $(".footer-section .phone-number").text();
        var numberFormatted = phoneNumber.replace(/\s/g, '').replace(/[^a-zA-Z0-9 ]/g, '');

        $(".footer-section .phone-number").attr("href", "tel:+" +numberFormatted);
    }
}

// top-navigation - click to scroll to section
var scrollTarget = () => {
    $(".top-navigation .navbar-nav a").each(function() {
        $(this).click(function(e) {
            e.preventDefault();
            var navHref = $(this).attr("data-href");
            var windowSize = $(window).width();

            // if (windowSize < 576) {
            //     console.log("screen width is less than 576");
            // }
            if (windowSize < 768) {
                $('html, body').animate({
                    scrollTop: $(navHref).offset().top-68
                }, 'fast'); 
            }
            else if (windowSize < 992) {
                $('html, body').animate({
                    scrollTop: $(navHref).offset().top-95
                }, 'fast'); 
            }
            else if (windowSize < 1200) {
                $('html, body').animate({
                    scrollTop: $(navHref).offset().top-126
                }, 'fast'); 
            }
            else if (windowSize < 1400) {
                $('html, body').animate({
                    scrollTop: $(navHref).offset().top-146
                }, 'fast'); 
            }
            else {
                $('html, body').animate({
                    scrollTop: $(navHref).offset().top-166
                }, 'fast'); 
            }
        });
    });

    $(".top-navigation .logo-link").click(function(e) {
        e.preventDefault();
        var navHref = $(this).attr("data-href");

        $('html, body').animate({
            scrollTop: $(navHref)
        }, 'fast'); 
    });

    if ($(window).width() < 992) {
        $(".top-navigation .navbar-nav a").each(function() {
            $(this).click(function() {
                $(".top-navigation .navbar-toggler").click();
            });
        });
    }
}

  
/* Initialize the Functions */
windowScrolled();
  
$(document).ready(function() {
    // customSlider();
    mainAutoPadding();
    footerFunctions();
});
  
$(window).resize(function() {
    mainAutoPadding();
    scrollTarget();
});

$(window).on("load", function() {
    scrollTarget();
    new WOW().init();
});
  