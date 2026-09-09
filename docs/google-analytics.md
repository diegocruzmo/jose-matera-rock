## Configuración de este sitio

Dominio: https://josematera.netlify.app
ID de medición: G-KNEBYSPNZS

El archivo netlify.toml configura el ID para los builds de producción de Netlify. Publicar este archivo junto con los cambios de src/main.jsx y src/analytics.js mediante el flujo habitual del repositorio. Si ya existe VITE_GA_MEASUREMENT_ID en el panel de Netlify, mantener el mismo valor para evitar configuraciones contradictorias.

Después de desplegar, visitar el dominio y comprobar la propiedad correspondiente en Tiempo real. La compilación local por sí sola no activa Analytics en el sitio público.
