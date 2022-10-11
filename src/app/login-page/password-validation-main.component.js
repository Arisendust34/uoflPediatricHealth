function onChange() {
    const password = document.getElementById('password1');
    const confirm = document.getElementById('password2');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }