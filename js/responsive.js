$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true,
        },
        600:{
            items:3,
            nav:false,
            loop:true,
        },
        1000:{
            items:3,
            nav:true,
            loop:true,
        }
    }
})
});