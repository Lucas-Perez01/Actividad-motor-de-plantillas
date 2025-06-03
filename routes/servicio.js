const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Ruta para mostrar todos los servicios
router.get('/', (req, res) => {
  const dataPath = path.join(__dirname, '../data/servicio.json');

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer servicio.json:', err);
      return res.status(500).send('Error interno del servidor');
    }

    // Parseamos el JSON
    const serviciosData = JSON.parse(data);
    // Enviamos todos los servicios a la vista, si tienes una para listarlos
    res.render('pages/servicio', { servicios: serviciosData.servicios });
  });
});

// Ruta para mostrar un servicio específico por ID
router.get('/:id', (req, res) => {
  const servicioId = req.params.id;
  const dataPath = path.join(__dirname, '../data/servicio.json');

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer servicio.json:', err);
      return res.status(500).send('Error interno del servidor');
    }

    const serviciosData = JSON.parse(data);
    // Buscamos el servicio con el id que recibimos en la URL
    const servicio = serviciosData.servicios.find(s => s.id === servicioId);

    if (!servicio) {
      return res.status(404).send('Servicio no encontrado');
    }

    // Renderizamos la vista servicio.ejs enviando el objeto servicio
    res.render('pages/servicio', { servicio });
  });
});

module.exports = router;
