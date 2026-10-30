# Uso

Abre https://rekol08.github.io/aula-laboratorio-datos/ y usa una de las dos herramientas. La [guía HTML](../guia.html) está disponible dentro del sitio.

## Datos

Se aceptan espacios, saltos de línea y punto y coma como separadores; la coma y el punto son decimales. `1,5; 2,5` son dos observaciones. `1,2,3` es inválido. Máximo 1.000 observaciones, 30.000 caracteres y magnitud absoluta 1e100 por dato.

La media es Σx/n; la mediana usa el orden. Si todas las frecuencias son uno, se informa sin moda. Los empates de frecuencia máxima se muestran como modas. Selecciona explícitamente muestra o población. Con n=1, la varianza y desviación muestral no se definen; las poblacionales valen cero.

Tras cambiar entradas, vuelve a calcular antes de comprobar respuestas. La tolerancia es absoluta y se mide en la unidad del resultado, no en porcentaje. El texto se redondea a diez cifras significativas; las comparaciones usan el resultado de cálculo sin ese redondeo.

## Unidades

Longitud: m, km, cm, mm. Masa: kg, g, mg. Tiempo: s, min, h. Temperatura: °C, °F, K. El destino se limita a la magnitud de origen. No se admiten temperaturas inferiores al cero absoluto. La comparación de conversiones dispone de su propia respuesta y tolerancia.

## Trabajo guardado

Se guarda automáticamente en localStorage, si el navegador lo admite. Exportar descarga JSON; importar valida formato, magnitudes, tipos y tamaño (100 KB) antes de pedir confirmación. El respaldo incluye entradas de datos y unidades, no las respuestas del comprobador. Borrar datos requiere confirmar y elimina el registro de esta app; no elimina archivos descargados.
