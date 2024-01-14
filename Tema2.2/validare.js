function validateForm() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    
    
  
    // Verificare nume și prenume
    if (firstName === '') {
      firstNameError.textContent = 'Introduceți numele.';
      isValid = false;
    } else {
      firstNameError.textContent = '';
    }
  
    if (lastName === '') {
      lastNameError.textContent = 'Introduceți prenumele.';
      isValid = false;
    } else {
      lastNameError.textContent = '';
    }
  
    // Verificare email
    if (email === '') {
      emailError.textContent = 'Introduceți adresa de email.';
      isValid = false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = 'Introduceți o adresă de email validă.';
      isValid = false;
    } else {
      emailError.textContent = '';
    }
  
    // Verificare parolă
    if (password === '') {
      passwordError.textContent = 'Introduceți parola.';
      isValid = false;
    } else if (!isValidPassword(password)) {
      passwordError.textContent = 'Parola trebuie să aibă cel puțin 8 caractere și să conțină cel puțin o literă majusculă, o literă minusculă și un număr.';
      isValid = false;
    } else {
      passwordError.textContent = '';
    }
  
    // Verificare confirmare parolă
    if (confirmPassword === '') {
      confirmPasswordError.textContent = 'Confirmați parola.';
      isValid = false;
    } else if (confirmPassword !== password) {
      confirmPasswordError.textContent = 'Parola nu corespunde.';
      isValid = false;
    } else {
      confirmPasswordError.textContent = '';
    }
  
    return isValid;
  }
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function isValidPassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  }
  function appendErrorMessage(message) {
    const errorMessages = document.getElementById('errorMessages');
    const errorMessageElement = document.createElement('div');
    errorMessageElement.textContent = message;
    errorMessages.appendChild(errorMessageElement);
  }  