# Operadores, Optional Chaining y Nullish Coalescing en JavaScript

### Comparación de tipos
```javascript
const n1 = "2"; // Tipo string
const n2 = 2; // Tipo number

// Comparación estricta entre el valor 1 (número) y el número 2
const resp = (n1 === n2); // Valor y tipo
//Output : false

const resp2 = (n1 == n2); // Valor
//Output : true

// Uso de un operador ternario para evaluar la comparación
// console.log( resp ? "true" : "false"); // Resultado: false
```

## Operadores de cortocircuito OR y AND
### Operador OR (||)

Si el valor es falsy (0, undefined, false, null, ""), devuelve el valor alternativo.

Si el valor es truthy, devuelve el valor mismo.
```javascript

// const value = 0; // Falsy
// const resp2 = value || "some"; // El valor es 0, por lo que devuelve "some"

// Otro ejemplo:
const value = 2; // Truthy
const resp2 = value || "some"; // Devuelve 2, ya que no necesita el valor alternativo
```


## Operador AND (&&)

Devuelve el segundo valor solo si el primero es truthy, de lo contrario devuelve el primer valor.

``` javascript
const value = "Casa"; // Truthy
const resp2 = value && "some"; // Devuelve "some" porque `value` es truthy

console.log(resp2); // Resultado: "some"
```

### Optional Chaining (?.)
Permite acceder a propiedades de objetos que podrían no existir sin lanzar un error. Si la propiedad no existe, devuelve undefined.

```javascript
Copiar código
const value2 = {
    nombre: "Darren"
};

// Usamos optional chaining para acceder a una propiedad que no sabemos si existirá

console.log(value2?.apellido); // 
```
Resultado: undefined (sin error)

### Nullish Coalescing (??)
Devuelve el lado derecho si el valor de la izquierda es null o undefined. Diferente del OR (||), que también considera 0, false y "" como falsy.

```javascript
const value3 = undefined ?? "some"; // `undefined` se reemplaza por "some"
console.log(value3); // Resultado: "some"
```

## Resumen

Operador OR (||): Devuelve el primer valor truthy o el valor alternativo.

Operador AND (&&): Devuelve el segundo valor si el primero es truthy.

Optional Chaining (?.): Evita errores al acceder a propiedades no definidas.

Nullish Coalescing (??): Devuelve el valor alternativo solo si es null o undefined.