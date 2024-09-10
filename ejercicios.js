
/**
 * Ejercicio 1: Filtrar productos según su disponibilidad y calcular el total
Tienes una tienda en línea que muestra productos con su disponibilidad y precio. Crea una función que filtre los productos disponibles y calcule el precio total de los mismos.
 */
const productos = [
    { nombre: "Laptop", disponible: true, precio: 1000 },
    { nombre: "Teléfono", disponible: false, precio: 500 },
    { nombre: "Tablet", disponible: true, precio: 300 }
];

function obtenerTotalDeDisponibles(productos) {
    // Filtrar productos disponibles y calcular el total usando callbacks y reduce
    const productosDisponibles = productos.filter( producto => producto.disponible )
     const total = productosDisponibles.reduce( (acc, item) => acc+=item.precio , 0)
     return total
}

/* console.log(obtenerTotalDeDisponibles(productos)); // 1300 */

/* Ejercicio 2: Crear un sistema de puntuación para un juego
Imagina que estás desarrollando un juego donde los jugadores acumulan puntos en varias rondas. Crea una función que reciba un array de puntuaciones por ronda y calcule el total de puntos de cada jugador. */

const jugadores = [
    { nombre: "Player1", puntuaciones: [10, 20, 15] },
    { nombre: "Player2", puntuaciones: [5, 15, 20] }
];

function calcularPuntuacionTotal(jugadores) {
    // Usa reduce para calcular el total de puntos por jugador
    return jugadores.map(({nombre, puntuaciones})=>({
            nombre,
            total: puntuaciones.reduce((acc,puntuacion)=> acc+= puntuacion ,0)
        })
    )
}

/* console.log(calcularPuntuacionTotal(jugadores));  */
// [{ nombre: "Player1", total: 45 }, { nombre: "Player2", total: 40 }]

/* Ejercicio 3: Actualizar un inventario de tienda
Tienes un inventario de productos en una tienda y deseas actualizarlo. Crea una función que permita restar la cantidad de un producto vendido y también ver si el producto ya está agotado.
 */

const inventario = {
    manzanas: 10,
    peras: 15,
    naranjas: 20
};

function actualizarInventario(producto, cantidadVendida) {
    // Usa operadores de corto circuito para verificar si hay suficientes productos
    // Actualiza el inventario y verifica si un producto está agotado

    (inventario[producto]) ?
    
    inventario[producto] >= cantidadVendida ? 
    inventario[producto]-= cantidadVendida : console.log(`El producto ${producto} no tiene existencias!`)

    : console.log(`El producto ${producto} no existe!`) 
    

}

/* actualizarInventario("manzanas", 5);
console.log(inventario); // { manzanas: 5, peras: 15, naranjas: 20 }
actualizarInventario("manzanas", 5);
console.log(inventario); // { manzanas: 0, peras: 15, naranjas: 20 }

 */

let usuariosDB = {};

function agregarUsuario(nombre, apellido) {
    // Usa propiedades computadas para agregar usuarios con claves dinámicas
usuariosDB={
    ...usuariosDB,
    [nombre] : apellido
}
}

agregarUsuario("Juan", "Pérez");
agregarUsuario("Ana", "García");

console.log(usuariosDB);
// { Juan: "Pérez", Ana: "García" }