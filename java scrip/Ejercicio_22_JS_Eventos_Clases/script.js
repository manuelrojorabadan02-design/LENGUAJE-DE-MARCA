// Ejercicio 22: Eventos y Clases

// 1. Selecciona el botón del menú, el botón de cerrar y el menú lateral
const toggleMenuBtn = document.getElementById('toggleMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const menuLateral = document.getElementById('menuLateral');

// 2. Define una función 'toggleMenu' que:
//    - Use classList.toggle('hidden') en el menú
function toggleMenu() {
    menuLateral.classList.toggle('hidden'); // Alterna la clase que controla la posición
}

// 3. Agrega los Event Listeners a los botones para llamar a esa función
toggleMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);