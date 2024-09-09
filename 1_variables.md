
# Introducción a JavaScript: Tipos de Variables Primitivas y Compuestas

En esta clase vamos a explorar los **tipos de datos primitivos** y **compuestos** en JavaScript utilizando ejemplos prácticos. También entenderemos cómo se almacenan y manipulan en el lenguaje.

## 1. ¿Qué es una Variable en JavaScript?

Una **variable** es un contenedor para almacenar datos que pueden ser utilizados más adelante en el programa. En JavaScript, se pueden declarar utilizando `var`, `let` o `const`.

```js
// Declaración de una variable usando let
let nombre = 'Darren'; 

// Declaración de una variable constante con const
const apellidos = "Vargas Ramirez"; 

// Uso de una variable para almacenar números
let edad = 25;
```

### 1.1. Declaración de Variables

- **`let`**: Permite declarar variables que pueden cambiar su valor.
- **`const`**: Se utiliza para declarar variables cuyo valor no cambiará.

---

## 2. Tipos de Datos Primitivos

### 2.1. Tipos Comunes de Datos Primitivos

Los **primitivos** son los tipos de datos más simples en JavaScript. Incluyen:

- **String** (cadenas de texto)
- **Number** (números, tanto enteros como decimales)
- **Boolean** (verdadero o falso)
- **Undefined** (cuando una variable se declara pero no tiene un valor)
- **Null** (representa la ausencia intencionada de un valor)
- **NaN** (Not a Number, resultado de operaciones matemáticas inválidas)

```js
// Tipo de dato String
let nombre = 'Darren';

// Tipo de dato Number
let edad = 25;

// Tipo de dato Boolean
let esMasculino = true; 

// Tipo Undefined y Null
let indefinido; // undefined
let vacio = null; // null

// Not a Number
let valorErroneo = NaN;
```

### 2.2. Template Strings
Las **template strings** (plantillas de cadenas de texto) permiten incrustar expresiones dentro de cadenas de texto.

```js
const saludo = `Hola ${apellidos}`;
console.log(saludo); // Hola Vargas Ramirez
```

---

## 3. Tipos de Datos Compuestos

### 3.1. Arrays (Arreglos)

Los **arrays** son estructuras de datos que permiten almacenar múltiples valores bajo una sola variable.

```js
// Declaración de un array de números y un array anidado
const numbers = [1, 2, 3, 4, ["ssd"]];
```

Podemos acceder a los elementos de un array usando índices numéricos. El primer índice de un array es `0`.

### 3.2. Objetos

Un **objeto** es una estructura de datos más compleja que permite almacenar pares clave-valor. Cada clave (o propiedad) está asociada con un valor.

```js
// Declaración de un objeto persona con propiedades y métodos
const persona = {
    nombre: 'Michael',
    edad: 25,
    peliculasFavoritas: ["Avengers", "Iron Man"],

    // Método que utiliza 'this' para acceder a las propiedades del objeto
    saludar: function() {
        console.log(`Hello ${this.nombre}!`);
    }
};

// Modificar la propiedad nombre del objeto
persona.nombre = "Darren";

// Llamar al método saludar
persona.saludar(); // Output: Hello Darren!
```

### 3.3. ¿Qué es `this` en los Objetos?

La palabra clave `this` se refiere al objeto desde el cual se invoca el método. En el ejemplo anterior, `this.nombre` accede a la propiedad `nombre` del objeto `persona`.

---

## 4. Métodos de Arrays

### 4.1. `map()`
El método `map()` permite transformar los elementos de un array aplicando una función a cada uno de ellos.

```js
// Crear un nuevo array agregando "Azul" a cada fruta
const frutas = ["manzana", "pera", "fresa"];
const frutasConColor = frutas.map(function (fruta) {
    return `${fruta} Azul`;
});
console.log(frutasConColor); // ['manzana Azul', 'pera Azul', 'fresa Azul']
```

### 4.2. `reduce()`
El método `reduce()` ejecuta una función de reducción sobre cada elemento del array, resultando en un solo valor.

```js
// Calcular el total de un array de precios
const precios = [45.60, 70, 50];
let total = precios.reduce((acc, item) => {
    return acc + item;
}, 0);

console.log(total); // Output: 165.6
```

### 4.3. Modificar el Array

Puedes modificar arrays desde fuera de la función, ya que las variables declaradas con `let` o `const` que contienen arrays son **referencias** y no valores primitivos.

```js
// Función para agregar un valor al array total
function aumentarTotal(n) {
    total.push(n);
}

aumentarTotal(4);
console.log(total); // Output: [45.60, 70, 50, 4]
```

---

## 5. Conclusión

En esta lección aprendimos:

- La diferencia entre los **tipos de datos primitivos** y los **compuestos**.
- Cómo usar **objetos** y **arrays** para organizar datos en JavaScript.
- Los métodos útiles de arrays como `map()` y `reduce()`.
- La importancia de las **referencias** al manipular arrays y objetos en funciones.
