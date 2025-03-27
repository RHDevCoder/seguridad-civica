// Importamos Express
const express = require('express');

// Creamos la aplicación de Express
const app = express();

// Definimos el puerto
const port = process.env.PORT || 3000;

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.send('Bienvenido a Seguridad Cívica');
});

// Iniciamos el servidor
app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});
