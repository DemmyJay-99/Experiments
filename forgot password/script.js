const form = document.getElementById('forgot-password-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  // Send AJAX request to PHP script
  fetch('forgot-password.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `email=${email}`,
  })
  .then((response) => response.text())
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
});
