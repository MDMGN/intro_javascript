# Documentación: Manejo de Promesas, `setTimeout` y `fetch` en JavaScript

## Tabla de Contenidos
1. [Uso de `setTimeout`](#uso-de-settimeout)
2. [Uso de Promesas con Ejemplos](#uso-de-promesas-con-ejemplos)
   - [Ejemplo con el método `duplicar`](#ejemplo-con-el-método-duplicar)
   - [Manejo de errores en Promesas](#manejo-de-errores-en-promesas)
   - [Métodos `.then`, `.catch` y `.finally`](#métodos-then-catch-y-finally)
3. [Uso de `fetch` para realizar peticiones HTTP](#uso-de-fetch-para-realizar-peticiones-http)
4. [Conclusión](#conclusión)

---

## Uso de `setTimeout`

La función `setTimeout` nos permite ejecutar una función después de que pase un cierto tiempo. En este ejemplo, se está utilizando para retrasar una salida en la consola.

### Ejemplo

```js
const miliSeconds = 5000;

console.log("Primero");

setTimeout(() => {
  console.log(`Esto se ejecuta después de ${miliSeconds} milisegundos`);
}, miliSeconds);

console.log("Al final");
```

### Explicación

1. **`console.log("Primero")`:** Se ejecuta inmediatamente, mostrando el texto "Primero".
2. **`setTimeout`:** La función dentro del `setTimeout` se ejecuta después de 5000 milisegundos (5 segundos). Al pasar este tiempo, se imprime el mensaje en la consola.
3. **`console.log("Al final")`:** Aunque aparece después del `setTimeout`, se ejecuta inmediatamente, antes de que transcurran los 5 segundos.

---

## Uso de Promesas con Ejemplos

Una **promesa** en JavaScript representa la eventual finalización o falla de una operación asíncrona. Puede estar en tres estados: pendiente (`pending`), resuelta (`fulfilled`) o rechazada (`rejected`).

### Ejemplo con el método `duplicar`

En este ejemplo, se define una función `duplicar`, que retorna una promesa. Si el argumento proporcionado no es un número, la promesa es rechazada; si lo es, se resuelve con el doble del número.

```js
const duplicar = (n) => {
  return new Promise((resolve, reject) => {
    if (isNaN(n)) {
      reject("No es un número");
    }
    resolve(n * 2);
  });
};
```

### Uso de la Promesa

```js
duplicar("a")
  .then((data) => data + " algo") // Encadenamos un 'then' para añadir una cadena
  .then((data) => console.log(data)) // Imprimimos el resultado
  .catch((err) => console.error(err)) // Si se rechaza, se captura el error
  .finally(() => console.log("successfully")); // Se ejecuta siempre, exitoso o fallido
```

### Explicación

1. **`duplicar("a")`:** Llamamos a la función con el argumento `"a"`. Dado que no es un número, la promesa se **rechaza**.
2. **`catch`:** Capturamos el error con el método `.catch`, que imprime `No es un número` en la consola.
3. **`finally`:** El bloque `finally` se ejecuta siempre, sin importar si la promesa se resolvió o se rechazó. Imprime `successfully` en la consola.

### Manejo de errores en Promesas

El método `.catch` nos permite manejar los errores o rechazos que ocurren durante la ejecución de una promesa.

---

## Uso de `fetch` para realizar peticiones HTTP

El método `fetch` es utilizado para realizar peticiones HTTP desde el navegador. Devuelve una promesa que se resuelve con la respuesta de la petición.

### Ejemplo con `fetch`

```js
fetch("https://jsonplaceholder.typicode.com/posts/120000")
  .then((response) => (response.ok ? response.json() : Promise.reject(response.json())))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

### Explicación

1. **`fetch("https://jsonplaceholder.typicode.com/posts/120000")`:** Realiza una petición HTTP a la URL especificada. En este caso, intenta obtener el post con ID 120000.
   
2. **`response.ok`:** El primer `.then` verifica si la respuesta fue exitosa (código de estado HTTP en el rango 200-299). Si `response.ok` es `true`, se llama a `response.json()` para parsear el cuerpo de la respuesta como JSON.

3. **`Promise.reject`:** Si la respuesta no es exitosa, se rechaza la promesa utilizando `Promise.reject()`.

4. **`catch`:** Si la petición falla (por ejemplo, el post con ID 120000 no existe), se captura el error y se imprime en la consola.

---

## Métodos `.then`, `.catch` y `.finally`

### `.then`

Este método se ejecuta cuando una promesa es **resuelta** con éxito. Puedes encadenar múltiples `.then` para realizar operaciones sucesivas sobre los datos.

### `.catch`

Este método captura cualquier error o rechazo en la promesa, ya sea porque la promesa se rechazó explícitamente o porque hubo un error en algún paso del encadenamiento de `.then`.

### `.finally`

El bloque `finally` se ejecuta al final, independientemente de si la promesa se resolvió o se rechazó. Es útil para realizar operaciones de limpieza o acciones que deben ejecutarse siempre, como cerrar conexiones o limpiar estados.

---

## Conclusión

Este ejemplo cubre varios conceptos importantes en JavaScript:

1. **Operaciones asíncronas**: Con el uso de `setTimeout`, simulamos tareas que toman tiempo.
2. **Promesas**: Con las promesas y los métodos `.then`, `.catch`, y `.finally`, gestionamos el flujo de código asíncrono.
3. **Peticiones HTTP**: El uso de `fetch` nos permite realizar peticiones asíncronas y manejar respuestas del servidor.

Cada uno de estos conceptos es fundamental para trabajar con JavaScript moderno y es muy útil para gestionar operaciones complejas como peticiones de red, lecturas de bases de datos o cualquier tarea que necesite ejecutarse de manera no bloqueante.