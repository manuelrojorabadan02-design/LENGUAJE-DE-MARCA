document.addEventListener('DOMContentLoaded', () => {
    const minBtn = document.getElementById('menu-toggle');
    const container = document.querySelector('.dashboard-container');

    minBtn.addEventListener('click', () => {
        container.classList.toggle('sidebar--oculto');
    });
});
