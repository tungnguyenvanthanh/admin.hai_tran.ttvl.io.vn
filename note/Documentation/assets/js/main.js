/*===================================================
    Template Scripts
====================================================*/
(function ($) {
    "use strict";

    // Preloader
    $(window).on('load', function () {
        $('body').addClass('loaded');
        setTimeout(function () {
            $('#preloader-wrap').remove();
        }, 5000);
    });

    $(document).ready(function () {

        var html = $('html');

        // Responsive Classes
        function responsiveClasses() {
            var body = $("body");
            if ($(window).width() < 992) {
                body.removeClass("viewport-lg");
                body.addClass("viewport-sm");
            } else {
                body.removeClass("viewport-sm");
                body.addClass("viewport-lg");
            }
        }

        // Window Resize
        $(window).on("resize", function () {
            responsiveClasses();
        }).resize();

        // Current Year
        var currentYear = new Date().getFullYear();
        $('#currentYear').append(currentYear);

        // Scrool To Top
        var scrollTop = $("#scroll-top");
        $(window).on('scroll', function () {
            var topPos = $(this).scrollTop();
            if (topPos > 100) {
                $('#scrollup').removeClass('hide');
                $('#scrollup').addClass('show');

            } else {
                $('#scrollup').removeClass('show');
                $('#scrollup').addClass('hide');
            }
        });

        $(scrollTop).on("click", function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

        $('.nav-link').click(function (e) {
            e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump

            var target = $(this).attr("href"); //Get the target

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 1000, function () {
                location.hash = target;
            });

            return false;
        });

    });

})(jQuery);

! function (o) {
    o(document).ready(function () {
        o(window);
        var t = o(document.body),
            n = o(".main-doc-inner").find(".doc-nav");
        t.scrollspy({
                target: ".doc-sidebar"
            }),
            n.find("> li > a").before(o('<span class="docs-progress-bar" />'));
        n.offset().top;
        o(window).scroll(function () {
            o(".doc-nav").height();
            var t = o(this).scrollTop(),
                n = o(this).innerHeight(),
                e = o(".doc-nav li a").filter(".active").index();
            o(".doc-section").each(function (i) {
                var c = o(this).offset().top,
                    s = o(this).height(),
                    a = c + s,
                    r = 0;
                t >= c && t <= a ? (r = (t - c) / s * 100) >= 100 && (r = 100) : t > a && (r = 100), a < t + n - 70 && (r = 100);
                var d = o(".doc-nav .docs-progress-bar:eq(" + i + ")");
                e > i && d.parent().addClass("viewed"), d.css("width", r + "%")
            })
        })
    })

}(jQuery)
