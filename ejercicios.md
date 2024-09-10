## Ejercicios Prácticos

### Ejercicio 1: Filtrar productos según su disponibilidad y calcular el total
Tienes una tienda en línea que muestra productos con su disponibilidad y precio. Crea una función que filtre los productos disponibles y calcule el precio total de los mismos.

```javascript
const productos = [
    { nombre: "Laptop", disponible: true, precio: 1000 },
    { nombre: "Teléfono", disponible: false, precio: 500 },
    { nombre: "Tablet", disponible: true, precio: 300 }
];

function obtenerTotalDeDisponibles(productos) {
    // Filtrar productos disponibles y calcular el total usando callbacks y reduce
}

console.log(obtenerTotalDeDisponibles(productos)); // 1300
```

### Ejercicio 2: Crear un sistema de puntuación para un juego
Imagina que estás desarrollando un juego donde los jugadores acumulan puntos en varias rondas. Crea una función que reciba un array de puntuaciones por ronda y calcule el total de puntos de cada jugador.

```javascript
const jugadores = [
    { nombre: "Player1", puntuaciones: [10, 20, 15] },
    { nombre: "Player2", puntuaciones: [5, 15, 20] }
];

function calcularPuntuacionTotal(jugadores) {
    // Usa reduce para calcular el total de puntos por jugador
}

console.log(calcularPuntuacionTotal(jugadores)); 
// [{ nombre: "Player1", total: 45 }, { nombre: "Player2", total: 40 }]
```

### Ejercicio 3: Actualizar un inventario de tienda
Tienes un inventario de productos en una tienda y deseas actualizarlo. Crea una función que permita restar la cantidad de un producto vendido y también ver si el producto ya está agotado.

```javascript
const inventario = {
    manzanas: 10,
    peras: 15,
    naranjas: 20
};

function actualizarInventario(producto, cantidadVendida) {
    // Usa operadores de corto circuito para verificar si hay suficientes productos
    // Actualiza el inventario y verifica si un producto está agotado
}

actualizarInventario("manzanas", 5);
console.log(inventario); // { manzanas: 5, peras: 15, naranjas: 20 }
actualizarInventario("manzanas", 5);
console.log(inventario); // { manzanas: 0, peras: 15, naranjas: 20 }
```

### Ejercicio 4: Gestión de usuarios con propiedades computadas
En una aplicación de gestión de usuarios, necesitas crear un nuevo objeto de usuario usando datos dinámicos. Usando propiedades computadas, crea una función que permita agregar nuevos usuarios a un objeto de base de datos.

```javascript
const usuariosDB = {};

function agregarUsuario(nombre, apellido) {
    // Usa propiedades computadas para agregar usuarios con claves dinámicas
}

agregarUsuario("Juan", "Pérez");
agregarUsuario("Ana", "García");

console.log(usuariosDB);
// { Juan: "Pérez", Ana: "García" }
```

### Ejercicio 5: Crear un buscador de productos por nombre
En una tienda online, necesitas implementar un buscador que permita a los usuarios buscar productos por nombre parcial. Crea una función que reciba un array de productos y un término de búsqueda, y devuelva los productos que contengan ese término en su nombre.

```javascript
const productosTienda = [
    { nombre: "Camiseta", precio: 15 },
    { nombre: "Pantalón", precio: 25 },
    { nombre: "Zapatos", precio: 50 }
];

function buscarProductoPorNombre(productos, termino) {
    // Usa filter para buscar productos cuyo nombre incluya el término
}

console.log(buscarProductoPorNombre(productosTienda, "Cami")); // [{ nombre: "Camiseta", precio: 15 }]
```

---

## Ejercicios Intermedios

### Ejercicio 6: Gestión de tareas pendientes
Estás desarrollando una aplicación de tareas pendientes. Crea funciones para agregar tareas, marcarlas como completadas y filtrar las que están pendientes. Usa callbacks para realizar las operaciones de filtrado y mapeo de los estados de las tareas.

```javascript
let tareas = [
    { nombre: "Hacer compras", completada: false },
    { nombre: "Estudiar", completada: false },
    { nombre: "Pasear al perro", completada: true }
];

function agregarTarea(nombre) {
    // Agrega una nueva tarea
}

function completarTarea(nombre) {
    // Marca una tarea como completada
}

function obtenerTareasPendientes(tareas) {
    // Usa filter para obtener las tareas no completadas
}

agregarTarea("Ir al gimnasio");
completarTarea("Hacer compras");

console.log(obtenerTareasPendientes(tareas)); 
// [{ nombre: "Estudiar", completada: false }, { nombre: "Ir al gimnasio", completada: false }]
```

### Ejercicio 7: Calcular el promedio de notas
En una escuela, deseas calcular el promedio de notas de varios estudiantes. Crea una función que reciba un array de estudiantes, donde cada estudiante tiene un array de notas, y devuelva el promedio de notas de cada estudiante.

```javascript
const estudiantes = [
    { nombre: "Juan", notas: [10, 9, 8] },
    { nombre: "Ana", notas: [9, 8, 7] }
];

function calcularPromedio(estudiantes) {
    // Usa map y reduce para calcular el promedio de notas por estudiante
}

console.log(calcularPromedio(estudiantes));
// [{ nombre: "Juan", promedio: 9 }, { nombre: "Ana", promedio: 8 }]
```

---

## Ejercicios Avanzados

### Ejercicio 8: Crear un sistema de suscripción de eventos
Imagina que tienes una aplicación donde los usuarios pueden suscribirse a eventos, como "clic" o "submit". Crea un sistema donde los usuarios puedan suscribirse y emitir eventos con diferentes callbacks.

```javascript
const suscriptores = {};

function suscribir(evento, callback) {
    // Permite a los usuarios suscribirse a eventos
}

function emitirEvento(evento) {
    // Ejecuta todos los callbacks asociados a un evento
}

suscribir("click", () => console.log("Se hizo clic"));
suscribir("click", () => console.log("Otro clic"));

emitirEvento("click");
// Se hizo clic
// Otro clic
```

### Ejercicio 9: Crear una cadena de procesamiento de datos
Tienes un conjunto de datos que pasa por una cadena de procesamiento. Cada paso en la cadena es una función que transforma los datos de alguna manera. Crea una función que reciba los datos iniciales y un array de funciones de procesamiento, y que aplique cada función en secuencia.

```javascript
const datos = [1, 2, 3];

function duplicar(n) {
    return n * 2;
}

function restarUno(n) {
    return n - 1;
}

function cadenaDeProcesamiento(datos, funciones) {
    // Usa reduce para aplicar todas las funciones en secuencia
}

console.log(cadenaDeProcesamiento(datos, [duplicar, restarUno]));
// [1, 3, 5]
```

### Ejercicio 10: Manejar errores con Optional Chaining
En una aplicación de gestión de usuarios, no todos los usuarios tienen todas las propiedades (por ejemplo, "apellido"). Usa *optional chaining* para asegurarte de que no se produzcan errores al intentar acceder a propiedades inexistentes.

```javascript
const usuario = {
    nombre: "Darren",
    direccion: {
        ciudad: "Madrid"
    }
};

function obtenerDireccionCompleta(usuario) {
    // Usa optional chaining para evitar errores si alguna propiedad no existe
}

console.log(obtenerDireccionCompleta(usuario)); // "Madrid"
console.log(obtenerDireccionCompleta({})); // "Dirección no disponible"