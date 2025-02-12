const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000; // Render usa process.env.PORT

app.use(cors());
app.use(express.json());

// Cargar rutas
const postsRoutes = require('./routes/route'); // Ajusta el nombre si es necesario
const getData = require('./routes/data');

app.use('/api/data', getData);
app.use('/api', postsRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
