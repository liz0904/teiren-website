var images = document.querySelectorAll('#slideshow img');
var currentImage = 0;

setInterval(function () {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}, 3000);