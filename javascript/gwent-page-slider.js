var slides = document.getElementsByClassName('slide');
var currentSlide = 0;
console.log('Slides: ' + slides.length);
var leftButton = document.getElementById('left');
var rightButton = document.getElementById('right');

function slideLeft(){
    var tmp = currentSlide;
    if (currentSlide == 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide -= 1;
    }
    $(slides[tmp]).removeClass('current');
    $(slides[currentSlide]).addClass('current');
}

function slideRight(){
    var tmp = currentSlide;
    if (currentSlide == slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide += 1;
    }
    $(slides[tmp]).removeClass('current');
    $(slides[currentSlide]).addClass('current');
}

leftButton.addEventListener('click', function(){
    console.log('left');
    slideLeft();
})

rightButton.addEventListener('click', function(){
    console.log('right');
    slideRight();
})
