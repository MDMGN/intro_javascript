
# Desestructuración de JavaScript y operaciones de objetos/arrays

En este documento, exploramos conceptos de JavaScript como la desestructuración, las operaciones de objetos y matrices, y métodos como 'Object.keys', 'Object.values' y 'filter'.

## Desestructuración de la asignación en objetos y arrays 

La desestructuración permite desempaquetar los valores de las matrices o las propiedades de los objetos en variables distintas.

```js
// Object Destructuring
const persona = {
    nombre: 'Michael',
    edad: 25,
    peliculasFavoritas : ["Avengers","Iron - Man"],
}

console.log(persona.nombre) // Accediendo a nombre 'nombre'

const { peliculasFavoritas, ...r } = persona
// Desestructura 'peliculasFavoritas' y almacena el resto de propiedades en 'r'
```

Aquí, desestructuramos 'peliculasFavoritas' del objeto 'persona'. El resto de las propiedades (en este caso, 'nombre' y 'edad') se almacenan en 'r'.

### Desestructuración en Arrays

```js
const alumnos = ["Imanol","Mikel","Asier","Marcial","Unai"];
```

El array 'alumnos' contiene una lista de nombres. Usemos la desestructuración para asignar valores a las variables:

```js
const frutas = ["manzana", "pera","fresa"]
const [fruta1, fruta2, ...restFruit] = frutas

console.log({fruta1, fruta2, restFruit})
// Output: { fruta1: 'manzana', fruta2: 'pera', restFruit: ['fresa'] }
```

Aquí, a 'fruta1' y 'fruta2' se les asignan el primer y segundo valor de la matriz, mientras que 'restFruit' toma los elementos restantes como una matriz.

### Propiedades computadas en objetos

Las propiedades computadas de los objetos permiten nombres de propiedad dinámicos.

```js
let obj = { Imanol: "Jauregui" }
obj = { ...obj, [alumnos[3]]: "Jauregui" }
console.log(obj)
// Output: { Imanol: 'Jauregui', Marcial: 'Jauregui' }
```

Esto propaga el objeto 'obj' y agrega dinámicamente una nueva propiedad donde la clave es 'alumnos[3]' ("Marcial").

## Métodos de objeto: 'Object.keys' y 'Object.values'
`Object.keys()` devuelve una matriz de los nombres de propiedad propios de un objeto, y `Object.values()` devuelve una matriz de valores de propiedad.

```js
// Object Values
Object.values(persona).forEach((el) => console.log(el))
// Logs: 'Michael', 25, ['Avengers', 'Iron - Man']

// Object Keys
Object.keys(persona).forEach((el) => console.log(el))
// Logs: 'nombre', 'edad', 'peliculasFavoritas'
```
En estos ejemplos, 'Object.keys()' imprime los nombres de las propiedades, mientras que 'Object.values()' imprime los valores.

## Filtrado de arrays y objetos

### Filtrado de arrays

`filter()`es un método de matriz que crea una nueva matriz con todos los elementos que pasan una prueba proporcionada por una función (callback).

```js
const frutas2 = frutas.filter((el) => el !== "manzana")
console.log(frutas2)
// Output: ['pera', 'fresa']
```

Aquí, `filter()`se utiliza para crear una matriz que excluya "manzana".

### Object Key Filtrado

También podemos filtrar las claves de los objetos usando `Object.keys()` y `filter()`.

```js
const obj3 = Object.keys(persona).filter(el => el != "nombre")
console.log(obj3)
// Output: ['edad', 'peliculasFavoritas']
```

Esto filtra la clave `nombre` del objeto `persona`.
