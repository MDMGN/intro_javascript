# Documentación: Uso de `async/await` y Módulos en JavaScript

## Tabla de Contenidos
1. [Introducción a `async/await`](#introducción-a-asyncawait)
2. [Ejemplo básico de `async/await`](#ejemplo-básico-de-asyncawait)
   - [Convertir Promesas a `async/await`](#convertir-promesas-a-asyncawait)
   - [Manejo de Errores con `try/catch`](#manejo-de-errores-con-trycatch)
3. [Módulos en JavaScript](#módulos-en-javascript)
   - [Importación y Exportación de Funciones](#importación-y-exportación-de-funciones)
   - [Importación y Exportación por Defecto](#importación-y-exportación-por-defecto)
4. [Uso de `async/await` con Módulos](#uso-de-asyncawait-con-módulos)
5. [Conclusión](#conclusión)

---

## Introducción a `async/await`

`async/await` es una sintaxis que simplifica el trabajo con código asíncrono, permitiendo escribir funciones asíncronas de manera más legible y similar a las funciones síncronas. Está construido sobre las promesas, pero facilita su manejo al eliminar la necesidad de encadenar múltiples `.then()`.

### Funciones `async`
Una función marcada con `async` siempre devuelve una promesa. Si se retorna un valor dentro de una función `async`, ese valor se envuelve automáticamente en una promesa resuelta.

```js
async function miFuncion() {
  return "Hola Mundo";
}
miFuncion().then(console.log);  // Imprime "Hola Mundo"
```

### Palabra clave `await`
La palabra clave `await` se utiliza dentro de funciones `async` para esperar a que una promesa se resuelva. La ejecución de la función se detiene hasta que la promesa se resuelva o se rechace.

```js
async function obtenerDatos() {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await respuesta.json();
  console.log(data);
}
```

---

## Ejemplo básico de `async/await`

En este ejemplo, convertimos el código de promesas a `async/await` para obtener datos desde una API.

### Código con Promesas

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Convertir Promesas a `async/await`

Con `async/await`, el mismo código se puede simplificar y hacer más legible:

```js
async function obtenerPost() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await respuesta.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

obtenerPost();
```

### Explicación:

1. **`async function obtenerPost()`:** Creamos una función asíncrona.
2. **`await fetch(...)`:** Pausamos la ejecución hasta que la promesa `fetch` se resuelva.
3. **`try/catch`:** Utilizamos `try/catch` para manejar cualquier error que ocurra durante la ejecución del código.

---

## Manejo de Errores con `try/catch`

En el bloque anterior, el manejo de errores se realiza mediante un bloque `try/catch`. Esto reemplaza el uso de `.catch()` en las promesas y permite capturar errores de manera más estructurada.

### Ejemplo

```js
async function obtenerDatosErroneos() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/120000'); // ID inexistente
    if (!respuesta.ok) throw new Error("Recurso no encontrado");
    const data = await respuesta.json();
    console.log(data);
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

obtenerDatosErroneos();
```

---

## Módulos en JavaScript

Los módulos en JavaScript permiten dividir el código en archivos reutilizables y bien organizados. Cada archivo puede importar o exportar código (funciones, variables, clases, etc.) y luego ser utilizado en otras partes del proyecto.

### Importación y Exportación de Funciones

En este ejemplo, exportamos una función desde un archivo y la importamos en otro archivo.

#### `operaciones.js` (Exportando funciones)

```js
export function suma(a, b) {
  return a + b;
}

export function resta(a, b) {
  return a - b;
}
```

#### `app.js` (Importando funciones)

```js
import { suma, resta } from './operaciones.js';

console.log(suma(5, 3));  // Imprime 8
console.log(resta(5, 3)); // Imprime 2
```

### Importación y Exportación por Defecto

Una **exportación por defecto** permite exportar una sola entidad de un archivo sin necesidad de usar llaves `{}` al importarla.

#### `operacionPorDefecto.js`

```js
export default function multiplicar(a, b) {
  return a * b;
}
```

#### `app.js`

```js
import multiplicar from './operacionPorDefecto.js';

console.log(multiplicar(5, 3));  // Imprime 15
```

---

## Uso de `async/await` con Módulos

Podemos combinar `async/await` con módulos para estructurar mejor nuestro código. Por ejemplo, podemos crear un módulo que contenga la lógica para realizar peticiones asíncronas y usar esa funcionalidad en otro archivo.

### `api.js` (Exportando una función asíncrona)

```js
export async function obtenerPost(id) {
  try {
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!respuesta.ok) throw new Error("Post no encontrado");
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error("Error en obtenerPost:", error);
  }
}
```

### `app.js` (Importando y utilizando la función)

```js
import { obtenerPost } from './api.js';

async function mostrarPost() {
  const post = await obtenerPost(1);
  console.log(post);
}

mostrarPost();
```

### Explicación

1. **`api.js`:** Exportamos la función `obtenerPost` usando `async/await` para realizar una petición HTTP y devolver los datos.
2. **`app.js`:** Importamos la función y la usamos dentro de otra función `async`, esperando su resultado.

---

## Conclusión

- **`async/await`** permite manejar código asíncrono de manera más clara y legible que con promesas encadenadas.
- **Módulos** en JavaScript son esenciales para organizar el código y permitir su reutilización entre diferentes archivos. 
- **Combinación de `async/await` y módulos**: Dividir el código en funciones o módulos reutilizables que manejen operaciones asíncronas es una buena práctica para escribir aplicaciones escalables y fáciles de mantener.

---

¡Ahora estás listo para usar `async/await` y módulos en tus proyectos de JavaScript de manera más eficiente!