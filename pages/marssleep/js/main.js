
$('.hmenu').children().on('mouseover',function(){

    $(this).find('.submenu').stop().slideDown();

}).on('mouseout',function(){
    $(this).find('.submenu').stop().slideUp();
})


$('.slide').slick({
    'dots' : true,
    'arrows' : false
});






















