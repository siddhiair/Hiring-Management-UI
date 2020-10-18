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
        var inputValue = $(this).attr("value");
        $("." + inputValue).slideToggle();
    });
    
});