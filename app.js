const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Establecer EJS como motor de plantillas
app.set('view engine', 'ejs');

// Establecer la carpeta de vistas
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos desde la carpeta /public
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const indexRoutes = require('./routes/index');
const servicioRoutes = require('./routes/servicio');

app.use('/', indexRoutes);
app.use('/servicio', servicioRoutes);

// Middleware para manejar 404
app.use((req, res, next) => {
  res.status(404).render('pages/404', { title: 'Página no encontrada' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
