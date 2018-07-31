$(function() {

     
    $('.navbar-top .btn-search').click(function(ev){
        ev.preventDefault(); 
        $('.search-form input').toggleClass('search-active');
     });

});