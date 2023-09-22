document.querySelector('form').addEventListener('submit', function (e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('errorMessage');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

  
    if (password !== confirmPassword) {
      e.preventDefault();
      errorMessage.style.display = 'flex';
      passwordInput.classList.add('error')
      confirmPasswordInput.classList.add('error')

    } else {
        errorMessage.style.display = 'none';
      }
  });