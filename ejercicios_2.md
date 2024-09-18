## Ejercicio 1: Consulta a una API simulada con Promesas
### Objetivo:
Simular una llamada a una API externa que devuelve una lista de frutas, utilizando promesas y métodos de arrays.

### Ejercicio:
1. Crea una función que simule una llamada a una API con `setTimeout`, devolviendo un array de frutas después de 2 segundos.
2. Utiliza una **promesa** para esperar los datos.
3. Filtra el array para eliminar una fruta específica y mostrar las restantes.

```js


const obtenerFrutas = () => {
   const data = ["manzana", "pera", "fresa", "mango", "banana"]
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

obtenerFrutas()
    .then((frutas) => {
        // Debería mostrar ["manzana", "fresa", "mango", "banana"]
    })
    .catch((error) => console.error(error));
```

## Ejercicio 2: Desestructuración y Promesas
### Objetivo:
Utilizar **desestructuración** en combinación con promesas para extraer datos específicos de un objeto obtenido tras una operación asíncrona.

### Ejercicio:
1. Crea una promesa que resuelva un objeto `persona` con propiedades como `nombre`, `edad` y `peliculasFavoritas`.
2. Utiliza **desestructuración** para obtener directamente `nombre` y `peliculasFavoritas` dentro del `.then()`.
3. Usa `Object.keys()` para mostrar las claves del objeto resultante.

```js
const obtenerPersona = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                nombre: 'Michael',
                edad: 25,
                peliculasFavoritas: ["Avengers", "Iron Man"]
            });
        }, 1500);
    });
}

obtenerPersona()
    .then((persona)=>{
    //Debería mostrar:
    // Nombre: Michael
    // Películas favoritas: Avengers, Iron Man
    // nombre, edad, peliculasFavoritas
    })
    .catch((error) => console.error(error));

```


---

## Ejercicio 3: Promesas encadenadas con Closure
### Objetivo:
Utilizar closures para generar una función que devuelva promesas encadenadas.

Ejercicio:
1. Crea una función generarPromesa que acepte un número n y devuelva una promesa que resuelva después de n segundos.
2. Encadena varias promesas utilizando un closure para mantener el número  y mostrar el tiempo transcurrido.
```js
function generarPromesa(n) {
    return function() {
        return new Promise((resolve, reject) => {
         //Completar la función
        });
    }
}

generarPromesa(1)()
    .then((n) => generarPromesa(n+1)())
    .then((n) => generarPromesa(n+1)())
    .then((n)=> generarPromesa("m")())
    .then(console.error)
    .catch((error) => console.error(error));

//Debería mostrar
//Esperé 1 segundos.
//Esperé 2 segundos.
//Esperé 3 segundos.
```

---

## Ejercicio 4: Manejo de errores con Promesas
### Objetivo:
Simular un manejo de errores en promesas para practicar el manejo asíncrono de fallos.

### Ejercicio:
1. Crea una función que simule un login asíncrono (Después de un segundo). Si el usuario y contraseña no coinciden, debe lanzar un error. (usuario es "admin" y password es "P@ssw0rd")
2. Usa una promesa para manejar los errores de manera correcta.

```js
const login = (usuario, password) => {
    //Completa la función retornando una promesa
}

//LLama a la promesa y simula un login exitoso y un login incorrecto con los siguientes mensajes:
//Login exitoso
//Error: Usuario o contraseña incorrectos
```