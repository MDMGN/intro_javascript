
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

console.log(obtenerTotalDeDisponibles(productos)); // 1300