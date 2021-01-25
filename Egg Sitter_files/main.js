jQuery(document).ready(function($) {
    var popup = $('.popup');

    setTimeout(function() {
        popup.fadeIn();
    }, 15000);
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            popup.fadeOut();
        }
    });

    $('.close').click(function() {
        popup.fadeOut();
    });


    $(".scroll_to_form").on("touchend, click", function(e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: $('.block6 form').offset().top }, 400);
    });
});