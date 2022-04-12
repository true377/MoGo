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
   
       
       
   $("[data-collapse]").ready(function(){
    

    $(".accordion .accordion_item:first").eq(2).addClass("active");
    $(".accordion .accordion_content:not(:first)").eq(2).show();

    $(".accordion .accordion_heaader").click(function(){
        $(this).next(".accordion_content").slideToggle("slow")
        .siblings(".accordion_content:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings(".accordion_heaader").removeClass("active");
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
