$(function() {

     
    $('.navbar-top .btn-search').click(function(ev){
        ev.preventDefault(); 
        $('.search-form .search-container').addClass('search-active');
     });

     
/*      $('.navbar-top .btn-search').focusout(function(ev){
        $('.search-form .search-container').removeClass('search-active');
     }); */
     

});