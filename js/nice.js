
    var leftArow = $('.testmonial .fa-chevron-left'),
    rightArow = $('.testmonial .fa-chevron-right');
function checkClient(){
    
    $('.client:first').hasClass('active')? leftArow.fadeOut() :leftArow.fadeIn();
    $('.client:last').hasClass('active')? rightArow.fadeOut() :rightArow.fadeIn();       
} 

checkClient();

$('.testmonial i').click(function(){
    if($(this).hasClass('fa-chevron-right')){
        $('.testmonial .active').fadeOut(100 ,function(){
            $(this).removeClass('active').next('.client').addClass('active').fadeIn();
            checkClient();
        });
    }else{
        $('.testmonial .active').fadeOut(100 ,function(){
            $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
            checkClient();
        });
    }


});

