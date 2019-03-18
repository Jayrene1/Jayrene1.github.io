$(document).ready(function() {

    $(function () {
        $(document).scroll(function () {
          var $nav = $("#sticky-nav");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $('.collapse').collapse('hide');

    $('.fa-angle-down').on("click", function() {
        $('.fa-angle-down').toggleClass('flip');
    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 300, 'swing');
    });

});