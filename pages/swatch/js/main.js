/*
1. 마우스 휠 내릴 때 다음 섹션으로 이동
2. 마우스 휠을 올릴때 이전 섹션으로 이동
   이 경우 mousewheel.js를 사용해야 한다

공식:

$('#wrap section').on('mousewheel',function(e,d){

    if(d>0){
        //마우스휠을 위로 올릴때 일어나는 일
    }else if(d<0){
        //마우스휠을 아래로 내릴 때 일어날 일
    }

});

*/ 

$('#wrap section').on('mousewheel',function(e,d){

    if(d>0){
        let prv = $(this).prev().offset().top;
        $('html, body').stop().animate({'scrollTop' : prv},1000, "easeOutBounce")
    }else if(d<0){
        let nxt = $(this).next().offset().top;
        $('html, body').stop().animate({'scrollTop' : nxt},1000, "easeOutBounce")
    }

});

/*
스크롤의 위치가 0부터 첫번째 섹션 안에 있는 경우, 첫번째 li가 on,
두번째 섹션부터 세번째 섹션 사이에 있을 경우, 두번째 li가 on,
세번째 섹션부터 네번째 섹션 사이에 있을 경우, 세번째 li가 on,
네번째 섹션 이상부터, 네번째 li가 on,
 */ 

$(window).on('scroll',function(){
    let scr = $(window).scrollTop();

    let sc2 = $('.summer').offset().top;
    let sc3 = $('.autumn').offset().top;
    let sc4 = $('.winter').offset().top;

    if(scr >= 0  && scr < sc2){
        $('nav li').eq(0).addClass('on').siblings().removeClass('on');
    }

    if(scr >= sc2  && scr < sc3){
        $('nav li').eq(1).addClass('on').siblings().removeClass('on');
    }

    if(scr >= sc3  && scr < sc4){
        $('nav li').eq(2).addClass('on').siblings().removeClass('on');
    }

    if(scr >= sc4){
        $('nav li').eq(3).addClass('on').siblings().removeClass('on');
    }
});

$('section').on('mousemove',function(e){
    let x = e.pageX;
    let y = e.pageY;
    console.log(x,y);

let obj = [
    {
    'name' : '.p11',
    'right' : 20,
    'bottom' : 20
},
{
    'name' : '.p12',
    'bottom' : -40,
    'right' : 130
},
{
    'name' : '.p13',
    'bottom' : 140,
    'right' : 60
},
{
    'name' : '.p21',
    'bottom' : -480,
    'right' : -180
},
{
    'name' : '.p22',
    'bottom' : -40,
    'right' : 130
},
{
    'name' : '.p31',
    'bottom' : 30,
    'right' : 180
},
{
    'name' : '.p32',
    'bottom' : -270,
    'right' : 110
},
{
    'name' : '.p33',
    'bottom' : -130,
    'right' : -70
},
{
    'name' : '.p41',
    'bottom' : -120,
    'right' : 20
},
{
    'name' : '.p42',
    'bottom' : -180,
    'right' : 0
}
];

for(let i=0; i<obj.length; i++){
    $(obj[i].name).css({
        'bottom' : obj[i].bottom + (y/8),
        'right' : obj[i].right + (x/12),
    })
}

// function objMove(a,b,c){
//     $(a).css({'bottom':b + (y/8), 'right':c + (x/12)})
// }

// objMove('.p11',20,20);
// objMove('.p12',-40,130);
// objMove('.p13',140,60);
// objMove('.p21',-480,-180);
// objMove('.p22',-40,130);
// objMove('.p31',30,180);
// objMove('.p32',-270,110);
// objMove('.p33',-130,-70);
// objMove('.p41',-120,20);
// objMove('.p42',-180,0);

    // $('.p11').css({'bottom' : 20 + (y/8), 'right' : 20 + (x/12)})
    // $('.p12').css({'bottom' : -40 + (y/8), 'right' : 130 + (x/12)})
    // $('.p13').css({'bottom' : 140 + (y/8), 'right' : 60 + (x/12)})
    // $('.p21').css({'bottom' : -480 + (y/8), 'right' : -180 + (x/12)})
    // $('.p22').css({'bottom' : -40 + (y/8), 'right' : 130 + (x/12)})
    // $('.p31').css({'bottom' : 30 + (y/8), 'right' : 180 + (x/12)})
    // $('.p32').css({'bottom' : 270 + (y/8), 'right' : 110 + (x/12)})
    // $('.p33').css({'bottom' : -130 + (y/8), 'right' : -70 + (x/12)})
    // $('.p41').css({'bottom' : -120 + (y/8), 'right' : 20 + (x/12)})
    // $('.p42').css({'bottom' : -180 + (y/8), 'right' : 0 + (x/12)})

});

// nav li 클릭했을때 해당섹션으로 이동

$('nav li').on('click',function(e){
    e.preventDefault();
    let i = $(this).index()
    let section =$('#wrap').children().eq(i).offset().top;
    $('html,body').animate({'scrollTop' : section});
});





