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
            }
        });

        // Hide
        $(".action.close-menu").on('click', function () {
            $(".page-header").removeClass('show-nav');
        });
        
    });
    
})(jQuery);