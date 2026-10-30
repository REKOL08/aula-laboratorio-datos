# Aula · Laboratorio de datos

Herramienta abierta para ejercicios cuantitativos en ciencias, ingeniería, salud, administración y ciencias sociales. Funciona en el navegador sin instalación, registro, dependencias externas ni claves de API.

**Abrir:** https://rekol08.github.io/aula-laboratorio-datos/

## Funciones

- Media, mediana, moda, rango, varianza y desviación estándar muestral/poblacional.
- Procedimiento con sumas y desviaciones; comprobación de respuesta mediante tolerancia absoluta elegida por el usuario.
- Conversión compatible de longitud, masa, tiempo y temperatura con pasos.
- Guardado local, respaldo JSON validado e importación con confirmación.
- Diseño móvil, teclado, etiquetas accesibles y mensajes de estado.

No interpreta enunciados libres ni promete validar todas las disciplinas. Es un motor determinista, sin IA remota.

## Documentación dentro del repositorio

- [Guía para estudiantes](guia.html) y [uso](docs/uso.md).
- [Arquitectura y fórmulas](docs/arquitectura.md).
- [Pruebas y revisión manual](docs/pruebas.md).
- [Publicación y mantenimiento](docs/publicacion.md).
- [Privacidad y límites](docs/privacidad.md).
- [Responsabilidades del agente](AGENTS.md).

## Desarrollo

Solo para mantenimiento: Node.js 18+ permite ejecutar `node --test`. Para servir localmente con módulos JavaScript, usa un servidor estático, por ejemplo `python -m http.server 8000`, y abre http://localhost:8000. El visitante del sitio publicado no necesita instalar nada.

Código MIT. © 2026 REKOL08.
