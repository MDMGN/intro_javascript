
# Composición y Closure en JavaScript

Este documento explora la composición y el concepto de "closure" en JavaScript, junto con algunos ejemplos prácticos de funciones y métodos de arrays.

## Composición y Closure

### Función `saludar`

```javascript
function saludar() {
    const nombre = "Darren";
     
    return function() {
        console.log(`Hola ${nombre} desde saludar!`);
    }
}

saludar()();  // Ejecuta la función inmediatamente
```

**Descripción:**
- La función `saludar` crea una variable `nombre` dentro de su scope.
- Devuelve una función anónima que tiene acceso al valor de `nombre` gracias al "closure".
- El "closure" es el concepto que permite que una función interna acceda a variables de la función exterior, incluso después de que la función externa haya terminado de ejecutarse.

### Función `sumar`

```javascript
function sumar(n) {
    return function(n2) {
        console.log(n + n2);
    }
}

const sumar5 = sumar(5);  // Guardamos una función con n=5
console.log(sumar5(2));   // Imprime 7 (5 + 2)
```

**Descripción:**
- La función `sumar` devuelve otra función, la cual suma `n` y `n2`.
- Este es otro ejemplo de "closure", donde la función interna recuerda el valor de `n` al ser invocada posteriormente.

### Función `saludar2` con función interna

```javascript
const saludar2 = () => {
    const nombre = "Darren";  // Definimos la variable "nombre"
    
    return () => {
        console.log(nombre);  // La función interna accede a "nombre"
    };
    
    function saludarDentro() {
        console.log("");
    }
    
    saludar2();
}

saludar2()();  // Ejecuta la función inmediatamente
```

**Descripción:**
- `saludar2` es una función flecha que define una variable `nombre` y devuelve otra función flecha que tiene acceso a `nombre` gracias a los closures.
- También incluye una función anidada `saludarDentro`, que es solo una demostración de cómo pueden convivir múltiples funciones dentro de una misma.

## Métodos de Arrays

### Método `map` para modificar elementos

```javascript
const frutas = ["manzana", "pera", "fresa"];

const frutasConColor = frutas.map(function(fruta) {
   return `${fruta} Azul`;  // Modifica cada fruta agregando "Azul"
});

console.log(frutasConColor);  // ["manzana Azul", "pera Azul", "fresa Azul"]
```

**Descripción:**
- El método `map` itera sobre cada elemento del array `frutas` y devuelve un nuevo array donde a cada fruta se le ha añadido el texto "Azul".

### Método `reduce` para acumular valores

```javascript
const precios = [45.60, 70, 50];

let total = precios.reduce((acc, item) => {
    acc.push(item);
    return acc;
}, []);

console.log(total);  // [45.60, 70, 50]
```

**Descripción:**
- `reduce` permite transformar o reducir un array a un solo valor, en este caso estamos acumulando los valores del array `precios` en un nuevo array `total`.

## Resumen

Este documento cubre algunos conceptos clave de JavaScript, como el uso de closures para crear funciones que recuerdan el entorno en el que fueron creadas. También demuestra cómo los métodos `map` y `reduce` pueden ser usados para manipular arrays de manera eficiente.
