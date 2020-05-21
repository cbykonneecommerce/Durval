
$(".notifymetitle.notifyme-title").text("Produto indisponível");
$(".sku-notifyme-form p").text("Avise-me quando estiver disponível");



setTimeout(function () {
    $(".desk-info-nav a#first").css({"color":"#BEBEBE"});
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
}, 1000);


$(".desk-info-nav a").click((e)=>{
    $(".desk-info-nav a").css({"color":"#BEBEBE"});
    $(e.target).css({"color":"#000"});
    if($(e.target).attr("id") == "first") {
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



setTimeout(()=>{
    fetch(`/api/catalog_system/pub/products/crossselling/similars/${skuJson.productId}`)
    .then((data)=>{
        return data.json();
    })
    .then((dados)=>{
        let colorVariation = dados.map((item)=>{
            return `
                <li style="display:inline-block;margin: 15px 8px">
                    <a href=${item.link} style="color: #000;text-decoration: none;">
                    <img src=${item.items[0].images[0].imageUrl} style="max-width: 58px;display:block;padding: 10px 10px !important;
                    border-radius: 100px;border: 1px solid #DDD6CC!important;"/>
                   <span style="margin-top: 5px;">${item.Cor[0]}</span>
                    </a>
                </li>
            `
        });
        console.log(colorVariation)
        $(".seletor-color ul").append(colorVariation);
    })
},200)