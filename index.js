const express = require('express');
const cors = require('cors');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Render usa process.env.PORT

app.use(cors());
app.use(express.json());

// Cargar rutas
const postsRoutes = require('./routes/route'); // Ajusta el nombre si es necesario
const getData = require('./routes/data');

app.use('/api/data', getData);
app.use('/api', postsRoutes);

// Configurar JSON Server (Para db.json)
const dbRouter = jsonServer.router(path.join(__dirname, 'db.json')); // Asegura la ruta correcta
const middlewares = jsonServer.defaults();
app.use('/json', middlewares, dbRouter);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
