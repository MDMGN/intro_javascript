/* const miliSeconds = 5000
console.log("Primero")
setTimeout(()=> console.log(`Esto se ejecuta ${miliSeconds}`),miliSeconds)
console.log("Al final")
 */
const duplicar=(n)=>{
    return new Promise((resolve, reject)=>{
        if(isNaN(n)){
            reject("No es un número")
        }
        resolve(n*2)
    })
}

duplicar("a")
.then((data)=> data + " algo")
.then(data => console.log(data))
.catch(err => console.error(err))
.finally(()=> console.log("successfully"))


fetch("https://jsonplaceholder.typicode.com/posts/120000")
.then( response => response.ok ? response.json() : Promise.reject(response.json()))
.then( data => console.log(data) )
.catch( err => console.log(err))

/* 
Ejercicio 1: Consulta a una API simulada con Promesas
Objetivo:
Simular una llamada a una API externa que devuelve una lista de frutas, utilizando promesas y métodos de arrays.

1. Crea una función que simule una llamada a una API con `setTimeout`, devolviendo un array de frutas después de 2 segundos.
2. Utiliza una **promesa** para esperar los datos.
3. Filtra el array para eliminar una fruta específica y mostrar las restantes.
*/


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