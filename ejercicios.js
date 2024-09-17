
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

    (inventario[producto] || console.log(`El producto ${producto} no existe!`) ) 
    && (
        inventario[producto] >= cantidadVendida ? 
        inventario[producto]-= cantidadVendida : console.log(`El producto ${producto} no tiene existencias!`)
        )
    

}

actualizarInventario("manzanas", 5);
console.log(inventario); // { manzanas: 5, peras: 15, naranjas: 20 }
actualizarInventario("manzanas", 5);
console.log(inventario); // { manzanas: 0, peras: 15, naranjas: 20 }
actualizarInventario("manzanas", 5);
console.log(inventario); // 



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
/* console.log(usuariosDB);
// { Juan: "Pérez", Ana: "García" }

 */

/* Ejercicio 5: Crear un buscador de productos por nombre
En una tienda online, necesitas implementar un buscador que permita a los usuarios buscar productos por nombre parcial. Crea una función que reciba un array de productos y un término de búsqueda, y devuelva los productos que contengan ese término en su nombre.
 */
const productosTienda = [
    { nombre: "Camiseta", precio: 15 },
    { nombre: "Pantalón", precio: 25 },
    { nombre: "Zapatos", precio: 50 }
];

function buscarProductoPorNombre(productos, termino) {
    // Usa filter para buscar productos cuyo nombre incluya el término
    return productos.filter((el) => el.nombre.startsWith(termino)  )

}

//console.log(buscarProductoPorNombre(productosTienda, "Cami")); // [{ nombre: "Camiseta", precio: 15 }]

/* Ejercicio 6: Gestión de tareas pendientes
Estás desarrollando una aplicación de tareas pendientes. Crea funciones para agregar tareas, marcarlas como completadas y filtrar las que están pendientes. Usa callbacks para realizar las operaciones de filtrado y mapeo de los estados de las tareas. */

let tareas = [
    { nombre: "Hacer compras", completada: false },
    { nombre: "Estudiar", completada: false },
    { nombre: "Pasear al perro", completada: true }
];

function agregarTarea(nombre) {
    // Agrega una nueva tarea
    tareas = [
        ...tareas,
        {
            nombre,
            completada : false
        }
    ]
}

function completarTarea(nombre) {
    // Marca una tarea como completada
    tareas = tareas.map(el => el.nombre === nombre ? {...el, completada: true} : el)
}

function obtenerTareasPendientes(tareas) {
    // Usa filter para obtener las tareas no completadas
    return tareas.filter( el => !el.completada )
}

agregarTarea("Ir al gimnasio");
completarTarea("Hacer compras");
//console.log(obtenerTareasPendientes(tareas)); 
// [{ nombre: "Estudiar", completada: false }, { nombre: "Ir al gimnasio", completada: false }]



/* 
7.
En una escuela, deseas calcular el promedio de notas de varios estudiantes. Crea una función que reciba un array de estudiantes, donde cada estudiante tiene un array de notas, y devuelva el promedio de notas de cada estudiante.
*/


const estudiantes = [
    { nombre: "Juan", notas: [10, 9, 8] },
    { nombre: "Ana", notas: [9, 8, 7] }
];

function calcularPromedio(estudiantes) {
    // Usa map y reduce para calcular el promedio de notas por estudiante
    return estudiantes.map(({nombre, notas}) => ({
                    nombre,
                    promedio : notas.reduce((acc,nota)=> acc+=nota ,0) / notas.length
    }))
}

//console.log(calcularPromedio(estudiantes));
// [{ nombre: "Juan", promedio: 9 }, { nombre: "Ana", promedio: 8 }]


/* 
 Ejercicio 8: Crear un sistema de suscripción de eventos
Imagina que tienes una aplicación donde los usuarios pueden suscribirse a eventos, como "clic" o "submit". Crea un sistema donde los usuarios puedan suscribirse y emitir eventos con diferentes callbacks.
*/

let suscriptores = {};

function suscribir(evento, callback) {
    // Permite a los usuarios suscribirse a eventos
    suscriptores = {
        ...suscriptores,
        [evento] : suscriptores[evento] ?  [...suscriptores[evento], callback] : [callback]
    }
}

function emitirEvento(evento) {
    // Ejecuta todos los callbacks asociados a un evento
    suscriptores[evento].forEach(cb => cb());
}

suscribir("click", () => console.log("Se hizo clic"));
suscribir("click", () => console.log("Otro clic"));
emitirEvento("click")
// Se hizo clic
// Otro clic

/* 
 Ejercicio 9: Crear una cadena de procesamiento de datos
Tienes un conjunto de datos que pasa por una cadena de procesamiento. Cada paso en la cadena es una función que transforma los datos de alguna manera. Crea una función que reciba los datos iniciales y un array de funciones de procesamiento, y que aplique cada función en secuencia.
*/

const datos = [1, 2, 3];

function duplicar(n) {
    return n * 2;
}

function restarUno(n) {
    return n - 1;
}

function cadenaDeProcesamiento(datos, funciones) {
    // Usa reduce para aplicar todas las funciones en secuencia
   /*  const [du, rest] = funciones
   return datos.reduce((arr,dato)=>{
        arr.push(rest(du(dato)))
        return arr;
   },[]) */

   return funciones.reduce((acc,fn)=> acc.map(fn) ,datos)
}

console.log(cadenaDeProcesamiento(datos, [duplicar, restarUno]));
// [1, 3, 5]