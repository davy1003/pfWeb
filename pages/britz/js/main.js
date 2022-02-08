$('.gnb li').on('mouseover',function(){
    $(this).children('.submenu').slideDown();
    $(this).siblings().children('.submenu').slideUp();
});

$('.slide').slick({
    'arrows' : false,
    'dots' : true
});