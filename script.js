const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const body = document.body;

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    body.classList.toggle('menu-open');
});

/* Fecha o menu ao clicar em qualquer link */
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
        body.classList.remove('menu-open');
    });
});
