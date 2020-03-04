$(document).ready(function() {
    $(".pages li.previous", "body").html("<img src='/arquivos/seta-esquerda.png'/>")
    $(".pages li.next", "body").html("<img src='/arquivos/seta-direita.png'/>")


    //FILTRO MOBILE


    const mq = window.matchMedia("(max-width: 1000px)");
    /*if (mq.matches) {
        $(".navigation-tabs").hide();
        $( "<div class='visible-xs visible-sm filtro-btn-mobile'><h4>FILTROS</h4></div>" ).insertBefore( ".navigation-tabs" );
        $(".filtro-btn-mobile").click(()=>{
            $( ".navigation-tabs" ).toggle( "slow" )
        })
    } */
    
});

$(window).on('hashchange', function(e){
    $(".pages li.previous", "body").html("<img src='/arquivos/seta-esquerda.png'/>")
    $(".pages li.next", "body").html("<img src='/arquivos/seta-direita.png'/>")
   });
   $(".pages li.previous", "body").html("<img src='/arquivos/seta-esquerda.png'/>")
   $(".pages li.next", "body").html("<img src='/arquivos/seta-direita.png'/>")

   setInterval(()=>{
    $(".pages li.previous", "body").html("<img src='/arquivos/seta-esquerda.png'/>");
    $(".pages li.next", "body").html("<img src='/arquivos/seta-direita.png'/>");
   }, 1000)


