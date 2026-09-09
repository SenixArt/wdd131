// Mostrar el año actual en el footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Mostrar la fecha de última modificación
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

// Lógica del botón Hamburguesa
const menuButton = document.getElementById('menu-button');
const menuLinks = document.querySelector('.menu-links');

menuButton.addEventListener('click', () => {
    // Alternar la clase 'open' en el menú
    menuLinks.classList.toggle('open');
    
    // Cambiar el icono entre Hamburguesa y 'X'
    if (menuLinks.classList.contains('open')) {
        menuButton.textContent = 'X';
    } else {
        menuButton.textContent = '☰';
    }
});
