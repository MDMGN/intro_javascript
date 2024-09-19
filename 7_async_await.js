async function miFuncion() {
    return "Hola Mundo";
}

 miFuncion().then(console.log);  // Imprime "Hola Mundo


 async function API() {
    try{
        const response =await fetch("https://jsonplaceholder.typicode.com/post")
        if(!response.ok){
            throw new Error("Error al consultar la API")
        }
        const data =await response.json()
    }catch(err){
        console.log(err)
    }
 }
 
 API()