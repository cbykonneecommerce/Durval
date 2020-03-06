$(".dropdown-container").hide();
$(".dropdown-btnf#ajuda").toggle(() => {

    $(".dropdown-btnf#ajuda i").attr('class', 'fa fa-minus');
    $(".dropdown-container#ajuda").slideDown()
}, () => {
    $(".dropdown-container#ajuda").slideUp()
    $(".dropdown-btnf#ajuda i").attr('class', 'fa fa-plus');
})


$(".dropdown-btnf#institucional").toggle(() => {
    $(".dropdown-btnf#institucional i").attr('class', 'fa fa-minus');
    $(".dropdown-container#institucional").slideDown()
}, () => {
    $(".dropdown-container#institucional").slideUp()
    $(".dropdown-btnf#institucional i").attr('class', 'fa fa-plus');
})