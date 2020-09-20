const containerLogin = document.querySelector('.container-login'),
    signUpBtn= document.querySelector('#sign-up-btn'),
    signInBtn= document.querySelector('#sign-in-btn');

    
signUpBtn.addEventListener('click', () => {
    containerLogin.classList.add('sign-up-mode');
});

signInBtn.addEventListener('click', () => {
    containerLogin.classList.remove('sign-up-mode');
})