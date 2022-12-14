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
            loop: true,
            nav: false,
            dots: false,
            autoplay: false,
            margin: 20,
            responsive:{
                0:{
                    items:1.5
                },
                767:{
                    items:2.5
                },
                
                1000:{
                    items:3
                }
            }
        });
        
        $("#partners-slide").owlCarousel({
            items: 5,
            loop: true,
            nav: false,
            dots: false,
            autoplay: false,
            margin: 20,
            responsive:{
                0:{
                    items:1.5
                },
                767:{
                    items:2.5
                },
                
                1000:{
                    items:3,
                    nav: true
                },
                1200:{
                    items:5,
                    nav: true
                }
            }
        });

        $("#teams-slide").owlCarousel({
            items: 5,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            margin: 20, 
            responsive:{
                0:{
                    items:1.5
                },
                767:{
                    items:2
                },
                
                1000:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });

        $("#teams-slide-incubator, #involved-overview-slide").owlCarousel({
            items: 4,
            loop: false,
            nav: true,
            dots: false,
            autoplay: false,
            margin: 20, 
            responsive:{
                0:{
                    items:1.2
                },
                767:{
                    items:2.3
                },
                
                1000:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });

        $("#mentors-slide").owlCarousel({
            items: 4,
            loop: false,
            nav: true,
            dots: false,
            autoplay: false,
            margin: 20, 
            responsive:{
                0:{
                    items:1
                },
                767:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        });

        $("#our-team-slide, #students-slide").owlCarousel({
            items: 3,
            loop: false,
            nav: false,
            dots: false,
            autoplay: false,
            margin: 20, 
            responsive:{
                0:{
                    items:1.5
                },
                767:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        });



        

        // block teams

        let $spaceLeft = $(".block-teams .block-title .heading ").offset().left;

        $(".block-slide-stage-right  .block-content").css({
            "padding-left": $spaceLeft,
        });

        // Component Somethings
        let $heightItem = $(".block-somethings .only-show-desktop .line").height();
        $( ".block-somethings .only-show-desktop .line > .item" ).each(function( index ) {
            if($(this).hasClass('active')) {  
                $(this).css({
                    "width": "calc( ( 100% - 40px ) * 0.4 )",
                    "height": $heightItem
                });
            } else {
                $(this).css({
                    "width": "calc( ( 100% - 40px ) / 3 )",
                    "height": $heightItem
                });
            }
        });

        $(".block-somethings .block-content .owl-carousel").owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplay: false,
            margin: 20, 
            responsive:{
                0:{
                    items:1.5
                },
                767:{
                    items:2.5
                },
                
                1000:{
                    items:3.5
                }
            }
        });

    });

    $(document).on('mouseover','.block-somethings .only-show-desktop .line > .item',function(e){
        if(!$(this).hasClass('active')) {  
            $(this).parent().find("> .active").removeClass('active');
            $(this).addClass('active');
            $(this).parent().find("> .item").css({
                'width':"calc( ( 100% - 40px ) * 0.3 )",                
            });  
            $(this).css({
                'width':"calc( ( 100% - 40px ) * 0.4 )",           
            });  
        };
    });

    /*JS for vertical thumbnail slide */

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        asNavFor: '.slider-nav',
        arrows: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
    });
    $('.slider-nav').slick({
        slidesToShow: 4.5,
        slidesToScroll: 1,
        vertical:true,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        verticalSwiping:true,
        responsive: [
        {
            breakpoint: 992,
            settings: {
              vertical: false,
            }
        },
        {
          breakpoint: 768,
          settings: {
            vertical: false,
          }
        },
        {
          breakpoint: 580,
          settings: {
            vertical: false,
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 380,
          settings: {
            vertical: false,
            slidesToShow: 2,
          }
        }
        ]
    });

    $("#competition-slide").owlCarousel({
        items:3,
        loop: true,
        nav: false,
        dots: false,
        autoplay: false,
        margin: 20, 
        responsive:{
            0:{
                items:1.5
            },
            767:{
                items:2.5
            },
            
            1000:{
                items:3
            }
        }
    });


})(jQuery);