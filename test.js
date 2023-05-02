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
    console.log(slideIndex1);
    console.log(slideIndex2);
    console.log(n);
  if (slideshowNumber === 1) {
    showSlides1(slideIndex1 += n);
  } else if (slideshowNumber === 2) {
    showSlides2(slideIndex2 += n);
  } else if (slideshowNumber === 3) {
    showSlides3(slideIndex3 += n);
  }
}

function showSlides1(n) {
    console.log("Funktion startar?");
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  console.log(slides.length);
  if (n > slides.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  console.log(slideIndex1 - 1);
  console.log(slides);
  console.log(slides.length);
  console.log(slides[slideIndex1 - 1]);
  console.log(JSON.stringify(slides));
  slides[slideIndex1 - 1].style.display = "block";
  //slides.item(slideIndex1-1).style.display = "block";
  console.log("Funktion färdig?");
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  console.log(n);
  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  console.log(slideIndex2);
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
  console.log(slides)
  for (i = 0; i < slides.length; i++) {
    console.log(slides[i])
    slides[i].style.display = "none";
  }
  slides[slideIndex3 - 1].style.display = "block";
}
