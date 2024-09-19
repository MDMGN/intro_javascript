async function miFuncion() {
    return "Hola Mundo";
}

 miFuncion().then(console.log);  // Imprime "Hola Mundo


 async function API() {
    try{
        const response =await fetch("https://jsonplaceholder.typicode.com/posts")
        if(!response.ok){
            throw new Error("Error al consultar la API")
        }
        const data =await response.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
 }

 API()