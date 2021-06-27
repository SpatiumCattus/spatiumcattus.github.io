var slideWidth = 850;
var slideTimer;


$('.slidewrapper').width($('.slidewrapper').children().length * slideWidth);

sliderTimer = setInterval(nextSlide, 3500);


function nextSlide() {
    var currentSlide = parseInt($('.slidewrapper').data('current'));
    currentSlide++;
    if (currentSlide >= $('.slidewrapper').children().length) {
        currentSlide = 0;
    }
    $('.slidewrapper').animate({ left: -currentSlide * slideWidth }, 850).data('current', currentSlide);
}


$('.viewport').hover(function () {
    clearInterval(sliderTimer);
}, function () {
    sliderTimer = setInterval(nextSlide, 3500);
});