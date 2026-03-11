document.addEventListener('click', function (event) {
  if (event.target.closest('.nav-user, .already-account')) {
    const forElement = document.querySelector('.form');
    forElement.classList.add('login-active');
    forElement.classList.remove('sign-up-active');
  }


  

  if (event.target.closest('.sign-up-btn')) {
    const forElement = document.querySelector('.form');
    forElement.classList.remove('login-active');
    forElement.classList.add('sign-up-active');
  }

});