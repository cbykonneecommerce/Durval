

$(document).ready(function() {
 
    
$("#carouselpropostas").owlCarousel({
 
    autoPlay: 3000, //Set AutoPlay to 3 seconds

    items : 1,
    itemsDesktop : [1199,6],
    itemsDesktopSmall : [979,1],
    navigation: false,
    stopOnHover: true,
    pagination: false

});







$(".owl-prev").html("<img src='/arquivos/seta-esquerda.png' />");
$(".owl-next").html("<img src='/arquivos/seta-direita.png' />");
   
  });

  