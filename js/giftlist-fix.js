let myLink = $(".giftlistinfo-actions .list-action .action-manage a").attr('href');
myLink =  myLink.toLowerCase();

$(".giftlistinfo-actions .list-action .action-manage a").attr('href', myLink);


let myLinkEditor = $(".giftlistinfo-actions .list-action .action-edit a").attr('href');
myLinkEditor = myLinkEditor.toLowerCase();

$(".giftlistinfo-actions .list-action .action-edit a").attr('href', myLinkEditor);



$("#giftlistname").keyup(function () {
   let urlName = $("#giftlistname").val();
   $("#giftlisturl").val(urlName.replace(/ /g, '-'));
​
​
});



$($(".giftlistproductsv2 thead tr th")[3]).remove();
$($(".giftlistproductsv2 tbody tr td")[3]).remove();
$("#giftlistorder").remove();

const mq = window.matchMedia("(min-width: 800px)");
    if (mq.matches) {

      $($(".giftlistproductsv2 tbody tr td")[1]).css({"width":"238px"});
    }