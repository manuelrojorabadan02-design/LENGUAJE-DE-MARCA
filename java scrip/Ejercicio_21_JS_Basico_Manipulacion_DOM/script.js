// Ejercicio 21: Manipulación del DOM

// 1. Selecciona la caja (id="miCaja")
const caja = document.getElementById('miCaja');

// 2. Selecciona los botones
const btnColor = document.getElementById('btnColor');
const btnTexto = document.getElementById('btnTexto');
const btnAgregar = document.getElementById('btnAgregar');
const lista = document.getElementById('lista');

// 3. Agrega funcionalidad al botón de color (click)
btnColor.addEventListener('click', () => {
    // Cambia el color de fondo de la caja usando .style
    caja.style.backgroundColor = 'purple';
});

// 4. Agrega funcionalidad al botón de texto (click)
btnTexto.addEventListener('click', () => {
    // Cambia el texto interno de la caja usando .innerText
    caja.innerText = 'Hola JS';
});

// 5. Agrega funcionalidad al botón de agregar (click) - BONUS
btnAgregar.addEventListener('click', () => {
    // Crea un nuevo elemento li
    const nuevoElemento = document.createElement('li');
    
    // Le asignamos un texto
    nuevoElemento.innerText = `Elemento ${lista.children.length + 1}`;
    
    // Agrégalo a la lista ul (appendChild)
    lista.appendChild(nuevoElemento);
});