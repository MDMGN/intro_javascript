## Ejercicio 1: Consulta a una API simulada con Promesas
### Objetivo:
Simular una llamada a una API externa que devuelve una lista de frutas, utilizando promesas y métodos de arrays.

### Ejercicio:
1. Crea una función que simule una llamada a una API con `setTimeout`, devolviendo un array de frutas después de 2 segundos.
2. Utiliza una **promesa** para esperar los datos.
3. Filtra el array para eliminar una fruta específica y mostrar las restantes.

```js


const obtenerFrutas = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

obtenerFrutas(["manzana", "pera", "fresa", "mango", "banana"])
    .then((frutas) => {
        // Debería mostrar ["manzana", "fresa", "mango", "banana"]
    })
    .catch((error) => console.error(error));
```