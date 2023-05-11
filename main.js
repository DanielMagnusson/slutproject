// Sparar användarnamn och lösenord som variabler
let savedUsername;
let savedPassword;

// Öppnar popup-fönstret
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

// Stänger popup-fönstret
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Validerar formuläret
function validateForm() {
  let email = document.getElementById("email").value;
  let psw = document.getElementById("psw").value;

  if (email === "" || psw === "") {
    alert("Du måste fylla i både e-post och lösenord!");
    return false;
  }

  return true;
}

// Registrerar en användare
function signup() {
  let email = document.getElementById("email").value;
  let psw = document.getElementById("psw").value;

  if (email === "" || psw === "") {
    alert("Du måste fylla i både e-post och lösenord!");
  } else {
    alert("Du har registrerat dig!");
    savedUsername = email;
    savedPassword = psw;
  }

  
}

// Loggar in användaren
function login() {
  let email = document.getElementById("email").value;
  let psw = document.getElementById("psw").value;

  if (email === savedUsername && psw === savedPassword) {
    alert("Du är nu inloggad!");
    closeForm();
  } else {
    alert("Felaktigt e-post eller lösenord. Vänligen försök igen.");
  }
}

// Lyssnare för signup-knappen
document.getElementById("signup-btn").addEventListener("click", signup);

// Lyssnare för login-knappen
document.getElementById("login-btn").addEventListener("click", login);


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
  slides[slideIndex1 - 1].style.display = "flex";
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
  slides[slideIndex2 - 1].style.display = "flex";
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
  slides[slideIndex3 - 1].style.display = "flex";
}

