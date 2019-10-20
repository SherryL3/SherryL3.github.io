//Smooth Scroll Effect
$('html,body').smoothScroll(500);
$('#up').on('click',function(){
    $('html,body').animate({scrollTop:0},2000);
});