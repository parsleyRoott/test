const sideMenu = document.getElementById('sideMenu');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.getElementById('closeBtn');

// Kliknięcie w ikonę hamburgera
hamburger.addEventListener('click', () => {
    sideMenu.classList.toggle('active'); // Dodaj/usuń klasę aktywną
});

// Zamknięcie menu po kliknięciu w link
const menuLinks = document.querySelectorAll('.side-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('active'); // Ukryj menu
    });
});

// Kliknięcie w przycisk `X` zamykający menu
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active'); // Usuń klasę aktywną - zamknij menu
});