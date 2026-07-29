const button = document.getElementById('theme-toggle');

/* button.addEventListener('click', function() {
  alert('Vous avez cliqué !');
}); */
button.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  
  if (document.body.classList.contains('dark-theme')) {
    button.textContent = '☀️ Mode Clair';
  } else {
    button.textContent = '🌓 Mode Sombre';
  }
});
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nom = document.getElementById('nom').value;
  alert(`Merci ${nom} ! Message envoyé.`);
  
  form.reset();
});