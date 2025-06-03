const express = require('express');
const router = express.Router();

// Página principal
router.get('/', (req, res) => {
  res.render('pages/index');
});

// Página de contacto
router.get('/contacto', (req, res) => {
  res.render('pages/contacto');
});

// Página de galería
router.get('/galeria', (req, res) => {
  res.render('pages/galeria');
});

module.exports = router;