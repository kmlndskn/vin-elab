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

        
        $("#involved-slide").owlCarousel({
            items: 3,
            loop: false,
            nav: false,
            dots: false,
            autoplay: false,
            margin: 20
        });
        
        $("#partners-slide").owlCarousel({
            items: 5,
            loop: true,
            nav: false,
            dots: true,
            autoplay: false
        });

        $("#teams-slide").owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            margin: 20, 
            responsive:{
                0:{
                    items:1.5
                },
                575:{
                    items:2.5
                },
                
                1000:{
                    items:3.5
                },
                1200:{
                    items:4.5
                }
            }
        });
    });


})(jQuery);