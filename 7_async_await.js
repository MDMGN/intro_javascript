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

 //API()

 //


 
const obtenerFrutas = () => {
    const data = ["manzana", "pera", "fresa", "mango", "banana"]
     return new Promise((resolve) => {
         setTimeout(() => {
             resolve(data);
         }, 2000);
     });
 }
 
 const asyncObtenerFrutas= async ()=>{
    try{
        const frutas = await obtenerFrutas()
        if(!frutas) throw new Error("Error: No hay frutas")
        console.log(frutas.filter((fruta)=> fruta !== "pera" ))
    }catch(err){
        console.error(err)
    }
 }
 asyncObtenerFrutas()

 const login = (usuario, password) => {
    //Completa la función retornando una promesa
    return new Promise((resolve,reject)=>{
            usuario === "admin" && password === "P@ssw0rd" ? resolve("Login exitoso") : reject("Error: Usuario o contraseña incorrectos")
    })
}

async function asyncLogin(){
    try{
        const [success, error] = await Promise.all([
            login("admin","P@ssw0rd"),
            login("admin","P@ssw0r")
            ])
            console.log({error, success})
    }catch(err){
        console.log(err)
    }

}

asyncLogin()
