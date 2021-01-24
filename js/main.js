//Efecto fixed en el menu con jquery
$(window).scroll(function(){
    var scrl=$(window).scrollTop();
    if(scrl<60){
        $('.header-1').removeClass('fixedbar');
    }else{
        $('.header-1').addClass('fixedbar');
    }
});
//Fin del Efecto fixed en el menu
