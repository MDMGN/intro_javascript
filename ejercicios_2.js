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
        console.log(frutas.filter((fruta)=> fruta !== "pera" ))
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
        console.log(`Nombre: ${nombre}`)
        console.log(`Películas favoritas: ${peliculasFavoritas.join(", ")}`)
        console.log(Object.keys(persona).join(", "))

       
        //Debería mostrar:
    // Nombre: Michael
    // Películas favoritas: "Avengers", "Iron Man"
    // nombre, edad, peliculasFavoritas
    })
    .catch((error) => console.error(error));
