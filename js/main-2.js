$(document).ready(function(){


       
        ///somth منتجات Scroll
        $('.prod').click(function(){
            $('html, body').animate({
                scrollTop:$('#منتجات').offset().top
            },1000);
        });
          ///somth Scroll
          $('.cont').click(function(){
            $('html, body').animate({
                scrollTop:$('#contact').offset().top
            },1000);
        });

    

$nav=$('.nav');
$toggleCollapse=$('.toggle-collapse');

/**  click event on toggle menu */

$toggleCollapse.click(function(){
     $nav.toggleClass('collapse');
});


//owl carousel for blog

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
});

});


  

