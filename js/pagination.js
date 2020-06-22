$(document).ready(function() {
    $(".pages li.previous", "body").html("<img style='max-width:35px' src='/arquivos/seta-esquerda.png'/>")
    $(".pages li.next", "body").html("<img style='max-width:35px' src='/arquivos/seta-direita.png'/>")


    //FILTRO MOBILE

    const mq = window.matchMedia("(max-width: 600px)");
    if (mq.matches) {
        $(".resultado-busca-filtro").prepend(` <a  onclick="openNav()" id="open" style="color: #333;
        border: solid 1px #E4E5E9 !important;
        text-decoration: none;
        padding: 10px;
        display: inline-block;
        font-size: 12px;">FILTROS</a>`);


        
  let qtd = $(".resultado-busca-numero");
  $(".resultado-busca-numero").remove();
  $(".resultado-busca-filtro").append(qtd[0]);
  $(".resultado-busca-numero").attr("style","margin:10px 21px 0px 68px")
  
  $(".resultado-busca-filtro").append(qtd[0]);
  $(".resultado-busca-numero").attr("style","margin:10px 21px 0px 68px")

    }
 

    
});

$(window).on('hashchange', function(e){

    $(".pages li.previous", "body").html("<img style='max-width:35px' src='/arquivos/seta-esquerda.png'/>")
    $(".pages li.next", "body").html("<img style='max-width:35px' src='/arquivos/seta-direita.png'/>")

   });
   $(".pages li.previous", "body").html("<img style='max-width:35px' src='/arquivos/seta-esquerda.png'/>")
   $(".pages li.next", "body").html("<img style='max-width:35px' src='/arquivos/seta-direita.png'/>")

   setInterval(()=>{
    $(".pages li.previous", "body").html("<img style='max-width:35px' src='/arquivos/seta-esquerda.png'/>");
    $(".pages li.next", "body").html("<img style='max-width:35px' src='/arquivos/seta-direita.png'/>");
   }, 1000)



 




 
 
$(window).on('hashchange', function(e){
    setTimeout(()=>{
        generateDiscountFlag();
        generateSimilar();
    },2000)
  
   });


   $("#vermaisbtn").click(()=>{
       $(".hidden-content").show();
       $("#vermaisbtn").hide();
   })



   