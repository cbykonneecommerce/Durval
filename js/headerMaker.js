$( document ).ready(function() {


    fetch("/api/catalog_system/pub/category/tree/3/")
    .then(res =>  res.json())
    .then(response => {
        console.log(response);

      

        response.forEach(element => {
            $(".deptos ul").append( `<li class="depto-${element.name}"><a href="${element.url}">${element.name}</a></li>`);
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
                 <div class="col-sm-3">
                    <ul></ul>
                 </div>
                 <div class="col-sm-3">
                 <a><img src="/arquivos/menu_${element.name}.jpg" /></a>
                 </div>
             </div>
            </div>`);

            $(".sidenav").append(`<button class="dropdown-btn" id="${element.name}">${element.name}<i class="fa fa-angle-down"></i></button>
            <div class="dropdown-container" id="${element.name}"></div>`)


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




    //change color icon on hover

    $("#usuario-login").hover(()=>{
    
        $("#usuario-login a img").attr("src","/arquivos/BONECO2preto.png");
    }, 
    ()=>{
        $("#usuario-login a img").attr("src","/arquivos/BONECO.png");
    })



    $("#usuario-giftlist").hover(()=>{
    
        $("#usuario-giftlist a img").attr("src","/arquivos/CORACAO2preto.png");
    }, 
    ()=>{
        $("#usuario-giftlist a img").attr("src","/arquivos/CORACAO2.png");
    })





    $("#usuario-cart").hover(()=>{
    
        $("#usuario-cart a.btn-mini-cart img").attr("src","/arquivos/BAG2preto.png");
    }, 
    ()=>{
        $("#usuario-cart a.btn-mini-cart img").attr("src","/arquivos/BAG2.png");
    })


});