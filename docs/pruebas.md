# Pruebas

Ejecuta `node --test` desde la raíz con Node.js 18+; sin instalar paquetes. `node --check app.js` comprueba sintaxis del controlador.

Siete pruebas automáticas cubren separadores y coma decimal, datos inválidos, estadística de referencia (media 5, varianza poblacional 4 y muestral 32/7), n=1, ausencia de moda y empate, conversiones, dimensiones incompatibles, cero absoluto, tolerancia y rechazo de respaldos inválidos. La validación rechaza claves heredadas (`constructor`, `__proto__`, `toString`) y unidades de tipos distintos de cadena.

## Revisión manual recomendada

1. Cargar ejemplo: datos 2, 4, 4, 4, 5, 5, 7, 9. Verificar media 5, mediana 4,5 y moda 4.
2. Comprobar media con respuesta 5/tolerancia 0; cambiar datos y confirmar que exige recalcular.
3. Convertir 2 km → 2.000 m, 32 °F → aproximadamente 0 °C; rechazar temperatura bajo cero absoluto.
4. Exportar e importar, cancelar y confirmar sustitución; intentar JSON malformado.
5. Bloquear almacenamiento: debe permitir calcular y exportar.
6. Probar ancho 360 px, teclado y lectores de mensajes de estado; no depender solo del color.

La prueba automática verifica lógica, no equivale a una auditoría completa de accesibilidad ni a cobertura de todos los navegadores.
