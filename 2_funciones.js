// Composición y closure

function saludar(){
    const nombre = "Darren"
     
    return function (){
        console.log(`Hola ${nombre} desde saludar!`)
    }
}
function sumar(n){
    return function(n2){
        console.log(n + n2)
    }
}



saludar()()

sumar(5)(2)

const  saludar2= ()=>{
    nombre = "Darren"
    return  ()=>{
        console.log(nombre)
    }
}
saludar2()()

// Metodos de arrays
const frutas = ["manzana", "pera","fresa"]


const frutasConColor= frutas.map(function (fruta){
   return `${fruta} Azul`
})

const precios = [45.60,70,50]

const total = precios.reduce((acc,item) => {
    acc.push(item)
    return acc
} ,[])


console.log(total)

