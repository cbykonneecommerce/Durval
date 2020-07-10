

setTimeout(function(){
    $("#admake-advanced-filter > .box-filtro h3").append(`<img src="/arquivos/seta-baixo.png" style="max-width: 26px;float: right; margin-top: -18px;opacity: 0.5;"/>`);

    $("#admake-advanced-filter .opcoes").hide();
    
    $("#admake-advanced-filter > .box-filtro h3").toggle(function() {
        let me = $(this).text().toLowerCase();
        switch (me) {
            case 'faixa de preço':
              me = "faixa-de-preco"
              break;
            default:
              console.log('nada');
          }
        $(`#admake-advanced-filter > .box-filtro.filtro-${me} .opcoes`).slideDown();
    }, function() {
        let me = $(this).text().toLowerCase();
        switch (me) {
            case 'faixa de preço':
              me = "faixa-de-preco"
              break;
            default:
              console.log('nada');
          }
        $(`#admake-advanced-filter > .box-filtro.filtro-${me} .opcoes`).slideUp();
    })

    $("#admake-advanced-filter").css({"visibility":"visible"});
}, 700)

setTimeout(()=>{

  $(".filtro-marca .sub-titulo h3").html(`COLEÇÃO  <img src="/arquivos/seta-baixo.png" style="max-width: 26px;float: right; margin-top: -18px;opacity: 0.5;"/>`)
  $("#admake-advanced-filter").css({"visibility":"visible"});
},1200)


//COISAS PRA FICAR IGUAL O LAYOUT


const mq = window.matchMedia("(max-width: 600px)");
if (mq.matches) {

  setTimeout(()=>{
    $(".resultado-busca-filtro").append($(".searchResultsTime").html());
    $(".resultado-busca-numero:first").hide()
    $("#admake-advanced-filter .opcoes").show();
  
    if($(" #admake-advanced-filter  .filtro-ativo").length && !($(" #admake-advanced-filter  span").length) ) {
      $(".active-filters").prepend(`<span>FILTROS SELECIONADOS:</span>`)
    }
    for(let i = 0; i <  $(" #admake-advanced-filter  .filtro-ativo").length; i++) {
      let texto =  $($(" #admake-advanced-filter  .filtro-ativo")[i]).text();
      
      let link = $($(" #admake-advanced-filter  .filtro-ativo")[i]).next().attr("href");
      console.log(link)
        $(".active-filters").append(`<div class="filter-pill">${texto} <a class="filter-pill-remover" href=${link}></a> </div>`)
    }
  
  },1000)
  
  $(window).on('hashchange', function(e){
    $(".active-filters").html("")
    if($(" #admake-advanced-filter  .filtro-ativo").length && !($(" #admake-advanced-filter  span").length) ) {
      $(".active-filters").prepend(`<span>FILTROS SELECIONADOS:</span>`)
    }
    for(let i = 0; i <  $(" #admake-advanced-filter  .filtro-ativo").length; i++) {
      let texto =  $($(" #admake-advanced-filter  .filtro-ativo")[i]).text();
      
      let link = $($(" #admake-advanced-filter  .filtro-ativo")[i]).next().attr("href");
      console.log(link)
        $(".active-filters").append(`<div class="filter-pill">${texto} <a class="filter-pill-remover" href=${link}></a> </div>`)
    }
  })


  $(".orderBy select option:first").text("ORDERNAR POR");
  $(".orderBy label").hide()

} else {
  $(".resultado-busca-filtro").prepend($(".searchResultsTime").html());


  setTimeout(()=>{
    $("#mySidenav").prepend("<span style='font-weight: 400 !important;color: #8B8B8B !important;text-transform: uppercase;font-size: 12px;'>Filtros selecionados:</span>")
  
    if($(" #admake-advanced-filter  .filtro-ativo").length && !($(" #admake-advanced-filter  span").length) ) {
      $(".active-filters").prepend(`<span>FILTROS SELECIONADOS:</span>`)
    }
    for(let i = 0; i <  $(" #admake-advanced-filter  .filtro-ativo").length; i++) {
      let texto =  $($(" #admake-advanced-filter  .filtro-ativo")[i]).text();
      
      let link = $($(" #admake-advanced-filter  .filtro-ativo")[i]).next().attr("href");
      console.log(link)
        $(".active-filters").append(`<div class="filter-pill">${texto} <a class="filter-pill-remover" href=${link}></a> </div>`)
    }
  
  },1000)
  $(window).on('hashchange', function(e){
    $(".active-filters").html("")
    if($(" #admake-advanced-filter  .filtro-ativo").length && !($(" #admake-advanced-filter  span").length) ) {
      $(".active-filters").prepend(`<span>FILTROS SELECIONADOS:</span>`)
    }
    for(let i = 0; i <  $(" #admake-advanced-filter  .filtro-ativo").length; i++) {
      let texto =  $($(" #admake-advanced-filter  .filtro-ativo")[i]).text();
      
      let link = $($(" #admake-advanced-filter  .filtro-ativo")[i]).next().attr("href");
      console.log(link)
        $(".active-filters").append(`<div class="filter-pill">${texto} <a class="filter-pill-remover" href=${link}></a> </div>`)
    }
  })
  
}