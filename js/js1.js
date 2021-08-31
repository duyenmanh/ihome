
$(document).ready(function () {
    $('#toggle').click(function () {
        $('.nav1').slideToggle();
        console.log('123');
    });
    $('#main_menu .icon-menu').click(function () {
        $(this).parent('li').children('.sub_menu').slideToggle();
        $(this).toggleClass(' fa-angle-down fa-angle-up');
    });
    $('.dropdown-submenu a.test').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});
