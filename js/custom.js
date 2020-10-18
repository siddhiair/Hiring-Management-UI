jQuery(document).ready(function($) {
    $( ".sortable" ).sortable();
    $(".draggable").each(function(){
        $( this).draggable({
            connectToSortable: ".sortable",
           revert: "invalid"
        });
    });

    $(".display-tab>a").click(function(){
       var display = $(this).data("target");
       $(".display-wrapper").hide();
       $("#"+display).fadeIn(); 
    });

    $('.switchbtn input[type="checkbox"]').click(function(){
        var inputValue = $(this).val();
        //$("." + inputValue).slideToggle();
        $("[data-app-class = "+inputValue+"]").slideToggle();
    });
    $(".header-icon").hover(function(){
        $(this).children("i").addClass("in");
    },
    function(){
        $(this).children("i").removeClass("in");
    });

    $(".setting-more").click(function(){
        $(this).next(".setting-menu").fadeToggle(100);
        $(".card-prop-menu").hide();
    });
    $(".card-prop-more").click(function(){
        $(this).siblings(".card-prop-menu").show();
    });
    $(".card-prop-back").click(function(){
        $(this).parent(".card-prop-menu").hide();
    });
    
});