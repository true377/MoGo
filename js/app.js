$(function() {

    var header = $("#header"), 
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


        // Header Fixed
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });



    function checkScroll(scrollOffset) {
        

        if(scrollOffset >= introH) {
                header.addClass("fixed");
        }   else {
                header.removeClass("fixed");
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;


        $("#nav a").removeClass("active"),
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000);

    });


    // nav toggle
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });



    // Collapse
   
       
       
   $(".accordion").ready(function(){
    

      $(".accordion .accordion_item:first").addClass("active");   //(1)
    $(".accordion .accordion_item:not(:first)").hide();   //(2)

    $(".accordion .accordion_heaader").click(function(){   //(3)

        $(this).next(".accordion_content").slideToggle("slow")   //(4)
        .siblings(".accordion_content").slideUp("slow");   
        $(this).toggleClass("active");   //(5)
        $(this).siblings(".accordion_heaader").removeClass("active");   //(6)
     });

 });



    // Slider
    $("[data-slider]").slick( {
        infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });



});
