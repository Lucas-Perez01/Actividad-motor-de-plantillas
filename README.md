### Actividad: Implementación de una Landing Page con NodeJS y EJS

#### Objetivo
Desarrollar una aplicación web utilizando NodeJS y el motor de plantillas EJS. El objetivo es transformar una landing page estática en múltiples páginas reutilizando componentes y crear una sección de servicios dinámica utilizando parámetros de ruta.

#### Materiales Proporcionados
1. **Carpeta "landing-page"**: Contiene los archivos estáticos iniciales:
   - `index.html`
   - `css/` (estilos)
   - `img/` (imágenes)
   - `servicio.json` (datos de servicios)

2. **Carpeta "boceto final"**: Contiene los diseños finales en formato PNG:
   - `index.png`
   - `contacto.png`
   - `galeria.png`
   - `servicios.png`
   - `servicio-detalle.png`

#### Descripción de la Actividad

1. **Configuración del Entorno (Opción A - Manual)**:
   - Instala NodeJS y NPM si no lo has hecho ya.
   - Inicializa un proyecto NodeJS en tu directorio de trabajo.
   - Instala las dependencias necesarias:
     ```bash
     npm init -y
     npm install express ejs
     ```

   **Configuración del Entorno (Opción B - Express Generator)**:
   ```bash
   npm install -g express-generator
   express --view=ejs nombre-proyecto
   cd nombre-proyecto
   npm install
   ```

2. **Estructura del Proyecto**:
   ```
   proyecto/
   ├── routes/
   │   ├── index.js
   │   ├── servicio.js
   ├── views/
   │   ├── partials/
   │   │   ├── header.ejs
   │   │   ├── footer.ejs
   │   │   ├── navbar.ejs
   │   ├── pages/
   │   │   ├── index.ejs
   │   │   ├── contacto.ejs
   │   │   ├── galeria.ejs
   │   │   ├── servicio.ejs
   ├── public/
   │   ├── css/
   │   ├── img/
   │   ├── js/
   ├── data/
   │   ├── servicio.json
   ├── app.js
   ```

3. **Configuración del Servidor Express**:
   ```javascript
   const express = require('express');
   const path = require('path');
   const app = express();
   const port = 3000;

   // Importar rutas
   const indexRouter = require('./routes/index');
   const servicioRouter = require('./routes/servicio');

   // Configuración de vistas y archivos estáticos
   app.set('views', path.join(__dirname, 'views'));
   app.set('view engine', 'ejs');
   app.use(express.static(path.join(__dirname, 'public')));

   // Usar rutas
   app.use('/', indexRouter);
   app.use('/servicio', servicioRouter);

   app.listen(port, () => {
       console.log(`Servidor corriendo en http://localhost:${port}`);
   });
   ```

4. **Configuración de Rutas**:
   
   En `routes/index.js`:
   ```javascript
   const express = require('express');
   const router = express.Router();

   router.get('/', (req, res) => {
       res.render('pages/index');
   });

   router.get('/contacto', (req, res) => {
       res.render('pages/contacto');
   });

   router.get('/galeria', (req, res) => {
       res.render('pages/galeria');
   });

   module.exports = router;
   ```

   En `routes/servicio.js`:
   ```javascript
   const express = require('express');
   const router = express.Router();
   const servicios = require('../data/servicio.json');

   // Ruta para mostrar un servicio específico
   router.get('/:id', (req, res) => {
       const servicio = servicios.servicios.find(s => s.id === req.params.id);
       if (!servicio) {
           return res.status(404).send('Servicio no encontrado');
       }
       res.render('pages/servicio', { servicio });
   });

   module.exports = router;
   ```

5. **Creación de Plantillas EJS**:

   En `views/pages/servicio.ejs`:
   ```ejs
   <%- include('../partials/header') %>
   <%- include('../partials/navbar') %>

   <section class="service-detail gradient">
     <div class="container pt-5 mt-5">
       <div class="row align-items-center justify-content-center">
         <div class="col-md-8 text-center">
           <h1 class="servicio-titulo"><%= servicio.titulo %></h1>
           <div class="servicio-imagen my-5">
             <img src="<%= servicio.imagen %>" alt="<%= servicio.titulo %>" class="img-fluid">
           </div>
           <div class="servicio-descripcion">
             <p><%= servicio.descripcion %></p>
           </div>
           <div class="caracteristicas mt-5">
             <h3>Características principales</h3>
             <ul class="list-unstyled servicio-caracteristicas">
               <% servicio.caracteristicas.forEach(caracteristica => { %>
                 <li><%= caracteristica %></li>
               <% }); %>
             </ul>
           </div>
           <div class="mt-5">
             <a href="/" class="btn btn-outline-light">Volver al inicio</a>
           </div>
         </div>
       </div>
     </div>
   </section>

   <%- include('../partials/footer') %>
   ```

6. **Manejo de Datos**:
   - Coloca el archivo `servicio.json` en la carpeta `data/`
   - Los datos de los servicios se cargarán dinámicamente desde este archivo
   - Cada servicio debe tener un ID único que coincida con los parámetros de ruta

7. **Enlaces en la Página Principal**:
   - Asegúrate de que los botones de servicios en la página principal enlacen correctamente:
   ```html
   <button onclick="window.location.href='/servicio/desarrollo'" type="button" class="btn btn-outline-warning">
     Desarrollo
   </button>
   ```

8. **Pruebas y Verificación**:
   - Verifica que las rutas funcionen correctamente:
     - `/` - Página principal
     - `/servicio/desarrollo` - Detalle del servicio de desarrollo
     - `/servicio/marketing` - Detalle del servicio de marketing
     - `/servicio/ventas` - Detalle del servicio de ventas
   - Comprueba que los datos se carguen correctamente desde el JSON
   - Verifica que las imágenes y estilos se muestren adecuadamente

9. **Manejo de Errores**:
   - Implementa una página 404 para servicios no encontrados
   - Asegúrate de que las rutas inválidas sean manejadas apropiadamente

¡Buena suerte y manos al teclado!
