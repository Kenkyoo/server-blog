const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json());

require('dotenv').config();

const port = process.env.PORT || 3000;

const postsRoutes = require('./routes/route')
const getData = require('./routes/data')

app.use('/api/data', getData);
app.use('/api', postsRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
