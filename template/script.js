$(function() {
    var height=$("header").height();
    $("main").css("margin-top", height);
});

const setScrollbarWidth = () => {
const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
document.documentElement.style.setProperty('--scrollbar', `${scrollbarWidth}px`);
};
// 表示
window.addEventListener('load', setScrollbarWidth);
// リサイズ
window.addEventListener('resize', setScrollbarWidth);



$(function() {
    var offset = $('.header-wrap').offset();
    $(window).scroll(function () {
        if ($(window).scrollTop() > offset.top) {
            $('.header-wrap').addClass('header-fixed');
            $('.header-bottom').addClass('header-bottom2');
        } else {
            $('.header-wrap').removeClass('header-fixed');
            $('.header-bottom').removeClass('header-bottom2');
        }
    });
});


jQuery(function($) {
    $('.copy_clipboard').click(function() {
        var clipboard = $('<textarea></textarea>');
        clipboard.val($(this).prev().val());
        $(this).append(clipboard);
        clipboard.select();
        document.execCommand('copy');
        clipboard.remove();
    });
});
