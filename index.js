const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Servir archivos estáticos (index.html, estilo.css, script.js)
app.use(express.static(__dirname));

// Arreglo de libros con portadas reales
const libros = [
  {
    id: 1,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    imagen: "https://covers.openlibrary.org/b/isbn/9780307474728-L.jpg"
  },
  {
    id: 2,
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    imagen: "https://covers.openlibrary.org/b/olid/OL27421861M-L.jpg"
  },
  {
    id: 3,
    titulo: "Pedro Páramo",
    autor: "Juan Rulfo",
    imagen: "https://covers.openlibrary.org/b/isbn/9788437604183-L.jpg"
  },
  {
    id: 4,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    imagen: "https://covers.openlibrary.org/b/isbn/9780156013987-L.jpg"
  },
  {
    id: 5,
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    imagen: "https://covers.openlibrary.org/b/isbn/9781451673319-L.jpg"
  },
  {
    id: 6,
    titulo: "1984",
    autor: "George Orwell",
    imagen: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg"
  }
];

// Endpoint de la API
app.get('/api/libros', (req, res) => {
  res.json({ results: libros });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
