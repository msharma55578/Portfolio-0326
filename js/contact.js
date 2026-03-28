const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const submitBtn = contactForm.querySelector('.contact-submit');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    /* Name */
    if (!nameInput.value.trim()) {
      nameError.textContent = 'Please enter your name';
      valid = false;
    } else {
      nameError.textContent = '';
    }

    /* Email */
    if (!emailInput.value.trim()) {
      emailError.textContent = 'Please enter your email';
      valid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email';
      valid = false;
    } else {
      emailError.textContent = '';
    }

    /* Message */
    if (!messageInput.value.trim()) {
      messageError.textContent = 'Please enter a message';
      valid = false;
    } else {
      messageError.textContent = '';
    }

    if (valid) {
      submitBtn.textContent = 'Message Sent \u2713';
      submitBtn.disabled = true;
      setTimeout(() => {
        submitBtn.textContent = 'Send Message \u2708';
        submitBtn.disabled = false;
        contactForm.reset();
      }, 2500);
    }
  });
}
