function relDiff(a, b) {
    if (isNaN(+a) || isNaN(+b)){
       return log('<b class="warn">input error</b> (a=',a,' b=',b,')');
    }
    return a-b === 0 ? 0 : 100 * Math.abs( ( a - b ) / b  ) || 'input error';
   }


   function generateDiscountFlag(){

       $(".box-item").each(function(){
        let me = $(this);
        let myId = $(".product-name a span",this).text();
        vtexjs.catalog.getProductWithVariations(myId).done(function(product){
            console.log("montei")



        //GERADOR DE FLAG DESCONTO
        let oldprice = 0;
let newprice = 0;
let hasdiscount = false;
for(let i = 0; i < product.skus.length; i++){
    if(product.skus[i].available && product.skus[i].listPrice > 0) {
        oldprice = product.skus[i].listPrice;
        newprice = product.skus[i].bestPrice;
        hasdiscount = true;
        break;
    }
}

if(hasdiscount) {
    let discount = relDiff(newprice, oldprice).toFixed();
    $(me).prepend(`<span class="discount-flag" style="position: relative;
    z-index: 8;
    font-size: 10px;
    top: 18px;
    float: right;
    color: #fff;
    background-color: #8D7573;
    border-radius: 100px;
    padding: 8px;
    padding-top: 10px;
    margin-bottom: -8px;">${discount}%<br/>OFF</span>`)
} else {
    $(me).prepend(`<span class="discount-flag" style="    position: relative;
    z-index: 8;
    float: right;
    border-radius: 100px;
    padding: 20px;
    margin-bottom: -8px;"></span>`)
}

        });
       })

   }
   

   function generateSimilar() {
    $(".box-item").each( async function(index) {

        let myId = $(".product-name a", this).text();
        let me = $(this);
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
            
            
            if(similares){
                similares = similares[0].split(",");
                console.log(similares)
           
                similares.forEach((index)=> {
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
                    $(".sku-list.list-inline",me).append(cores);
    
           
    
                    });
                   
                   })
            }
            
     
     
        })
       })

   }





  



$( document ).ready(function() {
   

    

    fetch("/api/catalog_system/pub/category/tree/3/")
    .then(res =>  res.json())
    .then(response => {
        console.log(response);

      

        response.forEach(element => {
            let divtext =  element.name;
            element.name = element.name.replace(/[\s/,&]+/g, '-');
            $(".deptos ul").append( `<li class="depto-${element.name}"><a href="${element.url}">${divtext}</a></li>`);
            console.log("adding main")
            if(element.hasChildren) {
            $("#top-menu .container #deptos-list").append(`<div class="deptonav depto-${element.name}" id="${element.name}" style="display: none">

            <div class="row">
                 <div class="col-sm-3">
                     <ul class="">
                         

                     </ul>
                 </div>
                 <div class="col-sm-3">
                     <ul>
                     

                     </ul>
                 </div>
                
                 <div class="col-sm-6">
                 <a><img src="/arquivos/menu_${element.name}.jpg" style="margin-left: -30px;"/></a>
                 </div>
             </div>
            </div>`);

            $(".sidenav").append(`<div style="display:block;border-top: solid 1px #E4E5E9;"><span class="depto-${element.name}"><a href="${element.url}">${divtext}</a></span><button class="dropdown-btn" id="${element.name}"><i class="fa fa-angle-down"></i></button></div>
            <div class="dropdown-container" id="${element.name}"></div>`);


                //Desktop
            $(`.depto-${element.name}`).mouseenter(function() {
                $(".deptonav").hide();
               $(`#deptos-list .depto-${element.name}#${element.name}`).show()
           });
           
           
           $(`#deptos-list .depto-${element.name}#${element.name}`).mouseleave(function() {
               $(`#deptos-list .depto-${element.name}#${element.name}`).hide()
           });


           //Mobile
           $(`.dropdown-btn#${element.name}`).toggle(() => {
            $(".dropdown-container").slideUp();
            $(`.dropdown-btn i`).attr('class', 'fa fa-angle-down');
            $(`.dropdown-btn#${element.name} i`).attr('class', 'fa fa-angle-up');
            $(`.dropdown-container#${element.name}`).slideDown()
        }, () => {
            $(`.dropdown-container#${element.name}`).slideUp()
            $(`.dropdown-btn#${element.name} i`).attr('class', 'fa fa-angle-down');
        })


            element.children.forEach((subs, index) => {
                console.log("adding children")
                if( index < 4) {
                    $(`.depto-${element.name} .row .col-sm-3:nth-of-type(1) ul`).append( `<li><a href="${subs.url}">${subs.name}</a></li>`);
                } else if (index < 8) {
                    $(`.depto-${element.name} .row .col-sm-3:nth-of-type(2) ul`).append( `<li><a href="${subs.url}">${subs.name}</a></li>`);
                } else {
                    $(`.depto-${element.name} .row .col-sm-3:nth-of-type(3) ul`).append( `<li><a href="${subs.url}">${subs.name}</a></li>`);
                }

                $(`.dropdown-container#${element.name}`).append(`<a href="${subs.url}">${subs.name}</a>`)
                
            })
            
            }
        });




      
        
        
       
    })

    $(`header`).mouseleave(function() {
        $(`.deptonav`).hide()
    });


    let toggle = true;
    const mq = window.matchMedia("(max-width: 600px)");
    if (mq.matches) {
       /* $(window).scroll(function(){
            if($(document).scrollTop() > 200){
              $('#headerrow fieldset').hide();
            }
          });
        
          $(window).scroll(function(){
            if($(document).scrollTop() < 500){
              $('#headerrow fieldset').show();
            }
          });*/

        /*  var position = $(window).scrollTop();

          $(window).scroll(function () {
              var scroll = $(window).scrollTop();
      
              if (scroll >= position) {
                setTimeout(()=>{ 
                    $('#headerrow fieldset').hide();
                  },1000)
      
                  
      
              } else {
                  setTimeout(()=>{
                    $('#headerrow fieldset').show();
                  },1000)
                  
                 
              }
      
              position = scroll;
          });*/

          $("#lupa-mobile").click(function(e){
              e.preventDefault();
            if(toggle) {
                $(".header .search .busca").show();
                $("#lupa-mobile img").attr("src","/arquivos/menu-close.png");
                toggle = false
            } else {
                toggle = true;
                $(".header .search .busca").hide();
                $("#lupa-mobile img").attr("src","/arquivos/lupa.png");

            }
      
          })
    }else {
        $(`.header .search .btn-buscar`).mouseenter(function() {
            $(".header .search .btn-buscar").attr("style","border-bottom: 1px solid #949494 !important")
            $(".header .search .fulltext-search-box").attr("style","border-bottom: 1px solid #949494 !important")
            $(".header .search .fulltext-search-box").show()
            $(".header .search .fulltext-search-box").animate({
                width: "83%"
              }, {
                queue: false,
                duration: 800
              })
       });

    

       $(`.header .search .busca`).mouseleave(function() {

        
            $(".header .search .fulltext-search-box").animate({
                width: "1%"
              }, {
                queue: false,
                duration: 800
              })
              setTimeout(()=>{
                $(".header .search .fulltext-search-box").attr("style","border-bottom:transparent !important")
              }, 800)
        
       
         
        $(".header .search .btn-buscar").attr("style","border-bottom:transparent !important")
       
       
    });
       
    }

    function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {

            setTimeout(function(){
                $(".link-logo img").css({"max-width": "110px"}); 
                $(".search").removeClass("col-lg-offset-6"); 
                $("#minimized").fadeIn( 100 );
                $("#original").fadeOut( 100 );
                const height = window.matchMedia("(max-height: 786px)");
                if (height.matches) {
                  $("#top-menu").css({"top": "12%"})
                } else {
                  $("#top-menu").css({"top": "8%"})
                }
            },1000)
        

          
        
        } else {

            setTimeout(function(){
                $("#minimized").hide();
                $(".search").addClass("col-lg-offset-6"); 
                
                $("#original").fadeIn( 100 );
                $(".link-logo img").css({"max-width": "175px"});
                const height = window.matchMedia("(max-height: 786px)");
                if (height.matches) {
                  $("#top-menu").css({"top": "16%"})
                } else {
                  $("#top-menu").css({"top": "14%"})
                }
            },1000)
            
         
          
        }
      }
    
    const largura = window.matchMedia("(min-width: 1200px)");
        if (largura.matches) {
            window.onscroll = function() {scrollFunction()};
        }
        



    
    generateDiscountFlag();
    //generateSimilar();


    setTimeout(()=>{
        if(dataLayer[2].visitorLoginState || dataLayer[3].visitorLoginState) {
            $("#drop-login .btn-login").text("MINHA CONTA")
            let name = ""
            if(dataLayer[2].visitorContactInfo[1]) {
                name= dataLayer[2].visitorContactInfo[1]
            } else if(dataLayer[3].visitorContactInfo[1]){
                name =  dataLayer[3].visitorContactInfo[1]

            } 
          
            $("#drop-login").prepend(`<li style="padding: 0 12px !important;color: #8D7573;font-weight: 600;">Olá ${name}</li>`)
        }
      


//$(".sidenav").append(`<span><a href="/busca?fq=H:137">OFERTAS</a></span>`)
    },1000)
});


