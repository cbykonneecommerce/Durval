$(document).ready(function() {
    $(".pages li.previous", "body").html("<img style='max-width:35px' src='/arquivos/seta-esquerda.png'/>")
    $(".pages li.next", "body").html("<img style='max-width:35px' src='/arquivos/seta-direita.png'/>")


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
    $(".pages li.previous", "body").html("<img style='max-width:35px' src='/arquivos/seta-esquerda.png'/>")
    $(".pages li.next", "body").html("<img style='max-width:35px' src='/arquivos/seta-direita.png'/>")
   });
   $(".pages li.previous", "body").html("<img style='max-width:35px' src='/arquivos/seta-esquerda.png'/>")
   $(".pages li.next", "body").html("<img style='max-width:35px' src='/arquivos/seta-direita.png'/>")

   setInterval(()=>{
    $(".pages li.previous", "body").html("<img style='max-width:35px' src='/arquivos/seta-esquerda.png'/>");
    $(".pages li.next", "body").html("<img style='max-width:35px' src='/arquivos/seta-direita.png'/>");
   }, 1000)



/*


   $(".box-item").each( async function(index) {
    let myId = $(".product-name a span", this).text();
    myId= parseInt(myId);
    skusonprod = [];
    await vtexjs.catalog.getProductWithVariations(myId).done(function(product){
        console.log(product);

         skusonprod = product.skus.map(element=>{
            let contentli = `<li><img  src=${element.image}/></li>`
            return contentli;
        })
       
        

    });
    $(".product-name", this).prepend(`<ul class="sku-list list-inline">${skusonprod.join(" ")}</ul>`);
   })

   //fetch("/api/catalog_system/pub/products/search/sandalia-noiva-confort-branca-salto-alto-branco").then((a)=>{return a.json()}).then(f=> console.log(f))


*/
   $(".box-item").each( async function(index) {

    let myId = $(".product-name a", this).text();
    fetch(`/api/catalog_system/pub/products/search/${myId}`)
    .then((a) =>  a.json())
    .then(dados => {
        $(".product-name", this).prepend(`<ul class="sku-list list-inline"></ul>`);
        console.log(dados)
        let currentProduct = {}
       let thisID = $(".product-name a span", this).text();
        currentProduct = dados.filter( dado => dado.productId == thisID);
        currentProduct = currentProduct[0]
        console.log(currentProduct)
        let similares = currentProduct['Produtos Similares'];
        similares = similares[0].split(",")
        
        console.log(similares)
       
        similares.forEach(function(index) {
            let myId = index
            myId= parseInt(myId);
            skusonprod = [];
            console.log("entrei")
           vtexjs.catalog.getProductWithVariations(myId).done(function(product){
                console.log("montei")
               let item = product.skus[0];
               item.link = product.name.replace(/[\s/,]+/g, '-');
               item.cor = product.name.split('-').pop().split('-')[0].replace(/[\s/,]+/g, '');
                let cores =`
                <li style="display:inline-block;margin: 15px 8px">
                    <a href=${"/" + item.link + "/p"} style="color: #000;text-decoration: none;">
                    <img src=${item.image} />
                    </a>
                </li>
            `
            $(".sku-list.list-inline").append(cores);
            });
           
           })
 
 
    })
   })


   