const express = require('express');
const cors = require('cors');
const jsonServer = require('json-server');

const app = express();
const port = process.env.PORT || 3000; // Render usa process.env.PORT

app.use(cors());
app.use(express.json());

// Cargar rutas
const postsRoutes = require('./routes/posts');
const getData = require('./routes/data');

app.use('/api/data', getData);
app.use('/api', postsRoutes);

// Configurar JSON Server (Para db.json)
const dbRouter = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
app.use('/json', middlewares, dbRouter);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
