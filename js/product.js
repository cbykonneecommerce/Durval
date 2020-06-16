
$(".notifymetitle.notifyme-title").text("Produto indisponível");
$(".sku-notifyme-form p").text("Avise-me quando estiver disponível");



$(document).ready(function() {
    $(".product-details .seletor-sku .specification").text("ESCOLHA O TAMANHO")

    const mq = window.matchMedia("(max-width: 600px)");

    if (mq.matches) {

        let aa =   $(".product-image .apresentacao .thumbs").contents()

        const imgsLength = $(".product-image .apresentacao .thumbs a img").length;

        for(let i= 0; i < imgsLength; i++) {
            let imgProduct = $($(".product-image .apresentacao .thumbs a img")[i]).attr("src");
            imgProduct = imgProduct.replace(/-55-55/g, '-500-500');
            $($(".product-image .apresentacao .thumbs a img")[i]).attr("src",imgProduct);
        }

        
        $(".product-image .apresentacao .thumbs").owlCarousel({
 
            autoPlay: 3000, //Set AutoPlay to 3 seconds
        
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            navigation: false,
            stopOnHover: true,
            pagination: true
        
        });


        $(".product-info .seletor-sku .select label").click(()=>{
            setTimeout(()=>{$(".product-image .apresentacao .thumbs").html(aa)},800)
            
        })


        $(".product-info .shipping-box label").click(()=>{
            $(".product-info .shipping-box label .fitext").css({"display": "block"});
            $(".product-info .shipping-box .freight-btn").css({"display": "inline-block"});
        })

        
$(".owl-prev").html("<img src='/arquivos/seta-esquerda.png' />");
$(".owl-next").html("<img src='/arquivos/seta-direita.png' />");
    }
  
})



setTimeout(function () {
    $(".product-info .shipping-box label").click(()=>{
        $(".product-info .shipping-box label .fitext").css({"display": "block"});
        $(".product-info .shipping-box .freight-btn").css({"display": "inline-block"});
    })
    $(".desk-info-nav a#first").css({ "color": "#BEBEBE" });
    $(".product-info .shipping-box label", "body").prepend(`<img src="/arquivos/truck.png" style="margin-right: 10px" >`)
    $(".glis-popup-link.glis-thickbox.tb-added.qvBinded", "body").html(`<img src="/arquivos/CORACAO.png" style="max-width: 18px"> ADICIONAR A LISTA DE DESEJOS`);
    $("#TB_closeWindowButton").html(`<img src="/arquivos/menu-close.png" style="max-width:25px"/>`);




    $(".share-btns #wppshare").attr("href", 'https://web.whatsapp.com/send?l=en&text=' + encodeURIComponent(window.location.href));

    const mq = window.matchMedia("(max-width: 600px)");
    if (mq.matches) {
        if (navigator.userAgent.match(/iPhone|Android/i)) {
            $(".share-btns #wppshare").attr("href", 'https://api.whatsapp.com/send?text=' + encodeURIComponent(window.location.href));
        }
        
    }


    $(".share-btns #fbshare").attr("href", `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`);
    $(".share-btns #pinshare").attr("href", `https://pinterest.com/pin/create/button/?url=${window.location.href}`);



            //GERADOR DE FLAG DESCONTO
            let oldprice = 0;
            let newprice = 0;
            let hasdiscount = false;
            for(let i = 0; i < skuJson.skus.length; i++){
                if(skuJson.skus[i].available && skuJson.skus[i].listPrice > 0) {
                    oldprice = skuJson.skus[i].listPrice;
                    newprice = skuJson.skus[i].bestPrice;
                    hasdiscount = true;
                    break;
                }
            }
    
            if(hasdiscount) {
                let discount = relDiff(newprice, oldprice).toFixed();
                $(".product-details .product-image").prepend(`<span id="discount-badge" style="position: relative;
                z-index: 99999;
                font-size: 16px;
                top: 18px;
                float: right;
                color: #fff;
                background-color: #8D7573;
                border-radius: 100px;
                padding: 8px;
                padding-top: 10px;
                margin-bottom: -8px;">${discount}%<br/>OFF</span>`)
            }
}, 1000);

$(".product-description-box #description").fadeIn()
$(".desk-info-nav a").click((e) => {
    $(".desk-info-nav a").css({ "color": "#BEBEBE" });
    $(e.target).css({ "color": "#000" });
    if ($(e.target).attr("id") == "first") {
        $(".product-description-box #specification").fadeOut()
        $(".product-description-box #description").fadeIn()
    } else if ($(e.target).attr("id") == "last") {
        $(".product-description-box #description").fadeOut()
        $(".product-description-box #specification").fadeIn()
    }

})


$(".dropdown-container").hide();
$(".dropdown-btn#descricao").toggle(() => {

    $(".dropdown-btn#descricao i").attr('class', 'fa fa-minus');
    $(".dropdown-container#descricao").slideDown()
}, () => {
    $(".dropdown-container#descricao").slideUp()
    $(".dropdown-btn#descricao i").attr('class', 'fa fa-plus');
})


$(".dropdown-btn#especificacao").toggle(() => {
    $(".dropdown-btn#especificacao i").attr('class', 'fa fa-minus');
    $(".dropdown-container#especificacao").slideDown()
}, () => {
    $(".dropdown-container#especificacao").slideUp()
    $(".dropdown-btn#especificacao i").attr('class', 'fa fa-plus');
})



setTimeout(() => {
    
    fetch(`/api/catalog_system/pub/products/search/${skuJson.name}`)
    .then((a) =>  a.json())
    .then(dados => {
        console.log(dados)
        let currentProduct = {}
       
        currentProduct = dados.filter( dado => dado.productId == skuJson.productId);
        currentProduct = currentProduct[0]
        console.log(currentProduct)
        let similares = currentProduct['Produtos Similares'];
        similares = similares[0].split(",")
        similares.unshift(`${skuJson.productId}`)
        console.log(similares)
       
        similares.forEach(async function(index) {
            let myId = index
            myId= parseInt(myId);
            skusonprod = [];
            console.log("entrei")
           await vtexjs.catalog.getProductWithVariations(myId).done(function(product){
                console.log("montei")
               let item = product.skus[0];
               item.link = product.name.replace(/[\s/,]+/g, '-');
               item.cor = product.name.split('-').pop().split('-')[0].replace(/[\s/,]+/g, '');
                let cores =`
                <li style="display:inline-block;margin: 15px 8px">
                    <a href=${"/" + item.link + "/p"} style="color: #000;text-decoration: none;">
                    <img src=${item.image} style="max-width: 65px;display:block;padding: 10px 10px !important;
                    border-radius: 100px;border: 1px solid #DDD6CC!important;"/>
                   <span style="margin-top: 10px;
                   margin-left: 25%;
                   display: block;">${item.cor}</span>
                    </a>
                </li>
            `
            $(".seletor-color ul").append(cores);
            });
           
           })


    })


    if($(".specification-color ul").html() != undefined){
        $(".specification-color").show()
}
}, 200)