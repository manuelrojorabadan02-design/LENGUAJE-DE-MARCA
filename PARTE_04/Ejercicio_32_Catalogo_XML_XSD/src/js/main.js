document.addEventListener('DOMContentLoaded', () => {
    fetch('productos.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");
            const productos = xmlDoc.getElementsByTagName("producto");
            const contenedor = document.getElementById("contenedor-productos");

            Array.from(productos).forEach(producto => {
                const nombre = producto.getElementsByTagName("nombre")[0].textContent;
                const precio = producto.getElementsByTagName("precio")[0].textContent;
                const descripcion = producto.getElementsByTagName("descripcion")[0].textContent;
                const categoria = producto.getElementsByTagName("categoria")[0].textContent;

                const card = document.createElement("div");
                card.classList.add("producto-card");

                card.innerHTML = `
                    <h3>${nombre}</h3>
                    <p class="precio">$${parseFloat(precio).toFixed(2)}</p>
                    <span class="categoria">${categoria}</span>
                    <p class="descripcion">${descripcion}</p>
                `;

                contenedor.appendChild(card);
            });
        })
        .catch(err => console.error("Error al cargar XML:", err));
});
