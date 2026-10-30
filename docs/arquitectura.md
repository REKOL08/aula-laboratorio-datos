# Arquitectura y fórmulas

`index.html` contiene la estructura accesible. `style.css` define el diseño responsive sin fuentes remotas. `app.js` mantiene la interacción, renderiza texto seguro con DOM y gestiona localStorage e importación/exportación. `core.js` exporta funciones puras que también se prueban en Node; no evalúa expresiones arbitrarias. `guia.html` funciona sin JavaScript.

## Estadística

Media: x̄ = Σx/n. Mediana: valor central ordenado, o promedio de los dos centrales. Rango: máximo − mínimo. Suma de cuadrados: SC = Σ(x − x̄)². Varianza poblacional SC/n; muestral SC/(n − 1). Desviación: raíz cuadrada de la varianza. Las modas son valores de frecuencia máxima si esa frecuencia supera uno.

El procedimiento presenta los datos ordenados y las primeras 100 filas de desviaciones para no sobrecargar el DOM; el cálculo incluye hasta 1.000 datos. Usa números IEEE 754 de JavaScript, no aritmética decimal exacta. El límite de magnitud 1e100 evita desbordamientos en cuadrados de diferencias dentro del tamaño admitido. No se corrige cancelación extrema ni se realizan inferencias estadísticas.

## Conversión

Para magnitudes lineales: base = valor × factorOrigen; destino = base / factorDestino. Bases: metro, kilogramo y segundo. Temperatura: K = °C + 273,15; K = (°F − 32) × 5/9 + 273,15. Inversas: °C = K − 273,15; °F = (K − 273,15) × 9/5 + 32. Se admite una tolerancia numérica 1e-10 K al detectar cero absoluto y se limita el mínimo aceptado a cero.

Respuesta aceptada: |calculado − propuesto| ≤ toleranciaAbsoluta, con tolerancia finita y no negativa. La aceptación solo verifica esa diferencia, no la interpretación del problema.

## Persistencia

Clave `aula-laboratorio-v1`. Esquema `{version:1,raw:string,sample:boolean,value:string,from:string,to:string}`. Importación selecciona exclusivamente esos campos; valida datos y compatibilidad antes de sustituir. No hay peticiones de red desde JavaScript, analítica ni backend.
