var carouselwidth = $('.carousel-inner') [0].scrollWidth;
var cardWidth = $('.carousel-item').width();

var scrollPosition = 0;


$('.next1').on('click', function(){
    if(scrollPosition < (carouselwidth - (cardWidth * 4))) {
        console.log('next');
        scrollPosition = scrollPosition + cardWidth;
        $('.inner1').animate({scrollLeft: scrollPosition}, 
        600);
}
});
$('.prev1').on('click', function(){
    if(scrollPosition > 0){
        console.log('prev');
        scrollPosition = scrollPosition - cardWidth;
        $('.inner1').animate({scrollLeft: scrollPosition}, 
        600);
}
});

$('.next2').on('click', function(){
    if(scrollPosition < (carouselwidth - (cardWidth * 4))) {
        console.log('next');
        scrollPosition = scrollPosition + cardWidth;
        $('.inner2').animate({scrollLeft: scrollPosition}, 
        600);
}
});
$('.prev2').on('click', function(){
    if(scrollPosition > 0){
        console.log('prev');
        scrollPosition = scrollPosition - cardWidth;
        $('.inner2').animate({scrollLeft: scrollPosition}, 
        600);
}
});

