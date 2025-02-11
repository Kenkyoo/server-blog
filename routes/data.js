const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/getData', (req, res) => {
    fetch('https://jsonfakery.com/blogs')
      .then(response => response.json())
      .then(data => {
        const db = data.slice(0, 100);
        res.json(db);
        fs.writeFile('db.json', JSON.stringify(db, null, 4), (err) => {
          if (err) {
            console.error('Error al guardar el archivo:', err);
            res.status(500).json({ error: 'Error al guardar el archivo JSON' });
          } else {
            console.log('Archivo JSON guardado exitosamente.');
          }
        });
      })
      .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
        res.status(500).json({ error: 'Error al obtener los datos de la API' });
      });
  });
  
module.exports = router;