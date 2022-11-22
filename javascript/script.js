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

    $(window).scroll(function () {
        if ($(document).scrollTop() > 15) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    });

    $(".menu-btn").click(function () {
        $(".menu-btn").toggleClass("close")
        $(".nav-mobile").toggleClass("active")
    })

    $(".services_slider").slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: $("#serv-prev"),
        nextArrow: $("#serv-next"),
        appendDots: $(".serv-dots")
    })

    $(".news_slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: $("#news-prev"),
        nextArrow: $("#news-next"),
        appendDots: $(".news-dots")

    })

    $('.certs_slider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $(".certs-dots"),
    });

    $('#reviews_slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        appendDots: $(".reviews_slider-btns-box"),
        responsive: [
            {
                breakpoint: 924,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            }
        ]
    });

})

