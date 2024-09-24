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
 
let num = 5


 async function miFuncion() {
    return "Hola Mundo";
}
function addNum(n){
    num += n
}

export {
    num,
    addNum
}

/* export default num; */
 //export default asyncObtenerFrutas

/*  export {
    miFuncion,
    asyncObtenerFrutas
 }
 */

