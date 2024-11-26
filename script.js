// Selecione os elementos
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.controles button');
const indicators = document.querySelectorAll('.indicador');

// Inicialize o índice atual
let currentIndex = 0;

// Função para mudar o slide
function changeSlide(index) {
    // Remova a classe 'active' de todos os slides e indicadores
    slides.forEach((slide) => slide.classList.remove('active'));
    indicators.forEach((indicator) => indicator.classList.remove('active'));

    // Adicione a classe 'active' ao slide e indicador atual
    slides[index].classList.add('active');
    indicators[index].classList.add('active');

    // Atualize o índice atual
    currentIndex = index;
}

controls.forEach((control, index) => {
    control.addEventListener('click', () => {
        if (index === 0) {
            // Vá para o slide anterior
            changeSlide((currentIndex - 1 + slides.length) % slides.length);
        } else {
            // Vá para o próximo slide
            changeSlide((currentIndex + 1) % slides.length);
        }
    });
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        changeSlide(index);
    });
});

// Função para mudar o slide automaticamente
function autoChangeSlide() {
    changeSlide((currentIndex + 1) % slides.length);
    setTimeout(autoChangeSlide, 6000); // 6000ms = 6 segundos
}

// Inicialize o slider
changeSlide(0);
autoChangeSlide();


const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginFields = document.getElementById('login-fields');
const registerFields = document.getElementById('register-fields');
const formTitle = document.getElementById('form-title');

loginTab.addEventListener('click', () => {
    if (loginFields.style.display === 'none') {
        loginFields.style.display = 'block';
        registerFields.style.display = 'none';
        formTitle.textContent = 'Login';
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
    }
});

registerTab.addEventListener('click', () => {
    if (registerFields.style.display === 'none') {
        loginFields.style.display = 'none';
        registerFields.style.display = 'block';
        formTitle.textContent = 'Cadastro'; // Alterei o texto para "Cadastro"
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
    }
});
