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

1. **Configuración del Entorno**:
   Tienes dos opciones para iniciar el proyecto:
   
   **Opción A - Manual**:
   - Instala NodeJS y NPM si no lo has hecho ya
   - Inicializa un proyecto NodeJS en tu directorio de trabajo
   - Instala las dependencias necesarias (express y ejs)
     ```bash
     npm init -y
     npm install express ejs
     ```

   **Opción B - Express Generator**:
   - Utiliza express-generator para crear la estructura base del proyecto
   - Configura EJS como motor de vistas
    ```bash
    npm install -g express-generator
    express --view=ejs nombre-proyecto
    cd nombre-proyecto
    npm install
    ```

2. **Estructura del Proyecto**:
   Organiza tu proyecto siguiendo esta estructura de directorios:
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
   - Configura un servidor básico con Express
   - Establece EJS como motor de vistas
   - Configura el directorio de archivos estáticos
   - Define las rutas principales

4. **Implementación de Rutas**:
   Crea las siguientes rutas:
   - Ruta principal ('/')
   - Ruta de contacto ('/contacto')
   - Ruta de galería ('/galeria')
   - Ruta de servicios con parámetros ('/servicio/:id')

5. **Creación de Plantillas EJS**:
   Desarrolla las siguientes vistas:
   - Componentes reutilizables (header, footer, navbar)
   - Páginas principales (index, contacto, galeria)
   - Plantilla de detalle de servicio

6. **Manejo de Datos**:
   - Coloca el archivo `servicio.json` en la carpeta `data/`
   - Los datos de los servicios se cargarán dinámicamente desde este archivo
   - Cada servicio debe tener un ID único que coincida con los parámetros de ruta

7. **Enlaces y Navegación**:
   - Implementa la navegación entre páginas
   - Crea enlaces dinámicos para los servicios
   - Asegura que todos los enlaces funcionen correctamente

8. **Pruebas y Verificación**:
   - Verifica que las rutas funcionen correctamente:
     - `/` - Página principal
     - `/servicio/desarrollo` - Detalle del servicio de desarrollo
     - `/servicio/marketing` - Detalle del servicio de marketing
     - `/servicio/ventas` - Detalle del servicio de ventas
   - Comprueba que los datos se carguen correctamente desde el JSON
   - Verifica que las imágenes y estilos se muestren adecuadamente

9. **Manejo de Errores**:
   - Implementa una página 404 personalizada
   - Añade manejo de errores para rutas inválidas
   - Verifica que los servicios no existentes se manejen adecuadamente

#### Consejos Adicionales:
- Utiliza la documentación oficial de Express y EJS como referencia
- Implementa un diseño responsive
- Mantén un código limpio y bien organizado
- Comenta tu código apropiadamente
- Prueba exhaustivamente todas las funcionalidades

¡Buena suerte y manos al teclado!
