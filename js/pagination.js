$(document).ready(function() {
    $(".pages li.previous", "body").html("<img style='max-width:35px' src='/arquivos/seta-esquerda.png'/>")
    $(".pages li.next", "body").html("<img style='max-width:35px' src='/arquivos/seta-direita.png'/>")


    //FILTRO MOBILE

    const mq = window.matchMedia("(max-width: 600px)");
    if (mq.matches) {
        $(".resultado-busca-filtro").append(` <a  onclick="openNav()" id="open" style="color: #333;
        border: solid 1px #E4E5E9 !important;
        text-decoration: none;
        padding: 9px;
        display: inline-block;">FILTROS</a>`);
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
    generateSimilar();
   });




   