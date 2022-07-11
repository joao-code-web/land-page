const delay = 3000;
var curIndex = 0;
var amt;

function scrollAnimate() {
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({
            'scrollTop': offSetTop
        },2000);
        return false;
    });
}

scrollAnimate();

function slidePeople() {
    amt = $('.sobre-autor').length;
    var sizeContainer = 100 * amt;
    var sizeBoxSingle = 100 / amt;
    $('.sobre-autor').css('width',sizeBoxSingle + '%');
    $('.scroll-wraper').css('width',sizeContainer + '%');

    for(var i = 0; i <= amt; i++) {
        if(i == 0) {
            $('.slider-bullets').append('<span style="background-color:rgb(170,170,170);></span>');
        }else {
            $('.slider-bullets').append('<span></span>')
        }
    }
}

function autoPlay() {
    setInterval(function(){
        curIndex++;
        if(curIndex == amt) {
            curIndex = 0;
        }
        goToSlider(curIndex);
        console.log('olal')
    },delay);
}

autoPlay();

function goToSlider(curIndex) {
    var offsetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
    $('.slider-bullets span').css('background-color','rgb(200,200,200)');
    $('.slider-bullets span').eq(curIndex).css('background-color','rgb(170,170,170)');
    $('.scroll-equipe').animate({
        'scrollLeft':offsetX
    });
}

$(window).resize(function() {
    $('.scroll-equipe').stop().animate({
        'scrollLeft': 0
    });
});

slidePeople();