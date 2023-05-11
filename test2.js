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
