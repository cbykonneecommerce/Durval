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
