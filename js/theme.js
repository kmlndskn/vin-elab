/**
 * This is main script file that contains JS code.
 */
 (function ($) {

    // Show Menu Mobile
    $(document).ready(function(){
        // Show
        $(".action.show-menu").on('click', function () {
            if(!$(".page-header").hasClass("show-nav")) {
                $(".page-header").addClass('show-nav');
                $("html").css({
                    "overflow": "hidden", 
                    "height": "100%"
                 });
            }
        });

        // Hide
        $(".action.close-menu").on('click', function () {
            $(".page-header").removeClass('show-nav');
            $("html").css({
                "overflow": "auto"
             });
        });
         
        
    });

    $(document).on('click','.megamenu .mega-menu-link',function(e){

        e.preventDefault();
        if($(this).parent().hasClass('active')) {
            $(this).parent().find("> .mega-sub-menu").slideUp('slow');;
            $(this).parent().removeClass("active");

        } else {
            $(".megamenu > .megamenu-item.active").find("> .mega-sub-menu").slideUp('slow');;
            $(".megamenu > .megamenu-item.active").removeClass("active");
            $(this).parent().find("> .mega-sub-menu").slideDown('slow');;
            $(this).parent().addClass("active");
        }
    }); 

     // Home Page

     $(document).ready(function(){
        $("#blogs-slide").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            onInitialized: function(){
                $("#blogs-slide").addClass('loaded');
            },
        });
    });


})(jQuery);