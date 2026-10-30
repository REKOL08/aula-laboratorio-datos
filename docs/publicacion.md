# Publicación en GitHub Pages

Repositorio público: https://github.com/REKOL08/aula-laboratorio-datos

Sitio: https://rekol08.github.io/aula-laboratorio-datos/

GitHub Pages publica desde la rama `main`, carpeta raíz `/`. `.nojekyll` evita procesamiento Jekyll; no hay fase de compilación ni dependencias que descargar. Las rutas de assets son relativas y funcionan bajo el subdirectorio del repositorio.

## Actualizar

1. Cambia código y documentación, ejecuta pruebas.
2. Revisa que solo haya archivos de este proyecto y no contengan información personal.
3. Confirma y envía a `main`.
4. Comprueba el despliegue de Pages en Actions/Settings → Pages y la página publicada.

Consulta de mantenimiento con GitHub CLI: `gh api repos/REKOL08/aula-laboratorio-datos/pages` y `gh api repos/REKOL08/aula-laboratorio-datos/pages/builds/latest`. La publicación puede tardar varios minutos. El visitante no necesita GitHub CLI, Git ni Node.

GitHub Pages sirve archivos estáticos. Un futuro chatbot que necesite claves privadas requiere un servicio separado; nunca almacenes claves en JavaScript público.
