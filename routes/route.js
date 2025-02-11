const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();
const JSON_SERVER_URL = process.env.JSON_SERVER_URL;

router.get('/posts/:page/:perPage', async (req, res) => {
  const { page, perPage } = req.params;
  
  try {
    const response = await axios.get(`${JSON_SERVER_URL}/posts?_sort=updated_at&_page=${page}&per_page=${perPage}`);
    res.json(response.data); // Axios ya convierte la respuesta en JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/post', async (req, res) => {
  const { id } = req.query;

  try {
    const response = await axios.get(`${JSON_SERVER_URL}/posts`, {
      params: { id },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/user', async (req, res) => {
  const { user_id } = req.query;

  try {
    const response = await axios.get(`${JSON_SERVER_URL}/posts`, {
      params: { user_id },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/userPosts', async (req, res) => {
  const { user_id } = req.query;

  try {
    const response = await axios.get(`${JSON_SERVER_URL}/posts`, {
      params: { user_id },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.patch('/favorites/:id', async (req, res) => {
  const { id } = req.params; // Obtiene el ID de la URL
  const { favorite } = req.body; // Obtiene el nuevo estado desde el cuerpo de la petición

  try {
    const response = await axios.patch(`${JSON_SERVER_URL}/posts/${id}`, { favorite }, {
        headers: { "Content-Type": "application/json" }
    });
    res.json(response.data);
    console.log(response);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/addPosts', async (req, res) => {
  try {
    const response = await axios.post(`${JSON_SERVER_URL}/posts`, req.body, {
        headers: { "Content-Type": "application/json" }
    });

    res.json(response.data); // Enviamos la respuesta al frontend
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Backend (Node.js con Express)
router.get('/posts', async (req, res) => {
  try {
  const response = await axios.get(`${JSON_SERVER_URL}/posts`);
  res.json(response.data);
} catch (error) {
  res.status(500).json({ error: error.message });
}
});

module.exports = router;