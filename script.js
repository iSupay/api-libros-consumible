document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('libros-container');

  // Petición a la API usando ruta relativa
  fetch('/api/libros')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la respuesta de la red');
      }
      return response.json();
    })
    .then(data => {
      // Limpiar el contenedor
      contenedor.innerHTML = '';

      // Recorrer los libros y renderizar las tarjetas
      data.results.forEach(libro => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
          <div class="img-container">
            <img src="${libro.imagen}" alt="${libro.titulo}">
          </div>
          <h3>${libro.titulo}</h3>
          <p>Autor: ${libro.autor}</p>
        `;

        contenedor.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error al cargar la API:', error);
      contenedor.innerHTML = '<p>Error al cargar el catálogo de libros.</p>';
    });
});
