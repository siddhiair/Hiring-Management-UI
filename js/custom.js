jQuery(document).ready(function($) {
    $( ".sortable" ).sortable({
        connectWith: ".task-wrapper",
        stack: '.task-wrapper',
        placeholder: 'sortable-placeholder'
      }).disableSelection();

      $(".sort-table").dragtable({
          dragaccept:'.draggable-col'
        });

    $(".display-tab button").click(function(e){
        $(".display-tab button").not(this).removeClass("focused");
        $(this).addClass("focused");
        $(".display-wrapper").hide();
        var display = $(this).data("target");
        if($(this).data("display-tab") == 2)
            $(".display-tab").addClass("active-tab2");
        else
            $(".display-tab").removeClass("active-tab2");
        $("#"+display).fadeIn();
    });
    $('.switchbtn input[type="checkbox"]').click(function(){
        var inputValue = $(this).val();
        $("[data-app-class = "+inputValue+"]").slideToggle();
    });
    $(".header-icon").hover(function(){
        $(this).children("i").addClass("in");
    },
    function(){
        $(this).children("i").removeClass("in");
    });

    $(".header-search").click(function(){
        $(".header-search-wrapper").addClass("in");
    });
    $(".close-search").click(function(){
        //$(".header-search-wrapper").hide();
        $(".header-search-wrapper").removeClass("in");
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
        var click_source = $(".setting-more,.more-icon");
        if(click_source.is(e.target)){
            return false;
        }
        var toggle_div = $(".setting-menu,.more-menu");
        if (!toggle_div.is(e.target) && toggle_div.has(e.target).length === 0){
            toggle_div.hide();            
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