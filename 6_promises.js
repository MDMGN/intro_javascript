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