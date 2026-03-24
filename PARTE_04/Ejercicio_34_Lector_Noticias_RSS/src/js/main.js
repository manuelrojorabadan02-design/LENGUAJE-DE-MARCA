document.addEventListener('DOMContentLoaded', () => {

    async function traerNoticias() {
        try {
            const respuesta = await fetch("feed.xml");

            if (!respuesta.ok) {
                throw new Error(`HTTP error! status: ${respuesta.status}`);
            }

            const texto = await respuesta.text();

            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(texto, "application/xml");

            // Header Info
            const channelTitle = xmlDoc.getElementsByTagName('title')[0].textContent;
            const channelDesc = xmlDoc.getElementsByTagName('description')[0].textContent;

            document.getElementById('rss-title').textContent = channelTitle;
            document.getElementById('rss-desc').textContent = channelDesc;

            // Items Info
            const items = xmlDoc.getElementsByTagName('item');
            const container = document.getElementById('news-container');
            container.innerHTML = ''; // Limpiar loader

            Array.from(items).forEach(item => {
                const title = item.getElementsByTagName('title')[0].textContent;
                const link = item.getElementsByTagName('link')[0].textContent;
                const author = item.getElementsByTagName('author')[0].textContent;
                const pubDate = item.getElementsByTagName('pubDate')[0].textContent;
                const desc = item.getElementsByTagName('description')[0].textContent;

                const article = document.createElement('article');
                article.classList.add('article');

                article.innerHTML = `
                    <h2 class="article__title"><a href="${link}" target="_blank">${title}</a></h2>
                    <div class="article__meta">Por <span>${author}</span> el ${pubDate}</div>
                    <p class="article__desc">${desc}</p>
                `;

                container.appendChild(article);
            });

        } catch (error) {
            console.error("Error al cargar RSS:", error);
            document.getElementById('news-container').innerHTML =
                `<div class="loader" style="color: red;">Error al cargar las noticias.</div>`;
        }
    }

    traerNoticias();
});
