console.log('Сайт загружен');

const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        console.log('Переход по ссылке:', link.href);
    });
});

const header = document.querySelector('header');

header.classList.add('bg-blue-300');

const now = new Date();
const formatted = now.toLocaleDateString('ru-RU');

const footerP = document.querySelectorAll('.footer-p');
footerP.forEach(p => {
    p.textContent = `© 2026. Все права защищены. ${formatted}`;
});