const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const popup = document.getElementById('popup');

openBtn.addEventListener('click', function() {
  popup.classList.add('show');
});

closeBtn.addEventListener('click', function() {
  popup.classList.remove('show');
});
