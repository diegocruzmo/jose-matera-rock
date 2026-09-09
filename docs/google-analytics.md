# Configurar Google Analytics 4

1. Entrar en https://analytics.google.com/, crear una cuenta si hace falta y una propiedad «José Matera — Rock». Elegir la zona horaria de Colombia.
2. Crear un flujo de datos Web con el dominio público actual. Mantener la medición mejorada y copiar el ID de medición G-….
3. En el hosting, agregar VITE_GA_MEASUREMENT_ID con ese ID como variable del build de producción. En Vercel: proyecto → Settings → Environment Variables → Production. En Netlify: configuración del proyecto → Environment variables; usar el contexto de producción.
4. Publicar los cambios del código y generar un nuevo despliegue. Vite incorpora la variable al compilar: cambiarla requiere volver a compilar y publicar.
5. Visitar el sitio publicado y abrir Informes → Tiempo real en Analytics. La recepción inicial puede tardar 10–15 minutos. Los informes procesados pueden tardar 24–48 horas.
6. Visitar inicio, /singles y /videos. Usar https://tagassistant.google.com/ para comprobar el ID y un page_view por carga. No instalar otra etiqueta ni Tag Manager encima de esta integración porque podría duplicar visitas.
7. Consultar Sesiones para visitas, Usuarios para visitantes identificados y Vistas para páginas vistas (incluidas repeticiones). En Páginas y pantallas se desglosan las páginas. En Detalles demográficos, dentro de Atributos de usuario, elegir País, Región o Ciudad. En Adquisición de tráfico se consultan buscadores, redes y otras fuentes. Los menús pueden variar según la colección de informes publicada.

## Funcionamiento y pruebas

La etiqueta se inicializa una vez, fuera del montaje de React. La navegación actual utiliza enlaces con cargas completas. Si se añade un router con History API en el futuro, revisar la medición de páginas virtuales.

Sin ID válido, Analytics no se carga. npm run dev tampoco lo carga. Evitar configurar la variable en despliegues de prueba.

Para una prueba local de producción, copiar .env.example a .env.local, completar el ID y ejecutar npm run build y npm run preview. Esta prueba envía datos a la propiedad elegida; usar una propiedad de prueba para verificaciones repetidas. El ID es público, no es una contraseña.

Si no aparecen datos, revisar el ID, el entorno de la variable, si se recompiló el sitio, bloqueadores de Analytics y errores de red. Si se usa una plataforma de consentimiento, comprobar también la elección de consentimiento.

La ubicación se deriva de la IP y es aproximada; las VPN y redes móviles pueden afectarla. No se solicita GPS. Los usuarios no equivalen a un censo exacto de personas. La medición empieza al activar la etiqueta y no recupera visitas anteriores.

## Privacidad

Esta integración carga GA4 al configurar un ID válido en producción. Informar de Analytics en la política de privacidad y configurar el consentimiento que corresponda antes de activar la recopilación. El código no incluye una plataforma de consentimiento.

## Documentación oficial

- Configuración: https://support.google.com/analytics/answer/14183469?hl=es
- Comprobar recepción: https://support.google.com/analytics/answer/10201247?hl=es
- Ubicación: https://support.google.com/analytics/answer/12948931?hl=es

## Configuración de este sitio

Dominio: https://josematera.netlify.app
ID de medición: G-KNEBYSPNZS

El archivo netlify.toml configura el ID para los builds de producción de Netlify. Publicar este archivo junto con los cambios de src/main.jsx y src/analytics.js mediante el flujo habitual del repositorio. Si ya existe VITE_GA_MEASUREMENT_ID en el panel de Netlify, mantener el mismo valor para evitar configuraciones contradictorias.

Después de desplegar, visitar el dominio y comprobar la propiedad correspondiente en Tiempo real. La compilación local por sí sola no activa Analytics en el sitio público.
