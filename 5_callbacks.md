
# Callbacks en JavaScript

## ¿Qué es un Callback?

Un **callback** es una función que se pasa como argumento a otra función, y que se ejecuta después de que se haya completado alguna operación dentro de la función que lo recibe. Son una forma de asegurarse de que una función no se ejecute antes de que otra haya terminado.

Los callbacks son fundamentales para la programación asíncrona, pero también se utilizan comúnmente en operaciones sincrónicas, como los métodos `filter`, `map`, y `reduce` en los arrays de JavaScript.

### Ejemplo 1: Contar la letra más repetida en una cadena

```javascript
function longest(string) {
    // Se convierte la cadena en un array de letras y se usa reduce para contar las apariciones de cada letra
    const objAcc = string.split("").reduce((acc, letter) => {
        // Incrementa el valor de la letra si ya existe, o inicializa en 1 si no existe
        acc[letter] = (acc[letter] || 0) + 1;
        return acc;
    }, { });

    // Retorna el valor máximo de las ocurrencias de las letras
    return Object.values(objAcc).length ? Math.max(...Object.values(objAcc)) : 0;
}
```

### Explicación

- **`reduce`** es un método que aplica una función a cada elemento del array para reducirlo a un solo valor. En este caso, estamos acumulando el número de veces que aparece cada letra en la cadena.
- La **clave** es que `reduce` toma una función *callback* que recibe dos argumentos: el acumulador (`acc`) y el valor actual (`letter`). Esta función acumula el número de veces que aparece cada letra.
- Finalmente, se obtiene el valor máximo de las ocurrencias utilizando `Math.max`.

---

## Ejemplo 2: Implementación de un `filter` personalizado

El método `filter` devuelve un nuevo array que contiene todos los elementos que pasen una prueba (función *callback*).

```javascript
const arr_ = [2, 4, 5, 6, 7];

function filter(arr, cb) {
    const arr2 = [];
    
    // Se recorre el array original
    for (let num of arr) {
        // Ejecuta la función callback para determinar si el número debe ser filtrado
        if (cb(num)) {
            arr2.push(num);
        }
    }
    return arr2;
}

// Filtra todos los elementos excepto el número 7
console.log(filter(arr_, (el) => el !== 7));
```

### Explicación

- El método `filter` recibe una función *callback* que se aplica a cada elemento del array. Si la función *callback* devuelve `true`, el elemento es incluido en el nuevo array, de lo contrario es excluido.
- En este caso, estamos filtrando todos los elementos que no sean `7`.
- La función `cb` es la *callback*, que es pasada como argumento y ejecutada en cada iteración del array.

---

## Ejemplo 3: Implementación de un `map` personalizado

El método `map` crea un nuevo array con los resultados de aplicar una función *callback* a cada elemento del array original.

```javascript
function map(arr, cb) {
    const aux = [];
    
    // Se aplica la función callback a cada elemento del array
    arr.forEach((el) => aux.push(cb(el)));
    
    return aux;
}

// Añade 5 a cada número del array
console.log(map(arr_, (el) => el + 5));
```

### Explicación

- **`map`** es similar a `forEach`, pero devuelve un nuevo array con los resultados de aplicar una función *callback* a cada elemento.
- Aquí estamos recorriendo el array original y aplicando la función *callback* que suma `5` a cada número del array.
- El array resultante se devuelve con los valores modificados.

---

## Resumen

- Las **funciones de orden superior** como `map`, `filter`, y `reduce` toman funciones *callback* como argumento y son esenciales para manipular arrays en JavaScript.
- Un **callback** se usa para definir qué operación debe ejecutarse en cada elemento de un array, permitiendo que las funciones sean reutilizables y más flexibles.
- En estos ejemplos, hemos implementado manualmente las funciones `filter` y `map` usando *callbacks* para entender su funcionamiento interno.