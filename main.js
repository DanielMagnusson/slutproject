const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const popup = document.getElementById('popup');

openBtn.addEventListener('click', function() {
  popup.classList.add('show');
});

closeBtn.addEventListener('click', function() {
  popup.classList.remove('show');
});

// Slideshow 1
var slideIndex1 = 1;
showSlides1(slideIndex1);

// Slideshow 2
var slideIndex2 = 1;
showSlides2(slideIndex2);

// Slideshow 3
var slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides(n, slideshowNumber) {
  if (slideshowNumber === 1) {
    showSlides1(slideIndex1 += n);
  } else if (slideshowNumber === 2) {
    showSlides2(slideIndex2 += n);
  } else if (slideshowNumber === 3) {
    showSlides3(slideIndex3 += n);
  }
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  if (n > slides.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex1 - 1].style.display = "block";
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex2 - 1].style.display = "block";
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  if (n > slides.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex3 - 1].style.display = "block";
}

