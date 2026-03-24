document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('vehiculos-grid');
    const buscador = document.getElementById('buscador');

    fetch('datos.xml')
        .then(response => response.text())
        .then(str => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(str, "application/xml");
            const vehiculos = xmlDoc.getElementsByTagName('vehiculo');

            Array.from(vehiculos).forEach(veh => {
                const marca = veh.getElementsByTagName('marca')[0].textContent;
                const modelo = veh.getElementsByTagName('modelo')[0].textContent;
                const anio = veh.getElementsByTagName('anio')[0].textContent;
                const precio = veh.getElementsByTagName('precio')[0].textContent;
                const tipo = veh.getElementsByTagName('tipo')[0].textContent;
                const desc = veh.getElementsByTagName('descripcion')[0].textContent;

                const card = document.createElement('div');
                card.classList.add('vehiculo-card');

                // Agregamos data attributes para facilitar la búsqueda
                card.dataset.busqueda = `${marca} ${modelo} ${tipo}`.toLowerCase();

                card.innerHTML = `
                    <div class="marca-modelo">${marca} ${modelo}</div>
                    <div class="badges">
                        <span>Año: ${anio}</span>
                        <span>${tipo}</span>
                    </div>
                    <div class="precio">$${parseFloat(precio).toLocaleString()}</div>
                    <p class="desc">${desc}</p>
                `;

                grid.appendChild(card);
            });

            // Lógica del filtro en tiempo real
            buscador.addEventListener('input', (e) => {
                const texto = e.target.value.toLowerCase();
                const cards = document.querySelectorAll('.vehiculo-card');

                cards.forEach(card => {
                    const contenido = card.dataset.busqueda;
                    if (contenido.includes(texto)) {
                        card.style.display = 'block'; // O inline-block según grid no se afecta mucho
                    } else {
                        card.style.display = 'none';
                    }
                });
            });

        })
        .catch(err => console.error("Error cargando XML:", err));
});
