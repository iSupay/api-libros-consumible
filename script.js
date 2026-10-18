function getBooks(done) {
    // Se conecta a tu propia API corriendo en el puerto 3000
    fetch("http://localhost:3000/api/libros")
        .then(response => response.json())
        .then(data => {
            done(data);
        })
        .catch(error => console.error("Error al obtener los libros:", error));
}

getBooks(data => {
    data.results.forEach(libro => {
        const article = document.createRange().createContextualFragment(`
            <article>
                <div class="img-container">
                    <img src="${libro.imagen}" alt="${libro.titulo}">
                </div>
                <h2>${libro.titulo}</h2>
                <p>Autor: ${libro.autor}</p>
            </article>
        `);

        const main = document.querySelector("main");
        main.appendChild(article);
    });
});