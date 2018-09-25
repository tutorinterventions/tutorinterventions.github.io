$(function() {

    
    var focusOut = false; 
    $('.navbar-top .btn-search').click(function(ev){
        ev.preventDefault(); 
        $('.search-form .search-container').addClass('search-active');
        if(!focusOut){
            focusOut = true;
            $('.gsc-input').focusout(function(ev){
                $('.search-form .search-container').removeClass('search-active');
            }); 
        }
     });

});