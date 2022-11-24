jQuery(document).ready(function () {

    $(function () {
        $('input[type="tel"]').mask("+7 (999) 999-99-99");
    });
    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    $('input[type="tel"]').click(function () {
        $(this).setCursorPosition(3);
    });

    $(".scroll-link").click(function () {
        $('html, body').animate({
            scrollTop: $(".why_section").offset().top - 100
        }, 500);
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 15) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    });

    $(".menu-btn, .nav-mobile-plank").click(function () {
        // $(".menu-btn").toggleClass("close")
        console.log('нажато уже')
        $(".nav-mobile").toggleClass("active")
    })
    $(".scroll-link").click(function () {
        $(".nav-mobile").removeClass("active")
        $(".menu-btn").toggleClass("close")
    })
    $(".call-btn").click(function () {
        $(".modal-box").toggleClass("active");
    })

    $(".services_slider").slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: $("#serv-prev"),
        nextArrow: $("#serv-next"),
        appendDots: $(".serv-dots"),
        responsive: [
            {
                breakpoint: 924,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            },
        ]
    })

    $(".news_slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: $("#news-prev"),
        nextArrow: $("#news-next"),
        appendDots: $(".news-dots"),
        responsive: [
            {
                breakpoint: 924,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            },
        ]

    })

    $('.certs_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $(".certs-dots"),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    appendDots: $(".certs-dots-mobile"),

                }
            }
        ]
    });

    $('.certs_slider-large').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $(".certs-dots-large"),
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            }

        ]
    });

    $(".qs-btn").click(function (e) {
        e.preventDefault();
        $(this).parent().next().slideToggle(300);
        $(this).toggleClass("dark")
    })

    AOS.init({
        duration: 800,
    })

})

