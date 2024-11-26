
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginFields = document.getElementById('login-fields');
const registerFields = document.getElementById('register-fields');
const formTitle = document.getElementById('form-title');

loginTab.addEventListener('click', () => {
    if (loginFields.style.display === 'none') {
        loginFields.style.display = 'block';
        registerFields.style.display = 'none';
        formTitle.textContent = 'Já é membro? Faça seu login e entre';
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
    }
});

registerTab.addEventListener('click', () => {
    if (registerFields.style.display === 'none') {
        loginFields.style.display = 'none';
        registerFields.style.display = 'block';
        formTitle.textContent = 'Não tem uma conta? Faça seu cadastro';
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
    }
});
