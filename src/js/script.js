$(document).ready(function () {

    function check () {

        let inp = $(`.mobile-menu__btn > input[type=checkbox]`);

        inp.on('click', function () {
            $(`.mobile-menu`).toggleClass(`open`);
        })

    }
    check ();

    $(`.recording`).slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,

    })


    $(window).on('scroll', function () {
        if($(this).scrollTop() >130){
            $(`.header .logo`).slideUp(300);
        }
        if($(this).scrollTop() <130){
            $(`.header .logo`).slideDown(300);
        }
    })

    function has_child(li) {
        li.each(function (i , elem) {
            if ($(this).children(`ul`).hasClass(`sub-menu`)){
                $(this).append(`<div class="plus"></div>`);
            }
        });
    }

    has_child($(`.nav-list > li`));

    function plus_click(item) {
        item.each(function (i , elem) {
            $(this).on('click',function () {
                $(this).toggleClass(`open`);
                $(this).prev().slideToggle(300);
            });
        });
    }

    plus_click($(`.plus`));


});















