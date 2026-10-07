// ===================================================
// Pre-Entrega 3: Funciones e Integración de Lógica
// Simulador: Validador de Stock de un negocio (continuación de la Pre-Entrega 2)
// ===================================================

// 1. VARIABLES INICIALES DEL SIMULADOR
const PRODUCTO = "Zapatillas Running";
const STOCK_INICIAL = 10;

let stockDisponible = STOCK_INICIAL;
let unidadesVendidas = 0;

// ===================================================
// 2. FUNCIONES
// ===================================================

// FUNCIÓN 1 (declarada): ENTRADA de datos
// Pide la cantidad al usuario, la convierte a número y la retorna
function pedirCantidad(stockActual) {
  const entrada = prompt(
    "Stock actual: " + stockActual + " unidades.\n" +
    "¿Cuántas unidades querés comprar?"
  );
  return Number(entrada);
}

// FUNCIÓN 2 (declarada): PROCESAMIENTO de datos
// Recibe la cantidad pedida y el stock actual, valida con if/else if/else
// y retorna el nuevo stock disponible después de la operación
function procesarCompra(cantidadPedida, stockActual) {
  if (isNaN(cantidadPedida) || cantidadPedida <= 0) {
    mostrarMensaje("Entrada inválida. Ingresá un número mayor a 0.");
    return stockActual;

  } else if (cantidadPedida > stockActual) {
    mostrarMensaje("No hay stock suficiente. Solo quedan " + stockActual + " unidades.");
    return stockActual;

  } else {
    const nuevoStock = stockActual - cantidadPedida;
    unidadesVendidas = unidadesVendidas + cantidadPedida;
    mostrarMensaje(
      "Compra realizada: " + cantidadPedida + " unidad/es de " + PRODUCTO + "."
    );
    return nuevoStock;
  }
}

// FUNCIÓN 3 (función flecha): SALIDA de datos
// Centraliza cómo se comunican los mensajes al usuario (consola + alert)
const mostrarMensaje = (mensaje) => {
  console.log(mensaje);
  alert(mensaje);
};

// FUNCIÓN 4 (función flecha): procesamiento simple, optimiza un cálculo
// Calcula qué porcentaje del stock inicial ya se vendió
const calcularPorcentajeVendido = (vendidas, inicial) => (vendidas / inicial) * 100;

// ===================================================
// 3. BUCLE PRINCIPAL (integración de funciones + condicional + iteración)
// ===================================================
console.log("=== Bienvenido al sistema de ventas ===");
console.log("Producto: " + PRODUCTO);
console.log("Stock disponible: " + stockDisponible + " unidades");

let seguirComprando = true;

while (stockDisponible > 0 && seguirComprando) {
  const cantidadPedida = pedirCantidad(stockDisponible);

  // Invocación de la función que procesa y retorna el nuevo stock
  stockDisponible = procesarCompra(cantidadPedida, stockDisponible);

  if (stockDisponible > 0) {
    seguirComprando = confirm("¿Querés seguir comprando?");
  }
}

// ===================================================
// 4. SALIDA FINAL
// ===================================================
const porcentajeVendido = calcularPorcentajeVendido(unidadesVendidas, STOCK_INICIAL);

let mensajeFinal;
if (stockDisponible === 0) {
  mensajeFinal = "Se agotó el stock de " + PRODUCTO + ". Se vendieron " + unidadesVendidas + " unidades (" + porcentajeVendido + "% del stock inicial).";
} else {
  mensajeFinal = "Venta finalizada. Se vendieron " + unidadesVendidas + " unidades de " + PRODUCTO + " (" + porcentajeVendido + "% del stock inicial). Quedan " + stockDisponible + " en stock.";
}

mostrarMensaje(mensajeFinal);
