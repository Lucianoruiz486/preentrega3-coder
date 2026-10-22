# Simulador de Ventas - Validador de Stock

Simulador en JavaScript para un negocio de indumentaria deportiva. Gestiona el catálogo de productos con un array y simula la venta de unidades del producto que elige el cliente.

## ¿Qué hace?
1. Muestra el catálogo inicial recorriéndolo con `for...of`.
2. Actualiza el catálogo: descontinúa el último producto (`pop`), suma un producto nuevo al final (`push`) y una novedad al principio (`unshift`).
3. Reemplaza un producto por su versión actualizada en una posición concreta (`splice`).
4. Le pide al cliente qué producto quiere y valida que exista (`includes`), informando su posición (`indexOf`).
5. Si existe, simula la venta: pide cantidades hasta que se agote el stock o el cliente decida terminar, y muestra un resumen final con el porcentaje vendido.

## Archivos
- `index.html`: página base que enlaza el script con `defer`.
- `js/main.js`: lógica del simulador, organizada en funciones (`listarStock`, `buscarProducto`, `reemplazarProducto`, `pedirCantidad`, `procesarCompra`, `simularVentas`, `mostrarResumen`, `mostrarMensaje` y `calcularPorcentajeVendido`).

## Cómo ejecutarlo
1. Descargá o cloná el repositorio.
2. Abrí `index.html` en el navegador.
3. Abrí la consola (F12) para ver el detalle y seguí las indicaciones de los cuadros emergentes.
