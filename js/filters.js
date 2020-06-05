

setTimeout(function(){
    $("#admake-advanced-filter > .box-filtro h3").append(`<img src="/arquivos/seta-baixo.png" style="max-width: 26px;float: right; margin-top: -18px;"/>`);

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
}, 1000)