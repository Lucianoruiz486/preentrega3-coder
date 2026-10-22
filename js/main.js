// ===================================================
// Pre-Entrega 4: Uso e interacción con Arrays
// Simulador: Validador de Stock de un negocio de indumentaria deportiva
// Continuación de las Pre-Entregas 2 y 3: ciclos + funciones + array
// ===================================================

// 1. VARIABLES INICIALES
// Cada producto del catálogo parte con las mismas unidades en depósito
const STOCK_INICIAL = 10;

// Colección principal del simulador: los productos que vende el negocio
const productosEnStock = [
  "Zapatillas Running",
  "Remera Deportiva",
  "Short",
  "Medias",
  "Mochila",
];

// ===================================================
// 2. FUNCIONES
// ===================================================

// SALIDA (flecha): centraliza cómo se comunican los mensajes (consola + alert)
const mostrarMensaje = (mensaje) => {
  console.log(mensaje);
  alert(mensaje);
};

// CÁLCULO (flecha con retorno implícito): porcentaje vendido del stock inicial
const calcularPorcentajeVendido = (vendidas, inicial) => (vendidas / inicial) * 100;

// REPORTE ITERATIVO: recibe el array y lo recorre con for...of
function listarStock(lista) {
  console.log("--- Stock actual ---");
  for (const producto of lista) {
    console.log(`Producto: ${producto}`);
  }
  console.log(`Total: ${lista.length} productos`);
}

// BÚSQUEDA Y VALIDACIÓN: includes confirma que existe, indexOf dice dónde está
// Retorna la posición del producto, o -1 si no está en el array
function buscarProducto(lista, nombre) {
  if (lista.includes(nombre)) {
    return lista.indexOf(nombre);
  } else {
    return -1;
  }
}

// ACTUALIZACIÓN POR ÍNDICE: splice reemplaza 1 elemento en la posición indicada
// Retorna el producto que fue reemplazado
function reemplazarProducto(lista, indice, nuevoProducto) {
  const productoAnterior = lista[indice];
  lista.splice(indice, 1, nuevoProducto);
  return productoAnterior;
}

// ENTRADA: pide la cantidad de unidades y la retorna como number
function pedirCantidad(producto, stockActual) {
  const entrada = prompt(
    `Producto: ${producto}\nStock actual: ${stockActual} unidades.\n¿Cuántas unidades querés comprar?`
  );
  return Number(entrada);
}

// PROCESAMIENTO: valida el pedido y retorna el stock resultante
function procesarCompra(producto, cantidadPedida, stockActual) {
  if (!Number.isInteger(cantidadPedida) || cantidadPedida <= 0) {
    mostrarMensaje("Entrada inválida. Ingresá un número entero mayor a 0.");
    return stockActual;
  } else if (cantidadPedida > stockActual) {
    mostrarMensaje(`No hay stock suficiente. Solo quedan ${stockActual} unidades.`);
    return stockActual;
  } else {
    mostrarMensaje(`Compra realizada: ${cantidadPedida} unidad/es de ${producto}.`);
    return stockActual - cantidadPedida;
  }
}

// CICLO DE VENTAS: repite compras del producto elegido hasta que se agote
// el stock o el cliente decida terminar. Retorna el stock que quedó.
function simularVentas(producto, stockInicial) {
  let stockDisponible = stockInicial;
  let seguirComprando = true;

  while (stockDisponible > 0 && seguirComprando) {
    const cantidadPedida = pedirCantidad(producto, stockDisponible);
    stockDisponible = procesarCompra(producto, cantidadPedida, stockDisponible);

    if (stockDisponible > 0) {
      seguirComprando = confirm(`¿Querés seguir comprando ${producto}?`);
    }
  }

  return stockDisponible;
}

// SALIDA FINAL: resumen coherente según cómo terminó la venta
function mostrarResumen(producto, stockInicial, stockRestante) {
  const unidadesVendidas = stockInicial - stockRestante;
  const porcentajeVendido = calcularPorcentajeVendido(unidadesVendidas, stockInicial);

  let mensajeFinal;
  if (stockRestante === 0) {
    mensajeFinal = `Se agotó el stock de ${producto}. Se vendieron ${unidadesVendidas} unidades (${porcentajeVendido}% del stock inicial).`;
  } else {
    mensajeFinal = `Venta finalizada. Se vendieron ${unidadesVendidas} unidades de ${producto} (${porcentajeVendido}% del stock inicial). Quedan ${stockRestante} en stock.`;
  }

  mostrarMensaje(mensajeFinal);
}

// ===================================================
// 3. FLUJO PRINCIPAL DEL SIMULADOR
// ===================================================
console.log("=== Bienvenido al sistema de stock ===");

// Paso 1: estado inicial del catálogo
listarStock(productosEnStock);

// Paso 2: manipulación de extremos
// pop: se discontinúa el último producto y se guarda para informarlo
const productoDescontinuado = productosEnStock.pop();
mostrarMensaje(`Se ha eliminado el elemento: ${productoDescontinuado}`);

// push: llega un producto nuevo y entra al final
const productoNuevo = "Botella Térmica";
productosEnStock.push(productoNuevo);

// unshift: llega una novedad destacada y entra al principio (prioridad)
const productoDestacado = "Zapatillas Trail";
productosEnStock.unshift(productoDestacado);

console.log(`Ingresaron: "${productoNuevo}" (al final) y "${productoDestacado}" (al inicio).`);

// Paso 3: actualización por índice con splice
const indiceAActualizar = 3;
const modeloNuevo = "Short Deportivo Pro";
const modeloAnterior = reemplazarProducto(productosEnStock, indiceAActualizar, modeloNuevo);
mostrarMensaje(
  `Se actualizó la posición ${indiceAActualizar}: "${modeloAnterior}" fue reemplazado por "${modeloNuevo}".`
);

// Catálogo ya actualizado
listarStock(productosEnStock);

// Paso 4: búsqueda y validación del producto que quiere el cliente
// (si el cliente cancela el prompt, se usa "" para no trabajar con null)
const productoBuscado =
  prompt(
    "¿Qué producto querés comprar? Escribilo tal cual figura:\n" +
      productosEnStock.join(" - ")
  ) || "";

const posicion = buscarProducto(productosEnStock, productoBuscado);

// Paso 5: si existe, se inicia la venta; si no, se informa
if (posicion !== -1) {
  mostrarMensaje(`✅ "${productoBuscado}" está en stock, en la posición ${posicion}.`);
  const stockRestante = simularVentas(productoBuscado, STOCK_INICIAL);
  mostrarResumen(productoBuscado, STOCK_INICIAL, stockRestante);
} else {
  mostrarMensaje(`❌ "${productoBuscado}" no está en stock.`);
}

console.log("=== Fin de la simulación ===");
