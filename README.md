### Actividad: Implementación de una Landing Page con NodeJS y EJS

#### Objetivo
Desarrollar una aplicación web utilizando NodeJS y el motor de plantillas EJS. El objetivo es transformar una landing page estática en múltiples páginas reutilizando componentes, de acuerdo a los diseños proporcionados.

#### Materiales Proporcionados
1. **Carpeta "landing-page"**: Contiene los archivos estáticos iniciales:
   - `index.html`
   - `css/` (estilos)
   - `img/` (imágenes)

2. **Carpeta "boceto final"**: Contiene los diseños finales en formato PNG:
   - `index.png`
   - `contacto.png`
   - `galeria.png`
   - `servicios.png`

#### Descripción de la Actividad
1. **Configuración del Entorno**:
   - Instala NodeJS y NPM si no lo has hecho ya.
   - Inicializa un proyecto NodeJS en tu directorio de trabajo.
   - Instala las dependencias necesarias:
     ```bash
     npm init -y
     npm install express ejs
     ```

2. **Estructura del Proyecto**:
   - Crea la siguiente estructura de carpetas en tu proyecto:
     ```
     proyecto/
     ├── views/
     │   ├── partials/
     │   │   ├── header.ejs
     │   │   ├── footer.ejs
     │   ├── index.ejs
     │   ├── contacto.ejs
     │   ├── galeria.ejs
     │   ├── servicios.ejs
     ├── public/
     │   ├── css/
     │   ├── img/
     ├── app.js
     ```

3. **Configuración del Servidor Express**:
   - En el archivo `app.js`, configura el servidor Express para servir las páginas EJS:
     ```javascript
     const express = require('express');
     const app = express();
     const port = 3000;

     app.use(express.static(path.join(__dirname, 'public')))
        .set('views', path.join(__dirname, 'views'))
        .set('view engine', 'ejs');

     app.get('/', (req, res) => {
         res.render('index');
     });

     app.get('/contacto', (req, res) => {
         res.render('contacto');
     });

     app.get('/galeria', (req, res) => {
         res.render('galeria');
     });

     app.get('/servicios', (req, res) => {
         res.render('servicios');
     });

     app.listen(port, () => {
         console.log(`Servidor corriendo en http://localhost:${port}`);
     });
     ```

4. **Creación de Componentes Reutilizables**:
   - Divide index.html en componentes reutilizables y colócalos en la carpeta partials. Los componentes serán: head.ejs, icons.ejs, services.ejs, navbar.ejs, gallery.ejs, features.ejs, contact.ejs, companies.ejs, header.ejs, y footer.ejs
   - En cada archivo EJS principal (`index.ejs`, `contacto.ejs`, `galeria.ejs`, `servicios.ejs`), incluye estos componentes utilizando las etiquetas EJS:
     ```html
     <!-- Ejemplo de index.ejs -->
     <%- include('partials/header') %>
     <main>
         <!-- Contenido específico de index.ejs -->
     </main>
     <%- include('partials/footer') %>
     ```

5. **Implementación de Páginas Basadas en Bocetos**:
   - Basándote en los diseños proporcionados en la carpeta "boceto final", implementa el contenido específico para cada página (`index.ejs`, `contacto.ejs`, `galeria.ejs`, `servicios.ejs`).

6. **Estilización y Recursos Estáticos**:
   - Asegúrate de que los archivos CSS e imágenes se referencien correctamente en las plantillas EJS. Coloca los archivos CSS en la carpeta `public/css` y las imágenes en `public/img`.

7. **Revisión y Pruebas**:
   - Verifica que cada página se renderice correctamente y que los componentes reutilizables se carguen según lo esperado.
   - Asegúrate de que la navegación entre las páginas funcione adecuadamente.


¡Buena suerte y manos al teclado!
