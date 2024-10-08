/* ## Ejercicio 1: Consulta a una API simulada con Promesas
### Objetivo:
Simular una llamada a una API externa que devuelve una lista de frutas, utilizando promesas y métodos de arrays.

1. Crea una función que simule una llamada a una API con `setTimeout`, devolviendo un array de frutas después de 2 segundos.
2. Utiliza una **promesa** para esperar los datos.
3. Filtra el array para eliminar una fruta específica y mostrar las restantes.

 */

const obtenerFrutas = () => {
   const data = ["manzana", "pera", "fresa", "mango", "banana"]
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}

obtenerFrutas()
    .then((frutas) => {
//console.log(frutas.filter((fruta)=> fruta !== "pera" ))
        // Debería mostrar ["manzana", "fresa", "mango", "banana"]
    })
    .catch((error) => console.error(error));

    /* 
    Ejercicio 2: Desestructuración y Promesas
### Objetivo:
Utilizar **desestructuración** en combinación con promesas para extraer datos específicos de un objeto obtenido tras una operación asíncrona.

1. Crea una promesa que resuelva un objeto `persona` con propiedades como `nombre`, `edad` y `peliculasFavoritas`.
2. Utiliza **desestructuración** para obtener directamente `nombre` y `peliculasFavoritas` dentro del `.then()`.
3. Usa `Object.keys()` para mostrar las claves del objeto resultante.


    */

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
        const {nombre, peliculasFavoritas} = persona
 /*        console.log(`Nombre: ${nombre}`)
        console.log(`Películas favoritas: ${peliculasFavoritas.join(", ")}`)
        console.log(Object.keys(persona).join(", "))
 */
       
        //Debería mostrar:
    // Nombre: Michael
    // Películas favoritas: "Avengers", "Iron Man"
    // nombre, edad, peliculasFavoritas
    })
    .catch((error) => console.error(error));

/* 
Ejercicio 3: Promesas encadenadas con Closure
Objetivo:
Utilizar closures para generar una función que devuelva promesas encadenadas.

Objetivos:
1. Crea una función generarPromesa que acepte un número n y devuelva una promesa que resuelva después de n segundos.
2. Encadena varias promesas utilizando un closure para mantener el número original y mostrar el tiempo transcurrido.
3. Controlar el error si el parametro "n" no es un número.

*/
function generarPromesa(n) {
    return function() {
        return new Promise((resolve, reject) => {
         //Completar la función
         if(isNaN(n)){
            reject("No es número")
            return;
         }
         
         setTimeout(()=>{
            console.log(`Esperé ${n} segundos.`)
            resolve(n)
         }, n *1000)
        });
    }
}

/*  generarPromesa(1)()
    .then((n) => generarPromesa(n+1)())
    .then((n) => generarPromesa(n+1)())
    .then((n)=> generarPromesa("m")())
    .catch((error) => console.error(error));
 */
//Debería mostrar
/* 
Esperé 1 segundos.
Esperé 2 segundos.
Esperé 3 segundos.
Error: 'm' no es un número.
*/

/* 
Ejercicio 4: Manejo de errores con Promesas
Objetivo:
Simular un manejo de errores en promesas para practicar el manejo asíncrono de fallos.

Ejercicio:
Crea una función que simule un login asíncrono (Después de un segundo). Si el usuario y contraseña no coinciden, debe lanzar un error. (usuario es "admin" y password es "P@ssw0rd")
Usa una promesa para manejar los errores de manera correcta.
*/
const login = (usuario, password) => {
    //Completa la función retornando una promesa
    return new Promise((resolve,reject)=>{
            usuario === "admin" && password === "P@ssw0rd" ? resolve("Login exitoso") : reject("Error: Usuario o contraseña incorrectos")
    })
}


/* login("admin","P@ssw0rd")
.then((msg)=> !console.log(msg) && login("admin","P@ssw0r"))
.catch(console.error)
 */
/* const [success, error] =  Promise.all([
login("admin","P@ssw0rd"),
login("admin","P@ssw0r")
]) */

console.log({error, success})
//LLama a la promesa y simula un login exitoso y un login incorrecto con los siguientes mensajes:
//Login exitoso
//Error: Usuario o contraseña incorrectos