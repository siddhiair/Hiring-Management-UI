jQuery(document).ready(function($) {
    $( ".sortable" ).sortable({
        connectWith: ".task-wrapper",
        stack: '.task-wrapper',
        placeholder: 'sortable-placeholder'
      }).disableSelection();

      $(".sort-table").dragtable({
          dragaccept:'.draggable-col'
        });

    $(".display-tab>a").click(function(){
        $(".display-tab>a").removeClass("active");
        $(this).addClass("active");
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
        $(".setting-menu").not($(this).next()).hide();
        $(this).next(".setting-menu").fadeToggle(100);
        $(".card-prop-menu").hide();
    });
    $(".card-prop-more").click(function(){
        $(this).siblings(".card-prop-menu").show();
    });
    $(".card-prop-back").click(function(){
        $(this).parent(".card-prop-menu").hide();
    });
    $(document).mousedown(function (e){
        if($(e.target).hasClass("setting-more") || $(e.target).hasClass("more-icon")){
            return false;
        }
        var container = $(".setting-menu,.more-menu");
        if (!container.is(e.target) && container.has(e.target).length === 0 || source.is(e.target) && source.has(e.target).length != 0){
            //console.log(container.length);
            container.hide();          
           // e.stopPropagation();  
        }
    });
    $(".more-icon").click(function(){
        $(".more-menu").not($(this).next()).hide();
        $(this).next(".more-menu").toggle();
    });
    $('.modal-toggle').on('click', function(e) {
        e.preventDefault();
        $('.modal').toggleClass('is-visible');
    });

    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    var maxDate = year + '-' + month + '-' + day;    
    $('.disable-future-dates').attr('max', maxDate);
    
});