$('.main__item-cards').dblclick(function () {
    if($(this).find('.main__item-twocards').hasClass('flip')) {
        $(this).find('.main__item-twocards').removeClass('flip')
    } else {
        $(this).find('.main__item-twocards').addClass('flip')
    }
})

$(function() {
    $('.main__item').draggable();
});